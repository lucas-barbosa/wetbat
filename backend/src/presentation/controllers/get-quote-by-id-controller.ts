import { GetQuoteById } from 'src/application/usecases/get-quote-by-id';
import { notFound, ok, serverError } from './helpers/http-errors';
import { HttpRequest } from './ports/http';

export class GetQuoteByIdController {
  private readonly _getQuoteById: GetQuoteById;

  constructor (getQuoteById: GetQuoteById) {
    this._getQuoteById = getQuoteById;
  }

  async handle (request: HttpRequest) {
    try {
      const result = await this._getQuoteById.execute(request.params.id);

      if (result.success) {
        return ok(result.data);
      }

      return notFound(result.message);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
