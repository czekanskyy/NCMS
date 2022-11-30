'use client';

import getUser from '@/utils/getUser';
import { useState } from 'react';

interface Props {
  ownerId: string;
}

const ChangeOwner = ({ ownerId }: Props) => {
  const [id, setId] = useState('');

  const changeOwner: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const res = await fetch('https://localhost:3000/api/changeOwner', {
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (res.status === 200) alert('Pomyślnie zmieniono');
    const target = e.target as HTMLFormElement;
    target.submit();
  };

  const user = getUser();

  if (user?.id === ownerId)
    return (
      <form className='bg-white p-6 rounded-xl w-max flex flex-col gap-y-2' onSubmit={changeOwner}>
        <h2 className='text-red-500 text-2xl'>Zmień właściciela</h2>

        <label className='text-gray-600 uppercase text-sm tracking-wide mt-4'>ID właściciela</label>
        <input
          type='text'
          className='bg-gray-50 px-4 py-2 rounded-lg border w-96 text-gray-700 outline-none transition-all hover:border-red-300 focus:border-red-300 active:border-red-300'
          onChange={e => setId(e.target.value)}
          value={id}
          required
          placeholder='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        />

        <button
          type='submit'
          className='px-4 py-2 rounded-lg w-96 bg-red-500 outline-none mt-2 font-medium transition-all hover:bg-red-600 focus:bg-red-600 active:bg-red-600'
        >
          Zmień
        </button>
      </form>
    );

  return <></>;
};

export default ChangeOwner;
