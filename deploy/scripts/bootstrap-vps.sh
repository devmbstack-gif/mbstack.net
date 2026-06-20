#!/usr/bin/env bash
# One-time VPS bootstrap for MB Stack monorepo.
set -euo pipefail

APP_DIR="${VPS_APP_PATH:-/opt/mbstack}"
DEPLOY_KEY="/root/.ssh/mbstack_deploy"
VPS_IP="${VPS_IP:-82.29.180.169}"

log() { echo "[bootstrap $(date -Is)] $*"; }

log "Creating app directory: $APP_DIR"
mkdir -p "$APP_DIR"
mkdir -p /www/wwwroot/api.mbstack.net/.well-known/acme-challenge
mkdir -p /www/server/panel/vhost/cert/api.mbstack.net
mkdir -p /www/server/panel/vhost/cert/admin.mbstack.net

if [ ! -f "$DEPLOY_KEY" ]; then
  ssh-keygen -t ed25519 -f "$DEPLOY_KEY" -N "" -C "mbstack-vps-deploy"
fi

if [ ! -d "$APP_DIR/.git" ]; then
  export GIT_SSH_COMMAND="ssh -i $DEPLOY_KEY -o StrictHostKeyChecking=no -o IdentitiesOnly=yes"
  git clone git@github.com:devmbstack-gif/mbstack.net.git "$APP_DIR"
fi

# PostgreSQL database
if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='mbstack_net'" | grep -q 1; then
  DB_PASS="$(openssl rand -hex 16)"
  sudo -u postgres psql -c "CREATE USER mbstack_net WITH PASSWORD '$DB_PASS';"
  sudo -u postgres psql -c "CREATE DATABASE mbstack_net OWNER mbstack_net;"
  echo "$DB_PASS" > "$APP_DIR/.db_password"
  chmod 600 "$APP_DIR/.db_password"
  log "Created PostgreSQL database mbstack_net"
else
  DB_PASS="$(cat "$APP_DIR/.db_password" 2>/dev/null || echo 'CHANGE_ME')"
fi

ADMIN_KEY="$(openssl rand -hex 24)"

if [ ! -f "$APP_DIR/backend/.env" ]; then
  cat >"$APP_DIR/backend/.env" <<EOF
PORT=3711
DATABASE_URL="postgresql://mbstack_net:${DB_PASS}@localhost:5433/mbstack_net"
FRONTEND_URL="https://mbstack.net"
ADMIN_URL="https://admin.mbstack.net"
ADMIN_API_KEY="${ADMIN_KEY}"
EMAIL_USER="mrahmadali000@gmail.com"
EMAIL_PASS="tcyw xczj jomb oidx"
EMAIL_RECEIVER="mrahmadali000@gmail.com"
EOF
  chmod 600 "$APP_DIR/backend/.env"
  log "Created backend/.env"
fi

if [ ! -f "$APP_DIR/frontend/.env.production.local" ]; then
  cat >"$APP_DIR/frontend/.env.production.local" <<EOF
NEXT_PUBLIC_API_URL=https://api.mbstack.net/api
NEXT_PUBLIC_SITE_URL=https://mbstack.net
NEXT_PUBLIC_E2E_MOCK_FORMS=0
EOF
  log "Created frontend/.env.production.local"
fi

if [ ! -f "$APP_DIR/admin/.env.production.local" ]; then
  cat >"$APP_DIR/admin/.env.production.local" <<EOF
NEXT_PUBLIC_API_URL=https://api.mbstack.net/api
EOF
  log "Created admin/.env.production.local"
fi

# Install cron for auto-deploy
CRON_FILE="/etc/cron.d/mbstack-deploy"
cat >"$CRON_FILE" <<EOF
# Auto-deploy MB Stack when origin/main is ahead of VPS HEAD (every minute)
* * * * * root VPS_APP_PATH=$APP_DIR $APP_DIR/deploy/scripts/vps-watch-deploy.sh
EOF
chmod 644 "$CRON_FILE"
touch /var/log/mbstack-deploy.log

find "$APP_DIR/deploy/scripts" -name '*.sh' -exec sed -i 's/\r//g' {} \;
chmod +x "$APP_DIR/deploy/scripts"/*.sh

log "Bootstrap complete. Add deploy key to GitHub if not done:"
log "  cat $DEPLOY_KEY.pub"
log "Ensure DNS A records point to $VPS_IP:"
log "  api.mbstack.net -> $VPS_IP"
log "  admin.mbstack.net -> $VPS_IP"
