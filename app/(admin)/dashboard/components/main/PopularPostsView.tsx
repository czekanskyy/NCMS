import Link from 'next/link';
import { prisma } from '@/api/prisma';

const PopularPostsView = async () => {
  const posts = await getPopularPosts(10);

  return (
    <section className='flex flex-col gap-y-3'>
      <h3 className='uppercase text-gray-400'>Najpopularniejsze posty</h3>

      <table className='table-gray table-auto'>
        <thead>
          <tr className='bg-gray-100'>
            <th scope='col' className='table-header'>
              ID
            </th>
            <th scope='col' className='table-header'>
              Tytuł
            </th>
            <th scope='col' className='table-header'>
              Wyświetlenia
            </th>
            <th scope='col' className='table-header'>
              <span className='sr-only'>Akcje</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id} className='table-body'>
              <td className='table-data'>{post.id}</td>
              <td className='table-data font-medium'>{post.title}</td>
              <td className='table-data'>{post.views}</td>
              <td className='table-data text-right text-gray-500 font-medium'>
                <Link href='/'>Wyświetl</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const getPopularPosts = async (n: number) =>
  await prisma.nc_posts.findMany({
    take: n,
    select: {
      id: true,
      title: true,
      views: true,
    },
    orderBy: {
      views: 'desc',
    },
  });

export default PopularPostsView;
