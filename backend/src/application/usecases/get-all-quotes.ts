import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { Response } from '../utils/response';

export class GetAllQuotes {
  private readonly _quoteRepository: IQuoteRepository;

  constructor (quoteRepository: IQuoteRepository) {
    this._quoteRepository = quoteRepository;
  }

  async execute () {
    const quotes = await this._quoteRepository.getAll();

    return Response.success(quotes.map(quote => ({
      id: quote.id,
      customerName: quote.customerName,
      from: quote.from,
      destination: quote.destination,
      departureDate: quote.departureDate,
      returnDate: quote.returnDate,
      passengerCount: quote.passengerCount,
      modeOfTransportation: quote.modeOfTransportation
    })));
  }
}
