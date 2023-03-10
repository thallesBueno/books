import express from 'express';
import cors from 'cors';

import Logger from './config/logger';
import loggerMiddleware from './config/loggerMiddleware';

import Routes from './controllers/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);

app.use(Routes);

const startApp = (port: number) => {
  app.listen(port, () => {
    Logger.info(`App listening at port ${port}.`);
  });
};

export default startApp;
