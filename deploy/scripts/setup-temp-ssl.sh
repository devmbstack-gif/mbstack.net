#!/usr/bin/env bash
set -euo pipefail

for d in api.mbstack.net admin.mbstack.net; do
  cert_dir="/www/server/panel/vhost/cert/$d"
  mkdir -p "$cert_dir"
  if [ ! -f "$cert_dir/fullchain.pem" ]; then
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
      -keyout "$cert_dir/privkey.pem" \
      -out "$cert_dir/fullchain.pem" \
      -subj "/CN=$d"
    cp "$cert_dir/fullchain.pem" "$cert_dir/cert.pem"
    echo "Created temp SSL for $d"
  fi
done

/www/server/nginx/sbin/nginx -t
/www/server/nginx/sbin/nginx -s reload
echo "Nginx reloaded"
