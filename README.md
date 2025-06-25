# Typescript React Storybook Starter

A template repository for quickly getting started with creating React component libraries.

- Uses Vite for example builds + Storybook
- Uses Jest for tests
- Includes sample Storybook setup
- Includes deployment workflows for either Github Packages or NPM
- Uses prettier for formatting

## Getting Started

Once you've cloned the repo, run the following commands to force all packages to the latest versions before installing:

```sh
npx npm-check-updates -u
npm install
```

Now you can open up a dev server with:

```sh
npm start
```

Have fun coding!

## Deploying Storybook to Github Pages

Uncomment the lines in `.github/workflows/deploy.yaml` to deploy a Storybook instance to Github Pages. You will also need to enable Github Pages for your repository in the Settings tab.

## Publishing Packages

You can choose to publish your package to either [Github's Package Repository](https://github.com/features/packages) or [NPM](https://www.npmjs.com/).

### Publishing to NPM

To publish to NPM, you can use the `.github/workflows/publish-npm.yaml` workflow, which will automatically publish a package on a new release.

Additionally, you'll need to create an automation token on your NPM account and set it on the repository:

1. Navigate to the Access Tokens page of your NPM account and generate a new classic token
2. Make sure the token is set to Automation
3. Go to your repository's Settings > Secrets and variables > Actions page and add a new Repository Secret
4. Make sure the name of the secret in the workflow matches

## Local Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note**: This runs the App files in example/ as the dev environment.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Runs tests in Jest

### `npm run build`

Using `vite-build.config.ts`, compiles and exports the TS library into `dist/main.js` and `dist/main.d.ts`.

### `npm run storybook`

Starts up a Storybook server on [http://localhost:6006](http://localhost:6006)

### `npm run build-storybook`

Builds a static web app version of Storybook to `/storybook-static`
