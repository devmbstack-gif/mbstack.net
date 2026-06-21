#!/usr/bin/env bash
# Full fresh deploy: sync git → wipe build caches → rebuild → hard PM2 restart.
set -euo pipefail

APP_DIR="${VPS_APP_PATH:-/opt/mbstack}"
cd "$APP_DIR"

log() {
  echo "[deploy $(date -Is)] $*" >&2
}

fix_shell_scripts() {
  find "$APP_DIR/deploy/scripts" -name '*.sh' -type f 2>/dev/null | while IFS= read -r f; do
    sed -i 's/\r//g' "$f"
    sed -i '1s/^\xEF\xBB\xBF//' "$f"
  done
  chmod +x "$APP_DIR/deploy/scripts"/*.sh 2>/dev/null || true
}

clean_build_artifacts() {
  log "Cleaning all build caches and artifacts…"
  rm -rf \
    "$APP_DIR/frontend/.next" \
    "$APP_DIR/admin/.next" \
    "$APP_DIR/backend/dist" \
    "$APP_DIR/frontend/node_modules/.cache" \
    "$APP_DIR/admin/node_modules/.cache" \
    "$APP_DIR/backend/node_modules/.cache" \
    /tmp/mbstack-deploy.lock 2>/dev/null || true
}

sync_git() {
  export GIT_SSH_COMMAND="ssh -i /root/.ssh/mbstack_deploy -o StrictHostKeyChecking=no -o IdentitiesOnly=yes"
  git remote set-url origin git@github.com:devmbstack-gif/mbstack.net.git

  BEFORE="$(git rev-parse --short HEAD)"
  log "Before sync: $BEFORE ($(git log -1 --pretty=%s))"

  git fetch origin main
  git reset --hard origin/main
  git clean -fd \
    -e 'backend/.env' \
    -e 'frontend/.env.production.local' \
    -e 'admin/.env.production.local' \
    2>/dev/null || true

  AFTER="$(git rev-parse --short HEAD)"
  log "After sync:  $AFTER ($(git log -1 --pretty=%s))"
  printf '%s' "$AFTER"
}

ensure_production_env() {
  log "Syncing production env files…"
  cat >"$APP_DIR/frontend/.env.production.local" <<'EOF'
NEXT_PUBLIC_API_URL=https://mbstack.net/api
NEXT_PUBLIC_SITE_URL=https://mbstack.net
NEXT_PUBLIC_E2E_MOCK_FORMS=0
EOF

  cat >"$APP_DIR/admin/.env.production.local" <<'EOF'
NEXT_PUBLIC_API_URL=https://mbstack.net/api
EOF
}

build_all() {
  log "Installing dependencies + building (fresh)…"

  npm ci --prefix backend
  npm run build --prefix backend
  npm run db:generate --prefix backend
  npm run db:push --prefix backend

  npm ci --prefix frontend
  npm run build --prefix frontend

  npm ci --prefix admin
  npm run build --prefix admin
}

restart_services() {
  if ! command -v pm2 >/dev/null 2>&1; then
    echo "pm2 missing. Install with: npm i -g pm2" >&2
    exit 1
  fi

  log "Stopping legacy mbstack process if running…"
  pm2 stop mbstack 2>/dev/null || true
  pm2 delete mbstack 2>/dev/null || true

  log "Hard-restarting PM2 apps (no stale in-memory cache)…"
  pm2 stop mbstack-web mbstack-admin mbstack-api 2>/dev/null || true
  pm2 delete mbstack-web mbstack-admin mbstack-api 2>/dev/null || true
  pm2 start "$APP_DIR/ecosystem.config.cjs" --update-env
  pm2 save

  sync_nginx
}

sync_nginx() {
  local nginx_bin="/www/server/nginx/sbin/nginx"
  local vhost_dir="/www/server/panel/vhost/nginx"

  if [ -x "$APP_DIR/deploy/scripts/setup-temp-ssl.sh" ]; then
    bash "$APP_DIR/deploy/scripts/setup-temp-ssl.sh" 2>/dev/null || true
  fi

  if [ -d "$APP_DIR/deploy/nginx" ]; then
    for conf in mbstack.net.conf api.mbstack.net.conf admin.mbstack.net.conf; do
      if [ -f "$APP_DIR/deploy/nginx/$conf" ]; then
        cp "$APP_DIR/deploy/nginx/$conf" "$vhost_dir/$conf"
        log "Synced BT nginx vhost: $conf"
      fi
    done
  fi

  if [ -x "$nginx_bin" ]; then
    rm -rf /www/server/nginx/proxy_cache_dir/* 2>/dev/null || true
    "$nginx_bin" -t 2>/dev/null && "$nginx_bin" -s reload 2>/dev/null && log "BT nginx reloaded + proxy cache purged" || true
  fi

  if command -v nginx >/dev/null 2>&1; then
    nginx -t 2>/dev/null && nginx -s reload 2>/dev/null && log "System nginx reloaded" || true
  fi
}

verify_live() {
  local commit="$1"
  local build_id=""
  build_id="$(cat "$APP_DIR/frontend/.next/BUILD_ID" 2>/dev/null || echo unknown)"
  log "BUILD_ID=$build_id commit=$commit"

  sleep 3
  if curl -fsS -o /dev/null "http://127.0.0.1:3710/" 2>/dev/null; then
    log "Frontend health check OK on :3710"
  else
    log "WARNING: Frontend not responding on :3710 yet"
  fi
  if curl -fsS -o /dev/null "http://127.0.0.1:3711/api/health" 2>/dev/null; then
    log "API health check OK on :3711"
  else
    log "WARNING: API health check failed on :3711"
  fi
  if curl -fsS -o /dev/null "http://127.0.0.1:3712/" 2>/dev/null; then
    log "Admin health check OK on :3712"
  else
    log "WARNING: Admin not responding on :3712 yet"
  fi
  if curl -fsS -o /dev/null -H "Host: mbstack.net" "https://127.0.0.1/api/health" -k 2>/dev/null; then
    log "Nginx /api proxy health check OK"
  else
    log "WARNING: Nginx /api proxy not responding yet"
  fi
  if curl -fsS -X POST -H "Content-Type: application/json" \
    -d '{"name":"Deploy Test","email":"test@mbstack.net","message":"health check"}' \
    "http://127.0.0.1:3711/api/contact" 2>/dev/null | grep -q '"success":true'; then
    log "Contact API POST check OK"
  else
    log "WARNING: Contact API POST check failed"
  fi
}

# --- main ---
log "App dir: $APP_DIR"
fix_shell_scripts

if [ ! -f "backend/.env" ]; then
  echo "Missing backend/.env — run deploy/scripts/bootstrap-vps.sh first" >&2
  exit 1
fi

AVAIL_KB="$(df -Pk "$APP_DIR" | awk 'NR==2 {print $4}')"
if [ "${AVAIL_KB:-0}" -lt 1048576 ]; then
  echo "WARNING: less than 1 GB free disk — build may fail ($(df -h "$APP_DIR" | awk 'NR==2 {print $4}') free)" >&2
fi

COMMIT="$(sync_git)"
clean_build_artifacts
ensure_production_env
build_all
restart_services
verify_live "$COMMIT"

pm2 list
log "Fresh deploy complete at $COMMIT"
