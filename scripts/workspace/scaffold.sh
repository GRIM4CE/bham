#!/usr/bin/env bash
echo "┏━━━ 🏗️ Scaffold: $(pwd) ━━━━━━━━━━━━━━━━━━━"
cd packages/scaffold 
yarn build
node dist/index.js