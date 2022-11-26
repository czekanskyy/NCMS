'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCog, FaComments, FaDesktop, FaGlobe, FaImages, FaListUl, FaPlus, FaUsers } from 'react-icons/fa';

const Links = () => {
  const pathName = usePathname();

  return (
    <>
      {subpages.map((category, i) => (
        <section key={i} className='flex flex-col gap-y-2'>
          <h2 className='text-sm uppercase text-gray-500 text-center'>{category.name}</h2>
          {category.links.map((link, i) => (
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
      ))}
    </>
  );
};

const subpages = [
  {
    name: 'Administracja',
    links: [
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
    ],
  },
  {
    name: 'Redagowanie',
    links: [
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
    ],
  },
  {
    name: 'Strona',
    links: [
      {
        name: 'Odwiedź stronę',
        path: '/',
        icon: <FaGlobe />,
      },
    ],
  },
];

export default Links;
