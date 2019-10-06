Test change

# [Shortcut School of Startups Workshop](https://unmock.github.io/shortcut-startup-school-workshop/#/welcome)

[![CircleCI](https://circleci.com/gh/unmock/shortcut-startup-school-workshop.svg?style=svg)](https://circleci.com/gh/unmock/shortcut-startup-school-workshop)

This is a Node.js application running an [Express](https://expressjs.com/) server and using [React](https://reactjs.org/) for server-side rendering. The application displays a list of **your** GitHub repositories (that's you, the developer).

Accompanying slides can be found [here](https://unmock.github.io/shortcut-startup-school-workshop/#/welcome).

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

### <u>Part 1: Getting started</u>

#### 9.50 - 10.20

1. SSR 101
1. Tour of the app

Hands-on:

1. Fork the repository
1. Get the application to run locally
1. Make any pull request to **your fork**, "approve" and merge 🦄
1. Make a pull request to `unmock/shortcut-startup-school-workshop`

### <u>Part 2: CI/CD</u>

#### 10.20 - 10.40

1. Introduction to CI/CD

Hands-on:

1. Log into CircleCI
1. Add CircleCI to your fork
1. Add command to run tests

### <u>Part 3: Testing</u>

#### 10.40 - 11.30

1. Slides
1. Tour of Unmock

Hands-on:

1. Writing tests for our application

### <u>Part 4: Hacking</u>

#### 11.30 - 11.50

1. Hack away and ask questions
1. Ideas:
   - Add test reporter
   - Add support for fetching all GitHub repositories
   - Add continuous deployment to Heroku

## Disclaimer

Note that the application server renders static markup and does not attempt to [hydrate](https://reactjs.org/docs/react-dom.html#hydrate) the markup. So adding event listeners etc. will fail. If you want to add interactivity, client-side routing, and/or more complex logic on what to fetch in server and in client, you might want to take a look at a framework like [Next.js](https://nextjs.org/).

## Deployment to Heroku

1. Add the deploy job from `noitulos` branch to `.circleci/config.yml`
1. Login to Heroku, install CLI, create API key
1. Login with CLI: `heroku login`
1. Create app: `heroku create`
1. Add GITHUB_TOKEN in Heroku as ENV var
1. Add `HEROKU_API_KEY` and `HEROKU_APP_NAME` in CircleCI
