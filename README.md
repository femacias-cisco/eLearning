# Barranquismo LMS

Static LMS prototype for canyoning safety training. It includes a course catalog, lesson workspace, dashboard, role switch, local progress persistence, and exam attempts.

## Local Commands

```bash
npm run check
npm run build
npm run serve
```

The production artifact is generated in `dist/`.

## AWS Amplify Hosting

This repo includes `amplify.yml`, so AWS Amplify Hosting can build and publish the app from Git.

1. Push the `developer` branch to GitHub.
2. In AWS Amplify Hosting, create a new app from your Git provider.
3. Select this repository and the `developer` branch.
4. Keep the detected build settings from `amplify.yml`.
5. Deploy. Amplify will run `npm run build` and publish `dist/`.

The current app is frontend-only. It does not require a local server after deployment because all runtime files are static HTML, CSS, JavaScript, and image assets.

## Future AWS Backend

When you add Cognito, AppSync, DynamoDB, or protected media delivery, keep service endpoints out of committed source files. Use Amplify environment variables or generated runtime config during the build.
