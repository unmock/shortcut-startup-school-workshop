
// eslint-disable-line
import compression from 'compression';
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import logger from './logging';
import fetchGitHubRepos from './github';
import App from './public/components/App';
import stylesheet from './public/styles/stylesheet';

const app = express();

app.use(compression());

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.use((req, _, next) => {
  logger.info(`Request: ${req.originalUrl}`);
  next();
});

app.get('/', async (req, res) => {
  try {
    const repos = await fetchGitHubRepos();

    const component = ReactDOMServer.renderToString(
      <App repositories={repos} />,
    );

    const html = `
  <!doctype html>
    <html>
    <head>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <style>${stylesheet}</style>
    </head>
    <body>
      <div id="root">${component}</div>
      <script src="/static/vendors~app.js"></script>
    </body>
    </html>
  `;

    res.send(html);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get('*', (req, res) => res
  .status(404)
  .send(
    '<body style="background-color: #3c3c3c;"><h1 style="font-family: sans-serif; color: #c7c7c7; text-align: center;">404 - Not Found</h1></body>',
  ));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));  // eslint-disable-line
