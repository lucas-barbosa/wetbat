import { HttpResponse } from '../ports/http';

export const ok = (data: unknown): HttpResponse => ({
  statusCode: 200,
  body: data
});

export const created = (): HttpResponse => ({
  statusCode: 201
});

export const badRequest = (errorMessage: string): HttpResponse => ({
  statusCode: 400,
  body: {
    error: errorMessage
  }
});

export const notFound = (): HttpResponse => ({
  statusCode: 404
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.stack
});
