import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Field } from '../../../../components/Field';
import { createQuote } from '../../../../services/quotes/create-quote';

const inputClasses = 'w-full border-0 bg-transparent p-2 pt-0 outline-none';

const quickQuoteSchema = z.object({
  from: z.string().min(1, {
    message: 'From is required!'
  }),
  destination: z.string().min(1, {
    message: 'Destination is required!'
  }),
  departDate: z.date({
    required_error: 'Depart date is required!',
    invalid_type_error: 'Depart date is required!'
  }),
  returnDate: z.date({
    required_error: 'Return date is required!',
    invalid_type_error: 'Return date is required!'
  }),
  name: z.string().min(1, {
    message: 'Name is required!'
  }),
  people: z.coerce.number().min(1, {
    message: 'People should be greater than 0!'
  }),
  transportation: z.string().min(1, {
    message: 'Transportation is required!'
  })
}).refine(data => data.from !== data.destination, {
  message: 'Destination should be different than From',
  path: ['destination']
}).refine(data => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return data.departDate >= today;
}, {
  message: 'Depart date should be greater than Today!',
  path: ['departDate']
}).refine(data => data.returnDate > data.departDate, {
  message: 'Return date should be greater than Depart date!',
  path: ['returnDate']
});

type QuickQuote = z.infer<typeof quickQuoteSchema>;

export const QuickQuoteForm = () => {
  const queryClient = useQueryClient();

  const {
    reset,
    register,
    control,
    formState: {
      errors,
      isSubmitting
    },
    handleSubmit
  } = useForm<QuickQuote>({
    resolver: zodResolver(quickQuoteSchema)
  });

  const onSubmit: SubmitHandler<QuickQuote> = async (data) => {
    try {
      await createQuote(data);
      toast.success('Quote created successfully!');
      queryClient.invalidateQueries({ queryKey: ['quotes'] });
      reset(); 
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occured. Try again later!';
      toast.error(errorMessage);
    }
  };

  return (
    <form className="grid grid-cols-2 gap-x-4 gap-y-6 px-4 py-5" onSubmit={handleSubmit(onSubmit)}>
      <Field label="From" name="from" error={errors.from?.message}>
        <input id="from" type="text" className={inputClasses} {...register('from')} disabled={isSubmitting} autoComplete="off" />
      </Field>

      <Field label="Destination" name="destination" error={errors.destination?.message}>
        <input id="destination" type="text" className={inputClasses} {...register('destination')} disabled={isSubmitting} autoComplete="off" />
      </Field>

      <Field label="Depart Date" name="departDate" error={errors.departDate?.message}>
        <Controller
          control={control}
          name="departDate"
          render={({ field }) => (
            <DatePicker
              id="departDate"
              className={`${inputClasses} text-center`}
              placeholderText="Select date"
              onChange={date => field.onChange(date!)}
              selected={field.value}
              disabled={isSubmitting}
              minDate={new Date()}
              autoComplete="off"
            />
          )}
        />
      </Field>

      <Field label="Return Date" name="returnDate" error={errors.returnDate?.message}>
        <Controller
            control={control}
            name="returnDate"
            render={({ field }) => (
              <DatePicker
                id="returnDate"
                className={`${inputClasses} text-center`}
                placeholderText="Select date"
                onChange={date => field.onChange(date!)}
                selected={field.value}
                disabled={isSubmitting}
                minDate={new Date()}
                autoComplete="off"
              />
            )}
          />
      </Field>

      <Field label="People" name="people" error={errors.people?.message}>
        <input id="people" type="number" className={`${inputClasses} text-center`} min={1} {...register('people')} disabled={isSubmitting} autoComplete="off" />
      </Field>

      <Field label="Transportation" name="transportation" error={errors.transportation?.message}>
        <div className="mx-2">
          <select className="w-full border-0 bg-transparent outline-none"  {...register('transportation')} disabled={isSubmitting}>
            <option>Airplane</option>
            <option>Bullet train</option>
            <option>Cruise ship</option>
            <option>Subway</option>
            <option>Train</option>
          </select>
        </div>
      </Field>

      <Field label="Name" name="name" error={errors.name?.message}>
        <input id="name" type="text" className={inputClasses} {...register('name')} disabled={isSubmitting} autoComplete="off" />
      </Field>

      <button
        type="submit"
        className="self-center rounded-full bg-accent-500 py-4 font-medium text-white hover:bg-accent-400 disabled:bg-accent-300"
        disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create a quote'}
      </button>
    </form>
  );
};