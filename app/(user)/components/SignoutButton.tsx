'use client';

import { signOut } from 'next-auth/react';

const SignoutButton = () => {
  return (
    <button onClick={() => signOut()} className='text-sm font-medium p-1 underline text-gray-800'>
      Wyloguj się
    </button>
  );
};

export default SignoutButton;
