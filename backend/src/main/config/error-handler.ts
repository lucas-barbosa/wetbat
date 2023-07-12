import { Express, NextFunction, Request, Response } from 'express';
import { logger } from 'src/infra/logger';

export const setupErrorHandler = (app: Express) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    logger.error({ method: request.method, statusCode: 500, path: request.path, timestamp: new Date() });
    logger.error({ trace: err.stack });

    return response.status(500).json({ statusCode: 500, message: 'Some internal error occur, try again later!' });
  });
};
