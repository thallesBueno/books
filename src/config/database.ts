import mongoose from 'mongoose';
import Logger from './logger';

const startDatabase = async (databaseUri: string) => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(databaseUri);
  Logger.info(`Start database on URI: ${databaseUri}.`);
};

export default startDatabase;
