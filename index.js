const express = require('express');
const logger = require('./cloudwatch-logger');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  logger.log('info', `Requesting ${req.method} ${req.originalUrl}`, { tags: 'http', additionalInfo: { body: req.body, headers: req.headers } });
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});