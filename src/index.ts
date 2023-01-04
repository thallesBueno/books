import express from 'express';

import Logger from './config/logger';
import LoggerMiddleware from './config/loggerMiddleware';

const app = express();

app.use(LoggerMiddleware);

app.get('/', (req, res) => {
  res.send('hello world');
});

const defaultPort = 3000;

app.listen(defaultPort, () => {
  Logger.info(`App listening at port ${defaultPort}.`);
});
