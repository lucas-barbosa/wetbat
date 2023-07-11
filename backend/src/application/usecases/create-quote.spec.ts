import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { CreateQuote } from './create-quote';

describe('Create Quote usecase', () => {
  let quoteRepository: IQuoteRepository;
  let createQuote: CreateQuote;

  beforeEach(() => {
    quoteRepository = {} as IQuoteRepository;
    quoteRepository.create = jest.fn();
    createQuote = new CreateQuote(quoteRepository);
  });

  it('should create a quote with valid payload', async () => {
    // Arrange
    const payload = {
      customerName: 'John Doe',
      from: 'City A',
      destination: 'City B',
      departureDate: new Date(),
      returnDate: new Date(),
      passengerCount: 2,
      modeOfTransportation: 'Train'
    };

    // Act
    const result = await createQuote.execute(payload);

    // Assert
    expect(result.success).toBeTruthy();
    expect(quoteRepository.create).toBeCalledTimes(1);
    expect(quoteRepository.create).toBeCalledWith(payload);
  });

  it('should return error response for invalid payload', async () => {
    // Arrange
    const payload = {
      customerName: '',
      from: '',
      destination: '',
      departureDate: new Date(),
      returnDate: new Date(),
      passengerCount: 0,
      modeOfTransportation: ''
    };

    // Act
    const result = await createQuote.execute(payload);

    // Assert
    expect(result.success).toBe(false);
  });

  it('should throw an error for unexpected errors', async () => {
    // Arrange
    const payload = {
      customerName: 'John Doe',
      from: 'City A',
      destination: 'City B',
      departureDate: new Date(),
      returnDate: new Date(),
      passengerCount: 2,
      modeOfTransportation: 'Train'
    };

    // Simule um erro inesperado no repositório
    quoteRepository.create = jest.fn().mockRejectedValue(new Error());

    // Act & Assert
    await expect(createQuote.execute(payload)).rejects.toThrowError();
  });
});
