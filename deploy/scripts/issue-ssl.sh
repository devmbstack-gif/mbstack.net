#!/usr/bin/env bash
# Issue Let's Encrypt SSL certs for api/admin subdomains via acme.sh (webroot).
set -euo pipefail

ACME="/root/.acme.sh/acme.sh"
WEBROOT="/www/wwwroot/api.mbstack.net"
CERT_DIR="/www/server/panel/vhost/cert"

issue_cert() {
  local domain="$1"
  mkdir -p "$CERT_DIR/$domain"
  mkdir -p "$WEBROOT/.well-known/acme-challenge"
  "$ACME" --issue -d "$domain" -w "$WEBROOT" --force
  "$ACME" --install-cert -d "$domain" \
    --cert-file "$CERT_DIR/$domain/cert.pem" \
    --key-file "$CERT_DIR/$domain/privkey.pem" \
    --fullchain-file "$CERT_DIR/$domain/fullchain.pem" \
    --reloadcmd "/www/server/nginx/sbin/nginx -s reload"
  echo "SSL issued for $domain"
}

for domain in api.mbstack.net admin.mbstack.net; do
  if dig +short "$domain" A | grep -q .; then
    issue_cert "$domain" || echo "WARN: SSL failed for $domain (DNS may not be ready)"
  else
    echo "SKIP: No DNS A record for $domain — add A record pointing to VPS IP first"
  fi
done
