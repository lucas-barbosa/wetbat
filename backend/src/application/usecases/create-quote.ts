import { z, ZodError } from 'zod';
import { Quote } from 'src/domain/entities/quote';
import { IQuoteRepository } from 'src/domain/repositories/quote-repository';
import { Response } from 'src/application/utils/response';

const CreateQuoteDTO = z.object({
  customerName: z.string().min(1, 'Customer name can not be empty!'),
  from: z.string().min(1, 'From can not be empty!'),
  destination: z.string().min(1, 'Destination can not be empty!'),
  departureDate: z.date(),
  returnDate: z.date(),
  passengerCount: z.number().min(1, 'Quantity of Passengers should be at least 1!'),
  modeOfTransportation: z.string().min(1, 'Transportation can not be empty!')
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
        const errorMessage = error.errors.join('\n');
        return Response.failed(`There are errors in the provided data: \n ${errorMessage}`);
      }

      throw error;
    }
  }
}
