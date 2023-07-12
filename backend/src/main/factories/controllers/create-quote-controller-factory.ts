import { CreateQuoteController } from 'src/presentation/controllers/create-quote-controller';
import { Controller } from 'src/presentation/controllers/ports/controller';
import { makeCreateQuote } from '../usecases/create-quote-factory';

export const makeCreateQuoteController = (): Controller => {
  const usecase = makeCreateQuote();
  const controller = new CreateQuoteController(usecase);
  return controller;
};
