/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpRequest = {
  body?: any;
  params?: any;
}

export type HttpResponse = {
  statusCode: number;
  body?: any;
}
