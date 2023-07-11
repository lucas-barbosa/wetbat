import { Quote } from 'src/domain/entities/quote';
import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { prisma } from '../prisma';

export class QuoteRepository implements IQuoteRepository {
  async create (payload: Quote) {
    await prisma.quote.create({
      data: {
        customerName: payload.customerName,
        from: payload.from,
        destination: payload.destination,
        departureDate: payload.departureDate,
        returnDate: payload.returnDate,
        passengerCount: payload.passengerCount,
        modeOfTransportation: payload.modeOfTransportation
      }
    });
  }

  async getAll () {
    return prisma.quote.findMany({
      take: 10
    });
  }

  async getById (quoteId: number) {
    return prisma.quote.findUnique({
      where: {
        id: quoteId
      }
    });
  }
}
