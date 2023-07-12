import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { Response } from '../utils/response';

export class GetQuoteById {
  private readonly _quoteRepository: IQuoteRepository;

  constructor (quoteRepository: IQuoteRepository) {
    this._quoteRepository = quoteRepository;
  }

  async execute (quoteId: number) {
    if (isNaN(quoteId) || quoteId < 1) {
      return Response.failed('Quote ID should be greater than 1');
    }

    const quote = await this._quoteRepository.getById(Number(quoteId));

    if (!quote) {
      return Response.failed(`Quote not found with following ID: ${quoteId}`);
    }

    return Response.success({
      customerName: quote.customerName,
      from: quote.from,
      destination: quote.destination,
      departureDate: quote.departureDate,
      returnDate: quote.returnDate,
      passengerCount: quote.passengerCount,
      modeOfTransportation: quote.modeOfTransportation
    });
  }
}
