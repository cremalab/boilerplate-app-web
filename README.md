# Crema App - Web 🌐

[![Build Status](https://github.com/cremalab/crema-app-web/workflows/CI/badge.svg)](https://github.com/cremalab/crema-app-web/actions)
[![codecov](https://codecov.io/gh/cremalab/crema-app-web/branch/develop/graph/badge.svg)](https://codecov.io/gh/cremalab/crema-app-web)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project includes configuration and tooling that conforms to Crema's baseline best-practices for a Web Application.

**🧰 Tools Used**

- [Create React App](https://facebook.github.io/create-react-app/) for simple configuration 😅
- [Cypress](https://www.cypress.io) for end-to-end testing
- [ESLint](https://eslint.org) for code linting
- [Hygen](http://www.hygen.io) for component and util generators
- [Jest](https://jestjs.io) for unit tests
- [Loki](https://loki.js.org) for visual testing
- [Prettier](https://prettier.io) for code formatting (via ESLint plugin)
- [Storybook](https://storybook.js.org) for component playground (and used by Loki)
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## 🏗 Setup

1. [Install Node/NPM](https://nodejs.org/en/)
2. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
3. `nvm install 'lts/*' && nvm use`
4. `npm i` (install project dependencies)
5. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
6. Enable "Auto-Fix on Save" in `settings.json`:

```
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```
7. [Install Docker Desktop](https://www.docker.com/products/docker-desktop)

## 👟 Run

Run the following scripts with `npm run <SCRIPT_HERE>`:

- `start` - start app
- `new:component` - generate a new component
- `new:util` - generate a new util(ity)
- `test:analyze` - run bundle analyzer
- `test:deps` - run dependency validation tests
- `test:e2e` - run end-to-end tests
- `test:lint:fix` - run linter and fix if possible
- `test:lint` - run linter
- `test:playground` - run component playground (storybook)
- `test:unit:coverage` - run unit tests with coverage
- `test:unit` - run unit tests
- `test:visual:approve` - approve visual changes
- `test:visual:update` - update or create visual references
- `test:visual` - run visual tests (loki)
- `deps:graph` - run dependency validation and generate an SVG representing the dependency graph (requires [`graphviz`](https://graphviz.org/) to be installed on your device)
- `deps:report` - run dependency validation and generate an HTML report

> These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## 🏛 Structure

The `src` directory is where the meat of your app is located. Below is a printout of its file-tree with a description for each part.

```
src
├── assets // Fonts, Images, Etc.
│   └── logo.svg
├── components // Create a new one with `npm run new:component`
│   └── App
│       ├── __snapshots__ // Generated by Jest from `test.tsx`
│       │   └── test.tsx.snap
│       ├── README.md // Documentation
│       ├── index.css // Styles
│       ├── index.tsx // Main Module Code
│       ├── stories.tsx // Playground stories (npm run test:playground)
│       └── test.tsx // Unit Tests (Jest)
├── types // Centralize Type Definitions
│   ├── Entity.ts // Base Type
│   ├── EntityThing.ts // A Sub-Type
│   ├── Id.ts // A Type Alias of `string`
│   ├── MapStateToProps.ts // Includes our `State`
│   ├── State.ts // Redux state interface
│   └── Thing.ts // Silly example used by `EntityThing`
├── utils // Create a new one with `npm run new:util`
│   ├── mySpecialUtil
│   │   ├── __snapshots__ // Generated by Jest from `test.ts`
│   │   │   └── test.tsx.snap
│   │   ├── README.md // Documentation
│   │   ├── index.tsx // Main Module Code
│   │   └── test.tsx // Unit Tests (Jest)
│   ├── decoratorCentered // Used in stories.tsx
│   └── shallowRender // Used to render components in test.tsx
├── index.css // Root Styles
├── index.tsx // Root Module
├── react-app-env.d.ts // Definitions from create-react-app
└── serviceWorker.ts // Documentation
```

## 🥇 Best Practices

- Use the code generators:
  - `npm run new:component`
  - `npm run new:util`
  - When prompted for a name, prefer `camelCase` for utils and `CamelCase` for components
- Fill out the `README.md` to describe what your code does
- Run your unit tests `npm run test:unit` while working to see immediate feedback
- If you get stuck at any point, just log an issue and we'll figure it out together 👭.
