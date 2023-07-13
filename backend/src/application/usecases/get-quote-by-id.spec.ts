import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { GetQuoteById } from './get-quote-by-id';
import { Response } from '../utils/response';

describe('Get Quote by Id usecase', () => {
  let quoteRepository: IQuoteRepository;
  let getQuoteById: GetQuoteById;

  beforeEach(() => {
    quoteRepository = {} as IQuoteRepository;
    getQuoteById = new GetQuoteById(quoteRepository);
  });

  it('should return quote when valid ID is provided', async () => {
    // Arrange
    const quoteId = 1;
    const quote = {
      id: quoteId,
      customerName: 'John Doe',
      from: 'City A',
      destination: 'City B',
      departureDate: new Date(),
      returnDate: new Date(),
      passengerCount: 2,
      modeOfTransportation: 'Train'
    };
    quoteRepository.getById = jest.fn().mockResolvedValue(quote);

    // Act
    const result = await getQuoteById.execute(quoteId);

    // Assert
    expect(quoteRepository.getById).toBeCalledTimes(1);
    expect(quoteRepository.getById).toBeCalledWith(quoteId);
    expect(result.data).toEqual({
      id: quote.id,
      customerName: quote.customerName,
      from: quote.from,
      destination: quote.destination,
      departureDate: quote.departureDate,
      returnDate: quote.returnDate,
      passengerCount: quote.passengerCount,
      modeOfTransportation: quote.modeOfTransportation
    });
  });

  it('should return "Quote not found" error when ID does not exist', async () => {
    // Arrange
    const quoteId = 1;
    quoteRepository.getById = jest.fn().mockResolvedValue(null);

    // Act
    const result = await getQuoteById.execute(quoteId);

    // Assert
    expect(result).toEqual(Response.failed(`Quote not found with following ID: ${quoteId}`));
  });

  it('should return "Quote ID should be greater than 1" error when invalid ID is provided', async () => {
    // Arrange
    const quoteId = 0;

    // Act
    const result = await getQuoteById.execute(quoteId);

    // Assert
    expect(result).toEqual(Response.failed('Quote ID should be greater than 1'));
  });

  it('should return an error response when an exception occurs', async () => {
    // Arrange
    const quoteId = 1;
    quoteRepository.getById = jest.fn().mockRejectedValue(new Error());

    // Act & Assert
    expect(getQuoteById.execute(quoteId)).rejects.toThrow();
  });
});
