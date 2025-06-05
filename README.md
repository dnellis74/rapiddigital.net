# Rapid Digital Website

This is the source code for the Rapid Digital website, hosted on AWS Amplify.

## Prerequisites

1. Node.js and npm installed
2. AWS Amplify CLI installed and configured with appropriate credentials

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure AWS Amplify CLI (if not already done):
```bash
amplify configure
```

## Development

To build the site locally:
```bash
npm run build
```

This will create a `dist` directory with the built files.

## Deployment

The site is automatically deployed through AWS Amplify when changes are pushed to the main branch. The deployment process:
1. Cleans the dist directory
2. Copies all necessary files to dist
3. Deploys to AWS Amplify
4. Configures the domain and SSL certificate

## Email Configuration

Email forwarding is configured using [ImprovMX](https://app.improvmx.com/). This service handles email forwarding for the domain, allowing emails sent to addresses like `hello@rapiddigital.net` to be forwarded to the appropriate destination email addresses.

To modify email forwarding settings:
1. Log in to [ImprovMX](https://app.improvmx.com/)
2. Select the domain `rapiddigital.org`
3. Configure forwarding rules as needed

## Domain Configuration

The site is configured to use:
- Main domain: rapiddigital.org
- Subdomain: www.rapiddigital.org

SSL certificates are automatically managed by AWS Amplify.

## Best Practices

1. Always test the build locally before pushing changes
2. Use version control to track changes
3. Keep your AWS credentials secure and never commit them to version control 