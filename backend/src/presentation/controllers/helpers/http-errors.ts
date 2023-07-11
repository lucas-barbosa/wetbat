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

export const notFound = (errorMessage?: string): HttpResponse => ({
  statusCode: 404,
  body: {
    error: errorMessage ?? ''
  }
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.stack
});
