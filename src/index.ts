import './config/env';
import StartApp from './app';

const port = Number(process.env.PORT || 3000);

StartApp(port);
