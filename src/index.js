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

app.get('/', async (_, res) => {
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
    logger.error({ message: err.message, stack: err.stack });
    res.sendStatus(500);
  }
});

app.get('*', (_, res) => res.sendStatus(404));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => logger.info(`Listening on port ${PORT}...`));
