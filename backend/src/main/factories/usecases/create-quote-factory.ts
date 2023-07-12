import { CreateQuote } from 'src/application/usecases/create-quote';
import { QuoteRepository } from 'src/infra/repositories/quote-repository';

export const makeCreateQuote = () => {
  const repository = new QuoteRepository();
  const usecase = new CreateQuote(repository);
  return usecase;
};
