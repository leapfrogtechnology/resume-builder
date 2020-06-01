import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import logger from './utils/logger';

import * as errorHandler from './middlewares/errorHandler';

const app = express();

const APP_PORT = process.env.PORT || '8848';
const APP_HOST = process.env.HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(errorHandler.bodyParser);

/**
 * Routes Definitions
 */

app.use('/api', routes);

// Error Middlewares
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

/**
 * Server Activation
 */

const server = app.listen(app.get('port'), app.get('host'), () => {
  logger.log('info', `Server started at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
