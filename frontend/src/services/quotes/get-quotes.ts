import { isAxiosError } from 'axios';
import { api } from '../api';

export const getQuotes = async () => {
  try {
    const response = await api.get('/quotes');
    return response.data;
  } catch (err) {
    if (isAxiosError(err)) {
      const message = err.response?.data?.message ?? err.response?.data?.error ?? 'An error occured on server. Try again later!';
      throw new Error(message);
    }

    throw err;
  }
};