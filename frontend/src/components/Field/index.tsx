import { ReactNode } from 'react';

type FieldProps = {
  label: string;
  name: string;
  children: ReactNode;
  error?: string;
}

export const Field = ({ label, name, children, error }: FieldProps) => {
  const hasError = error && error.length > 0;

  return (
    <div className={`border bg-gray-200 focus-within:outline-accent-500 ${hasError ? 'border-red-500' : 'border-gray-300'}`}>
      <label
        htmlFor={name}
        className={`block p-2 text-xs font-medium uppercase ${hasError ? 'text-red-500' : 'text-gray-500'}`}
      >{label}</label>

      {children}
      
      {hasError && <p className="mb-1 px-2 text-sm font-light text-red-500">{error}</p>}
    </div>
  );
};