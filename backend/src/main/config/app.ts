import express from 'express';
import cors from 'cors';
import { setupRoutes } from './routes';
import compression from 'compression';
import { setupErrorHandler } from './error-handler';

export const setupApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(compression());

  setupRoutes(app);
  setupErrorHandler(app);

  return app;
};
