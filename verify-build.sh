#!/bin/bash
set -e

echo "=== Verifying Angular Carousel Demo ==="
echo "1. Installing dependencies..."
npm run setup

echo "2. Building the application..."
npm run build

echo "=== Verification completed successfully! ==="
echo "The application has been built successfully without requiring any human interaction."
echo "To run the application, use: npm start"