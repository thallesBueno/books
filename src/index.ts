import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

const defaultPort = 3000;

app.listen(defaultPort, () => {
  console.log(`App listening at port ${defaultPort}.`);
});
