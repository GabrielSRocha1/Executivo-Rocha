#!/bin/bash
echo "Forcing npm usage..."
export NPM_CONFIG_LEGACY_PEER_DEPS=true
export NPM_CONFIG_AUTO_INSTALL_PEERS=true
export NPM_CONFIG_PREFER_OFFLINE=true
export NPM_CONFIG_AUDIT=false
export NPM_CONFIG_FUND=false

echo "Installing dependencies with npm..."
npm ci --legacy-peer-deps --no-audit --no-fund

echo "Building project..."
npm run build

echo "Build completed successfully!"
