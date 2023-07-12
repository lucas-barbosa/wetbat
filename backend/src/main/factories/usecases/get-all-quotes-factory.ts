import { GetAllQuotes } from 'src/application/usecases/get-all-quotes';
import { QuoteRepository } from 'src/infra/repositories/quote-repository';

export const makeGetAllQuotes = () => {
  const repository = new QuoteRepository();
  return new GetAllQuotes(repository);
};
