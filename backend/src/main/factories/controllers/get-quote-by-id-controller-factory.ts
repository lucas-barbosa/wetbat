import { GetQuoteByIdController } from 'src/presentation/controllers/get-quote-by-id-controller';
import { Controller } from 'src/presentation/controllers/ports/controller';
import { makeGetQuoteById } from '../usecases/get-quote-by-id-factory';

export const makeGetQuoteByIdController = (): Controller => {
  const usecase = makeGetQuoteById();
  const controller = new GetQuoteByIdController(usecase);
  return controller;
};
