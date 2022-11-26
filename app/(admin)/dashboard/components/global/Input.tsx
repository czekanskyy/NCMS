'use client';

import { ChangeEventHandler, ReactNode } from 'react';

interface Props {
  label?: string | ReactNode;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  handler?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string | number | readonly string[];
}

const Input = ({ label, placeholder, type = 'text', textarea = false, handler, value }: Props) => {
  return textarea ? (
    <>
      {label && <label className='text-gray-600 uppercase text-sm tracking-wide mt-4'>{label}</label>}
      <textarea
        className='bg-gray-50 px-4 py-2 rounded-lg border w-96 text-gray-700 outline-none transition-all hover:border-indigo-300 focus:border-indigo-300 active:border-indigo-300   resize-none'
        placeholder={placeholder}
        onChange={handler}
      />
    </>
  ) : (
    <>
      {label && <label className='text-gray-600 uppercase text-sm tracking-wide mt-4'>{label}</label>}
      <input
        type={type}
        className='bg-gray-50 px-4 py-2 rounded-lg border w-96 text-gray-700 outline-none transition-all hover:border-indigo-300 focus:border-indigo-300 active:border-indigo-300'
        placeholder={placeholder}
        onChange={handler}
      />
    </>
  );
};

export default Input;
