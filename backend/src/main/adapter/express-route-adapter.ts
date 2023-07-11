import { Request, Response } from 'express';
import { Controller } from 'src/presentation/controllers/ports/controller';
import { HttpRequest } from 'src/presentation/controllers/ports/http';

export const adaptRoute = (controller: Controller) => {
  return async (expressRequest: Request, expressResponse: Response) => {
    const httpRequest: HttpRequest = {
      body: expressRequest.body,
      params: expressRequest.params
    };

    const httpResponse = await controller.handle(httpRequest);

    return expressResponse.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
