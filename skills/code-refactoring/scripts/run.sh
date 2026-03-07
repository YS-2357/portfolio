#!/bin/bash
# Post-refactor verification script

cd "$(dirname "$0")/../../../app" || exit 1

echo "=== Running ESLint ==="
npm run lint

echo ""
echo "=== Running TypeScript build ==="
npm run build

echo ""
echo "=== Done ==="
