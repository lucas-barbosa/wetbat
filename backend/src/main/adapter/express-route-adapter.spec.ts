import { Request, Response } from 'express';
import { Controller } from 'src/presentation/controllers/ports/controller';
import { HttpRequest } from 'src/presentation/controllers/ports/http';

import { adaptRoute } from './express-route-adapter';

describe('adaptRoute', () => {
  const mockController: Controller = {
    handle: jest.fn().mockResolvedValue({
      statusCode: 200,
      body: { message: 'Success' }
    })
  };

  const mockExpressRequest = {
    body: { data: 'Example data' },
    params: { id: '123' }
  } as unknown as Request;

  const mockExpressResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  } as unknown as Response;

  it('should call the controller with the correct request', async () => {
    const adaptedRoute = adaptRoute(mockController);
    await adaptedRoute(mockExpressRequest, mockExpressResponse);

    const expectedHttpRequest: HttpRequest = {
      body: { data: 'Example data' },
      params: { id: '123' }
    };

    expect(mockController.handle).toHaveBeenCalledWith(expectedHttpRequest);
  });

  it('should return the response status and body', async () => {
    const adaptedRoute = adaptRoute(mockController);
    await adaptedRoute(mockExpressRequest, mockExpressResponse);

    expect(mockExpressResponse.status).toHaveBeenCalledWith(200);
    expect(mockExpressResponse.json).toHaveBeenCalledWith({ message: 'Success' });
  });
});
