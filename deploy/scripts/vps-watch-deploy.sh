#!/usr/bin/env bash
# Poll GitHub for new main commits and run a full fresh deploy when behind.
set -euo pipefail

APP_DIR="${VPS_APP_PATH:-/opt/mbstack}"
LOG_FILE="${VPS_DEPLOY_LOG:-/var/log/mbstack-deploy.log}"
LOCK_FILE="/tmp/mbstack-deploy.lock"

exec >>"$LOG_FILE" 2>&1

log() {
  echo "[$(date -Is)] $*"
}

if [ -f "$LOCK_FILE" ]; then
  pid="$(cat "$LOCK_FILE" 2>/dev/null || true)"
  if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
    log "Deploy already running (pid $pid), skipping."
    exit 0
  fi
  rm -f "$LOCK_FILE"
fi

echo $$ >"$LOCK_FILE"
trap 'rm -f "$LOCK_FILE"' EXIT

cd "$APP_DIR"

find "$APP_DIR/deploy/scripts" -name '*.sh' -type f -exec sed -i 's/\r//g' {} \;
find "$APP_DIR/deploy/scripts" -name '*.sh' -type f -exec sed -i '1s/^\xEF\xBB\xBF//' {} \;
chmod +x "$APP_DIR/deploy/scripts"/*.sh 2>/dev/null || true

export GIT_SSH_COMMAND="ssh -i /root/.ssh/mbstack_deploy -o StrictHostKeyChecking=no -o IdentitiesOnly=yes"
git remote set-url origin git@github.com:devmbstack-gif/mbstack.net.git

git fetch origin main -q

LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse origin/main)"

if [ "$LOCAL" = "$REMOTE" ] && [ "${FORCE_DEPLOY:-0}" != "1" ]; then
  exit 0
fi

log "Deploy triggered: $LOCAL -> $REMOTE (force=${FORCE_DEPLOY:-0})"

export VPS_APP_PATH="$APP_DIR"
bash "$APP_DIR/deploy/scripts/server-deploy.sh"

log "Deploy finished at $REMOTE"
