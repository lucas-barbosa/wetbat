import path from 'path';
import winston from 'winston';

const logDirectory = path.join('logs/');

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'wetbat-rest-api' },
  transports: [
    new winston.transports.File({
      filename: path.join(logDirectory, 'error.log'),
      level: 'error'
    }),
    new winston.transports.File({ filename: path.join(logDirectory, 'combined.log') })
  ]
});
