'use client';

import getUser from '@/utils/getUser';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDesktop, FaSignOutAlt } from 'react-icons/fa';

const UserBlock = () => {
  const user = getUser();

  if (user)
    return (
      <div className='bg-gray-100 p-1.5 rounded-lg flex items-center gap-x-2'>
        <Link href='/dashboard/profile' className='relative w-7 h-7'>
          <Image
            src={user?.picture || 'https://jejqaaypiegodpcacfge.supabase.co/storage/v1/object/public/avatars/avatar_default'}
            alt='Avatar'
            fill
            sizes='10vw'
            className='rounded-md'
          />
        </Link>
        <Link href='/dashboard' className='flex gap-x-2'>
          <div className='w-7 h-7 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-600 grid place-content-center transition-all'>
            <FaDesktop />
          </div>
        </Link>
        <button onClick={() => signOut()} className='w-7 h-7 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-600 grid place-content-center transition-all'>
          <FaSignOutAlt />
        </button>
      </div>
    );

  return <></>;
};

export default UserBlock;
