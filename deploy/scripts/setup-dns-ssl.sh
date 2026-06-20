#!/usr/bin/env bash
# Add api/admin A records via Hostinger API (requires HOSTINGER_API_TOKEN in env or /opt/mbstack/.hostinger_token)
set -euo pipefail

TOKEN="${HOSTINGER_API_TOKEN:-}"
if [ -z "$TOKEN" ] && [ -f /opt/mbstack/.hostinger_token ]; then
  TOKEN="$(cat /opt/mbstack/.hostinger_token)"
fi

if [ -z "$TOKEN" ]; then
  echo "Missing Hostinger API token."
  echo "Create one at: https://hpanel.hostinger.com/profile/api"
  echo "Then: echo 'YOUR_TOKEN' > /opt/mbstack/.hostinger_token && chmod 600 /opt/mbstack/.hostinger_token"
  exit 1
fi

VPS_IP="${VPS_IP:-82.29.180.169}"
DOMAIN="mbstack.net"

for subdomain in api admin; do
  curl -sS -X PUT "https://developers.hostinger.com/api/dns/v1/zones/${DOMAIN}" \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "Content-Type: application/json" \
    -d "{\"overwrite\": false, \"zone\": [{\"name\": \"${subdomain}\", \"type\": \"A\", \"ttl\": 3600, \"records\": [{\"content\": \"${VPS_IP}\"}]}]}"
  echo "Requested A record: ${subdomain}.${DOMAIN} -> ${VPS_IP}"
done

echo "Waiting 30s for DNS propagation..."
sleep 30
dig +short api.mbstack.net
dig +short admin.mbstack.net

bash /opt/mbstack/deploy/scripts/issue-ssl.sh
