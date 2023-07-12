import { GetAllQuotesController } from 'src/presentation/controllers/get-all-quotes-controller';
import { Controller } from 'src/presentation/controllers/ports/controller';
import { makeGetAllQuotes } from '../usecases/get-all-quotes-factory';

export const makeGetAllQuotesController = (): Controller => {
  const usecase = makeGetAllQuotes();
  const controller = new GetAllQuotesController(usecase);
  return controller;
};
