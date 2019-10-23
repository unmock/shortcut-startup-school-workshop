require('dotenv').config();
import buildApp from './app';
import logger from './logging';

const app = buildApp();

const { PORT = 3000 } = process.env;

app.listen(PORT, () => logger.info(`Listening on port ${PORT}...`));
