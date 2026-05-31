#!/bin/bash
# Build Storybook and deploy to soumyadeep.in/design-system via Cloudflare Pages

set -e

echo "🔨 Building Storybook..."
npm run build-storybook -- --output-dir storybook-static

echo "🚀 Deploying to Cloudflare Pages..."
npx wrangler pages deploy storybook-static \
  --project-name soumyadeep-design-system \
  --branch main

echo "✅ Deployed! Visit: https://soumyadeep.in/design-system"
