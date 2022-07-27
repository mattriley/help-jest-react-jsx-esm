# Help! Jest + React + JSX + ESM

## Setup

1. Install Node 18 or `nvm install` or `nvm use`.
2. Install dependencies with `npm i`.

## Start

1. Start the web server with `npm start`.
2. Browse to http://localhost:1234 to see "Hello world" rendered.

## Test

1. Run `npm t` which will fail due to not being configured for JSX.
2. Help me get the test passing!

## Constraints

- The `type` field in `package.json` must NOT be set to `module`. Source files should end with `.mjs` extension. I have reasons for this.
- Test files must live in `./tests` and may end with `.test.js` or `.test.mjs`.
