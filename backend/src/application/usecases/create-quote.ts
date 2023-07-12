import { z, ZodError } from 'zod';
import { Quote } from 'src/domain/entities/quote';
import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { Response } from 'src/application/utils/response';

const CreateQuoteDTO = z.object({
  customerName: z.string({
    required_error: 'Customer name is required!',
    invalid_type_error: 'Customar name should be a text!'
  }).min(1, 'Customer name can not be empty!'),
  from: z.string({
    required_error: 'From is required!',
    invalid_type_error: 'From should be a text!'
  }).min(1, 'From can not be empty!'),
  destination: z.string({
    required_error: 'Destination is required!',
    invalid_type_error: 'Destination should be a text!'
  }).min(1, 'Destination can not be empty!'),
  departureDate: z.string({
    required_error: 'Depareture date is required!',
    invalid_type_error: 'Departure date should be a valid date!'
  }).pipe(z.coerce.date({
    invalid_type_error: 'Departure date should be a valid date!'
  })).or(z.date({
    required_error: 'Depareture date is required!',
    invalid_type_error: 'Departure date should be a valid date!'
  })),
  returnDate: z.string({
    required_error: 'Return date is required!',
    invalid_type_error: 'Return date should be a valid date!'
  }).pipe(z.coerce.date({
    invalid_type_error: 'Return date should be a valid date!'
  })).or(z.date({
    required_error: 'Return date is required!',
    invalid_type_error: 'Return date should be a valid date!'
  })),
  passengerCount: z.number({
    invalid_type_error: 'Quantity of Passengers should be a number!',
    required_error: 'Quantity of Passengers is required!'
  }).min(1, 'Quantity of Passengers should be at least 1!'),
  modeOfTransportation: z.string({
    required_error: 'Transportation is required!',
    invalid_type_error: 'Transportation should be a text!'
  }).min(1, 'Transportation can not be empty!')
});

type Request = z.infer<typeof CreateQuoteDTO>;

export class CreateQuote {
  private readonly _quoteRepository;

  constructor (quoteRepository: IQuoteRepository) {
    this._quoteRepository = quoteRepository;
  }

  async execute (payload: Request) {
    try {
      const validatedPayload = CreateQuoteDTO.parse(payload);

      const quote = new Quote(
        validatedPayload.customerName,
        validatedPayload.from,
        validatedPayload.destination,
        validatedPayload.departureDate,
        validatedPayload.returnDate,
        validatedPayload.passengerCount,
        validatedPayload.modeOfTransportation
      );

      await this._quoteRepository.create(quote);

      return Response.success();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map(error => error.message).join('\n');
        return Response.failed(`There are errors in the provided data: \n ${errorMessage}`);
      }

      throw error;
    }
  }
}
