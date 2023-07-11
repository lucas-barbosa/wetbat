import { CreateQuote } from 'src/application/usecases/create-quote';
import { badRequest, created, serverError } from './helpers/http-errors';
import { Controller } from './ports/controller';
import { HttpRequest } from './ports/http';

export class CreateQuoteController implements Controller {
  private readonly _createQuote: CreateQuote;

  constructor (createQuote: CreateQuote) {
    this._createQuote = createQuote;
  }

  async handle (request: HttpRequest) {
    try {
      const result = await this._createQuote.execute(request.body);

      if (result.success) {
        return created();
      }

      return badRequest(result.message ?? 'An error occured on create a new quote.');
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
