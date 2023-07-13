import { AxiosError } from 'axios';
import { api } from '../api';

const defaultErrorMessage = 'An error occured on server. Try again later!';

type CreateQuoteProps = {
  name: string;
  from: string;
  destination: string;
  returnDate: Date;
  departDate: Date;
  people: number;
  transportation: string;
};

export const createQuote = async ({
  name,
  from,
  destination,
  returnDate,
  departDate,
  people,
  transportation
}: CreateQuoteProps) => {
  try {
    const result = await api.post('quotes', {
      from,
      destination,
      customerName: name,
      modeOfTransportation: transportation,
      returnDate: returnDate.toString(),
      departureDate: departDate.toDateString(),
      passengerCount: people
    });

    if (result.status !== 201) {
      throw new Error(defaultErrorMessage);
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      const message = err.response?.data?.message ?? err.response?.data?.error ?? defaultErrorMessage;
      throw new Error(message);
    }

    throw err;
  }
};