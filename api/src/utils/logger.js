import fs from 'fs';
import winston, { format } from 'winston';

import 'winston-daily-rotate-file';

// Use LOG_DIR from env
const LOG_DIR = process.env.LOG_DIR || 'logs';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';


/**
 * Create a new winston logger.
 */
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: 'info',
    })
  ],
});

export const logStream = {
  /**
   * A writable stream for winston logger.
   *
   * @param {any} message
   */
  write(message) {
    logger.info(message.toString());
  },
};

export default logger;
