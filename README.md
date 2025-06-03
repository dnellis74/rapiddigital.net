# Rapid Digital Website

This is the source code for the Rapid Digital website, hosted on AWS S3.

## Prerequisites

1. Node.js and npm installed
2. AWS CLI installed and configured with appropriate credentials
3. S3 bucket created and configured for static website hosting

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure AWS CLI (if not already done):
```bash
aws configure
```

## Development

To build the site locally:
```bash
npm run build
```

This will create a `dist` directory with the built files.

## Deployment

To deploy to S3:
```bash
npm run deploy
```

This will:
1. Clean the dist directory
2. Copy all necessary files to dist
3. Sync the dist directory to your S3 bucket
4. Set appropriate permissions for public access

## S3 Bucket Configuration

Make sure your S3 bucket is configured for static website hosting with:
- Static website hosting enabled
- Appropriate bucket policy for public access
- Index document set to `index.html`
- Error document set to `index.html` (for SPA routing if needed)

## Best Practices

1. Always test the build locally before deploying
2. Use version control to track changes
3. Consider implementing a CI/CD pipeline for automated deployments
4. Keep your AWS credentials secure and never commit them to version control 