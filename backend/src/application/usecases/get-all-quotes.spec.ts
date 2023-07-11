import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { Response } from '../utils/response';
import { GetAllQuotes } from './get-all-quotes';

describe('Get All Quotes usecase', () => {
  let quoteRepository: IQuoteRepository;
  let getAllQuotes: GetAllQuotes;

  beforeEach(() => {
    quoteRepository = {} as IQuoteRepository;
    getAllQuotes = new GetAllQuotes(quoteRepository);
  });

  it('should return all quotes', async () => {
    // Arrange
    const quotes = [
      {
        id: 1,
        customerName: 'John Doe',
        from: 'City A',
        destination: 'City B',
        departureDate: new Date(),
        returnDate: new Date(),
        passengerCount: 2,
        modeOfTransportation: 'Train'
      },
      {
        id: 2,
        customerName: 'Jane Smith',
        from: 'City C',
        destination: 'City D',
        departureDate: new Date(),
        returnDate: new Date(),
        passengerCount: 1,
        modeOfTransportation: 'Bus'
      }
    ];

    quoteRepository.getAll = jest.fn().mockResolvedValue(quotes);

    // Act
    const result = await getAllQuotes.execute();

    // Assert
    expect(quoteRepository.getAll).toBeCalledTimes(1);
    expect(result.data).toEqual(quotes.map((quote) => ({
      customerName: quote.customerName,
      from: quote.from,
      destination: quote.destination,
      departureDate: quote.departureDate,
      returnDate: quote.returnDate,
      passengerCount: quote.passengerCount,
      modeOfTransportation: quote.modeOfTransportation
    })));
  });

  it('should return an empty array if no quotes are found', async () => {
    // Arrange
    quoteRepository.getAll = jest.fn().mockResolvedValue([]);

    // Act
    const result = await getAllQuotes.execute();

    // Assert
    expect(result).toEqual(Response.success([]));
  });

  it('should throw an error when an exception occurs', async () => {
    // Arrange
    quoteRepository.getAll = jest.fn().mockRejectedValue(new Error());

    // Act & arrange
    expect(getAllQuotes.execute()).rejects.toThrow();
  });
});
