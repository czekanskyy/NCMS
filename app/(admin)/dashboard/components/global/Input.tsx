'use client';

import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';

interface Props {
  label?: string | ReactNode;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  textarea?: boolean;
  handler?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string | number | readonly string[];
  required?: boolean;
  className?: string;
  error?: boolean;
}

const Input = ({ label, placeholder, type = 'text', textarea = false, handler, value, required = false, className, error = false }: Props) => {
  return textarea ? (
    <div className={`flex flex-col gap-2 mt-4 ${className}`}>
      {label && <label className='text-gray-600 uppercase text-sm tracking-wide'>{label}</label>}
      <textarea
        className='bg-gray-50 px-4 py-2 rounded-lg border min-w-[24rem] text-gray-700 outline-none transition-all hover:border-indigo-300 focus:border-indigo-300 active:border-indigo-300   resize-none'
        placeholder={placeholder}
        onChange={handler}
        required={required}
        value={value || ''}
      />
    </div>
  ) : (
    <div className={`flex flex-col gap-2 mt-4 ${className}`}>
      {label && <label className='text-gray-600 uppercase text-sm tracking-wide'>{label}</label>}
      <input
        type={type}
        className={`bg-gray-50 px-4 py-2 rounded-lg border min-w-[24rem] text-gray-700 outline-none transition-all ${
          !error ? 'hover:border-indigo-300 focus:border-indigo-300 active:border-indigo-300' : 'border-red-500'
        }`}
        placeholder={placeholder}
        onChange={handler}
        required={required}
        value={value || ''}
      />
    </div>
  );
};

export default Input;
