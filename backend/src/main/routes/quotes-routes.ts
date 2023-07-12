import { Router } from 'express';
import { adaptRoute } from '../adapter/express-route-adapter';
import { makeCreateQuoteController } from '../factories/controllers/create-quote-controller-factory';
import { makeGetAllQuotesController } from '../factories/controllers/get-all-quotes-controller-factory';
import { makeGetQuoteByIdController } from '../factories/controllers/get-quote-by-id-controller-factory';

export const quotesRoutes = (router: Router) => {
  router.get('/', adaptRoute(makeGetAllQuotesController()));
  router.get('/:id', adaptRoute(makeGetQuoteByIdController()));
  router.post('/', adaptRoute(makeCreateQuoteController()));
  return router;
};
