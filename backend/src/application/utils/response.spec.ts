import { Response } from './response';

describe('Response', () => {
  it('should create a successful response with data', () => {
    const data = { id: 1, name: 'John' };
    const response = Response.success(data);

    expect(response.success).toBe(true);
    expect(response.message).toBe('');
    expect(response.data).toBe(data);
  });

  it('should create a successful response without data', () => {
    const response = Response.success();

    expect(response.success).toBe(true);
    expect(response.message).toBe('');
    expect(response.data).toBeUndefined();
  });

  it('should create a failed response with a message', () => {
    const errorMessage = 'Something went wrong';
    const response = Response.failed(errorMessage);

    expect(response.success).toBe(false);
    expect(response.message).toBe(errorMessage);
    expect(response.data).toBeUndefined();
  });

  it('should create a failed response without a message', () => {
    const response = Response.failed();

    expect(response.success).toBe(false);
    expect(response.message).toBe('');
    expect(response.data).toBeUndefined();
  });
});
