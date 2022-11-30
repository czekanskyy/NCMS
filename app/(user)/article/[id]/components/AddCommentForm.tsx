'use client';

import { FormEventHandler, useState } from 'react';

interface Props {
  post: string;
}

interface FormData {
  post: string;
  content: string;
  author: string;
}

const AddCommentForm = ({ post }: Props) => {
  const initialInputs = {
    post: post,
    author: '',
    content: '',
  };
  const [values, setValues] = useState<FormData>(initialInputs);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    try {
      const res = await fetch('https://n-cms.netlify.app/api/addComment', {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      if (res.status === 200) {
        const target = e.target as HTMLFormElement;
        target.submit();
      }
    } catch (error: any) {
      console.error('Błąd: ', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-12 gap-6'>
      <textarea
        name='content'
        placeholder='Treść*'
        className='col-span-12 p-3 outline-none rounded-xl rounded-br-none border transition-all focus:border-gray-400'
        value={values.content}
        onChange={e => setValues({ ...values, content: e.target.value })}
        required
      ></textarea>
      <input
        type='text'
        name='author'
        placeholder='Twoja nazwa (opcjonalne)'
        className='col-span-8 p-3 outline-none rounded-xl border transition-all focus:border-gray-400'
        value={values.author}
        onChange={e => setValues({ ...values, author: e.target.value })}
      />
      <button type='submit' className='col-span-4 p-3 outline-none rounded-xl text-white font-medium bg-blue-500 transition-all focus:bg-blue-600'>
        Wyślij
      </button>
    </form>
  );
};

export default AddCommentForm;
