'use client';

import getUser from '@/utils/getUser';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSignOutAlt, FaUserCog } from 'react-icons/fa';

interface Props {
  image?: string;
  fullName?: string;
  email?: string;
}

const defaultImage =
  'https://ggyhzdcsgoixwjaizewn.supabase.co/storage/v1/object/sign/profile-pictures/avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlLXBpY3R1cmVzL2F2YXRhci5wbmciLCJpYXQiOjE2Njk0MDAzNTUsImV4cCI6MTk4NDc2MDM1NX0.lym-Uuh_mnntH_RKMFFkbx9mlOXjmLp0ACKx-LBsdPY';

const Profile = () => {
  const user = getUser();

  return (
    <div className='flex flex-col items-center gap-y-1'>
      <div className='relative h-16 w-16 mb-2 object-cover'>
        <Image src={user?.picture || defaultImage} alt='Profile picture' fill sizes='10vw' className='rounded-full shadow-lg h-16 w-16' />
      </div>
      {user?.fullName ? <p className='font-bold text-lg'>{user?.fullName}</p> : <p className='w-32 h-5 my-1 bg-white rounded-lg animate-pulse' />}
      {user?.email ? (
        <p className='text-xs text-gray-500 font-medium'>{user?.email}</p>
      ) : (
        <p className='w-44 h-3 my-0.5 bg-gray-500 rounded-lg animate-pulse' />
      )}
      <div className='flex gap-x-2 mt-1'>
        <Link href='/dashboard/profile' className='flex items-center gap-x-1 text-xs p-1.5 rounded-md bg-gray-700 transition-all hover:bg-gray-600'>
          <FaUserCog className='text-sm' /> Ustawienia
        </Link>
        <button className='flex items-center gap-x-1 text-xs p-1.5 rounded-md bg-gray-700 transition-all hover:bg-gray-600' onClick={() => signOut()}>
          <FaSignOutAlt className='text-sm' /> Wyloguj
        </button>
      </div>
    </div>
  );
};

export default Profile;
