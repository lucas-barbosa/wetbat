export class Response<T> {
  success: boolean;
  message?: string;
  data?: T;

  private constructor (success: boolean, message?: string, data?: T) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static success<S> (data?: S): Response<S> {
    return new Response(true, '', data);
  }

  static failed (message?: string): Response<unknown> {
    return new Response(false, message);
  }
}
