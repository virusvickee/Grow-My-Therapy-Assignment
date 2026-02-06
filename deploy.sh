#!/bin/bash

# Deployment Script for Vercel
# Run: bash deploy.sh

echo "🚀 Starting deployment process..."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed"
else
    echo "✅ Vercel CLI found"
fi

echo ""
echo "📦 Running production build test..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Deploying to Vercel..."
    echo ""
    
    # Deploy to Vercel
    vercel --prod
    
    echo ""
    echo "🎉 Deployment complete!"
    echo "Visit your site at the URL shown above"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
