# Shortcut School of Startups Workshop

[![CircleCI](https://circleci.com/gh/unmock/shortcut-startup-school-workshop.svg?style=svg)](https://circleci.com/gh/unmock/shortcut-startup-school-workshop)

This is a Node.js application running an [Express](https://expressjs.com/) server and using [React](https://reactjs.org/) for server-side rendering. The application displays a list of **your** GitHub repositories (that's you, the developer).

## Instructions

### Running the application locally

1. Create a new personal GitHub [access token](https://github.com/settings/tokens) with read access to your repositories
1. Set the environment variable `GITHUB_TOKEN` in `.env` file (see `.env.example` for an example)
1. Install dependencies: `yarn` (or `npm i`)
1. Run the development server with hot reloading: `yarn dev`
1. Navigate to [localhost:3000](http://localhost:3000)
1. To build the app and run in production mode: `yarn build && yarn start`

### Running tests

Run tests:

```bash
$ yarn test
```

Everything is skipped because nothing's implemented yet: we'll do that!

Note that running tests **should not require a GitHub access token**: they should use [Unmock](https://unmock.io).

## Workshop agenda

### 9.50 - 10.05

1. Introduction to testing, CI/CD, and what we'll do

### 10.05 - 10.30

1. Forking the repository
1. Getting the application to run locally

### 10.30 - 10.40

1. Logging into CircleCI
1. Adding CircleCI to the project

### 10.40 - 11.15

1. Introduction to Unmock
1. Writing tests for our application

### 11.15 - 11.50

1. Time for hacking away and asking questions
1. Ideas:
   - Add test reporter
   - Add continuous deployment to Heroku

## Disclaimer

Note that the application server renders static markup and does not attempt to [hydrate](https://reactjs.org/docs/react-dom.html#hydrate) the markup. So adding event listeners etc. will fail. If you want to add interactivity, client-side routing, and/or more complex logic on what to fetch in server and in client, you might want to take a look at a framework like [Next.js](https://nextjs.org/).
