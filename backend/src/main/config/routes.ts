import { Express, Router } from 'express';
import { quotesRoutes } from '../routes/quotes-routes';

export const setupRoutes = (app: Express) => {
  const router = Router();
  app.use('/quotes', quotesRoutes(router));
};
