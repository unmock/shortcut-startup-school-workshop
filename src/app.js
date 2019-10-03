import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import logger from './logging';
import fetchGitHubRepos from './github';
import App from './public/components/App';

const buildHtml = (component) => `
      <!doctype html>
        <html>
        <head>
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" type="text/css" href="/static/stylesheet.css">
        </head>
        <body>
          <div id="root">${component}</div>
          <script src="/static/vendors~app.js"></script>
        </body>
        </html>
      `;

export default () => {
  const app = express();

  app.use('/static', express.static(path.resolve(__dirname, 'public')));

  app.use((req, _, next) => {
    logger.info(`Request: ${req.originalUrl}`);
    next();
  });

  app.get('/', (_, res) => {
    res.redirect(301, '/repositories');
  });

  app.get('/repositories', async (_, res) => {
    try {
      const repos = await fetchGitHubRepos();

      /**
       * We do not attempt to hydrate the full DOM here,
       * so render to static markup.
       */
      const component = ReactDOMServer.renderToStaticMarkup(
        <App repositories={repos} />,
      );

      const html = buildHtml(component);
      res.send(html);
    } catch (err) {
      logger.error({ message: err.message, stack: err.stack });
      res.sendStatus(500);
    }
  });

  /**
   * "API"
   */
  app.get('/api/repositories', async (_, res) => {
    const repositories = await fetchGitHubRepos();
    res.json(repositories);
  });

  app.use((err, req, res, next) => {  // eslint-disable-line
    logger.error({ message: err.message, stack: err.stack });
    res.sendStatus(500);
  });

  app.get('*', (_, res) => res.sendStatus(404));

  return app;
};
