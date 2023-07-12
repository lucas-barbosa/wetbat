import express from 'express';
import { setupRoutes } from './routes';

export const setupApp = () => {
  const app = express();
  app.use(express.json());
  setupRoutes(app);
  return app;
};
