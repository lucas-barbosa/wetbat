import { Quote } from '../entities/quote';

export interface IQuoteRepository {
  create: (payload: Quote) => Promise<void>
  update: (payload: Quote) => Promise<void>
  getAll: () => Promise<Quote[]>
  getById: (quoteId: number) => Promise<Quote | null>
}
