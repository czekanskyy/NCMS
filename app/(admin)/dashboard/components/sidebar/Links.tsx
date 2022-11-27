'use client';

import getUser from '@/utils/getUser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCog, FaComments, FaDesktop, FaGlobe, FaImages, FaListUl, FaPlus, FaUsers } from 'react-icons/fa';

const Links = () => {
  const pathName = usePathname();
  const user = getUser();

  return (
    <>
      {user?.role === 'ADMIN' && (
        <section className='flex flex-col gap-y-2'>
          <h2 className='text-sm uppercase text-gray-500 text-center'>Administracja</h2>
          {administrating.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`flex items-center gap-x-3 px-3 py-2 rounded-lg transition-all hover:bg-indigo-500 ${pathName === link.path && 'bg-indigo-500'}`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </section>
      )}

      <section className='flex flex-col gap-y-2'>
        <h2 className='text-sm uppercase text-gray-500 text-center'>Redagowanie</h2>
        {redacting.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`flex items-center gap-x-3 px-3 py-2 rounded-lg transition-all hover:bg-indigo-500 ${pathName === link.path && 'bg-indigo-500'}`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </section>

      <section className='flex flex-col gap-y-2'>
        <h2 className='text-sm uppercase text-gray-500 text-center'>Strona</h2>

        <Link href='/' className='flex items-center gap-x-3 px-3 py-2 rounded-lg transition-all hover:bg-indigo-500'>
          <FaGlobe />
          Odwiedź stronę
        </Link>
      </section>
    </>
  );
};

const administrating = [
  {
    name: 'Kokpit',
    path: '/dashboard',
    icon: <FaDesktop />,
  },
  {
    name: 'Ustawienia strony',
    path: '/dashboard/settings',
    icon: <FaCog />,
  },
  {
    name: 'Użytkownicy',
    path: '/dashboard/users',
    icon: <FaUsers />,
  },
];

const redacting = [
  {
    name: 'Nowy wpis',
    path: '/dashboard/new-post',
    icon: <FaPlus />,
  },
  {
    name: 'Artykuły',
    path: '/dashboard/articles',
    icon: <FaListUl />,
  },
  {
    name: 'Komentarze',
    path: '/dashboard/comments',
    icon: <FaComments />,
  },
  {
    name: 'Media',
    path: '/dashboard/media',
    icon: <FaImages />,
  },
];

export default Links;
