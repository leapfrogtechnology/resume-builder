const express = require('express');

const app = express();

const APP_PORT = process.env.PORT || '8848';
const APP_HOST = process.env.HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

// index.js

/**
 * Routes Definitions
 */

app.get('/', (req, res) => {
  res.status(200).send('Resume Builder');
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
