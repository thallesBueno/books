import express from 'express';
import cors from 'cors';

import Logger from './config/logger';
import LoggerMiddleware from './config/loggerMiddleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(LoggerMiddleware);

app.get('/', (req, res) => {
  res.send('hello world');
});

const defaultPort = 3000;

app.listen(defaultPort, () => {
  Logger.info(`App listening at port ${defaultPort}.`);
});
