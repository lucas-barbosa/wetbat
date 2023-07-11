import { GetAllQuotes } from 'src/application/usecases/get-all-quotes';
import { badRequest, ok, serverError } from './helpers/http-errors';

export class GetAllQuotesController {
  private readonly _getAllQuotes: GetAllQuotes;

  constructor (createQuote: GetAllQuotes) {
    this._getAllQuotes = createQuote;
  }

  async handle () {
    try {
      const result = await this._getAllQuotes.execute();

      if (result.success) {
        return ok(result.data);
      }

      return badRequest(result.message ?? 'An error occured on getting all quotes.');
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
