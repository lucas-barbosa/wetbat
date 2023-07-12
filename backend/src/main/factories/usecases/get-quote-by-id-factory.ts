import { GetQuoteById } from 'src/application/usecases/get-quote-by-id';
import { QuoteRepository } from 'src/infra/repositories/quote-repository';

export const makeGetQuoteById = () => {
  const repository = new QuoteRepository();
  return new GetQuoteById(repository);
};
