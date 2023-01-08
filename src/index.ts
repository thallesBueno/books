import './config/env';
import startApp from './app';
import startDatabase from './config/database';

const start = async () => {
  const port = Number(process.env.PORT || 3000);
  const databaseUri = process.env.DATABASE_URI || '';

  await startDatabase(databaseUri);
  startApp(port);
};

start();
