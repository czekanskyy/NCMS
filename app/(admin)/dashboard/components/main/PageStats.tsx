import { FaClone, FaComments, FaEye, FaUsers } from 'react-icons/fa';
import { prisma } from '@/api/prisma';

const PageStats = async () => {
  // const sumPosts = await countPosts();
  // const {
  //   _sum: { views: sumViews },
  // } = await countViews();
  // const sumComments = await countComments();
  // const sumUsers = await countUsers();
  const sumPosts = 23;
  const sumViews = 432;
  const sumComments = 44;
  const sumUsers = 3;

  return (
    <section className='flex flex-col gap-y-3'>
      <h3 className='uppercase text-gray-400'>Statystyki strony</h3>
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        <div className='p-4 bg-white text-gray-900 rounded-lg relative'>
          <p className='text-gray-500 uppercase text-lg'>Posty</p>
          <p className='font-bold text-3xl'>{sumPosts}</p>
          <FaClone className='bg-green-100 text-green-600 p-2 w-12 h-12 rounded-md absolute right-4 top-4' />
        </div>
        <div className='p-4 bg-white text-gray-900 rounded-lg relative'>
          <p className='text-gray-500 uppercase text-lg'>Wyświetlenia</p>
          <p className='font-bold text-3xl'>{sumViews}</p>
          <FaEye className='bg-blue-100 text-blue-600 p-2 w-12 h-12 rounded-md absolute right-4 top-4' />
        </div>
        <div className='p-4 bg-white text-gray-900 rounded-lg relative'>
          <p className='text-gray-500 uppercase text-lg'>Komenarze</p>
          <p className='font-bold text-3xl'>{sumComments}</p>
          <FaComments className='bg-yellow-100 text-yellow-600 p-2 w-12 h-12 rounded-md absolute right-4 top-4' />
        </div>
        <div className='p-4 bg-white text-gray-900 rounded-lg relative'>
          <p className='text-gray-500 uppercase text-lg'>Użytkownicy</p>
          <p className='font-bold text-3xl'>{sumUsers}</p>
          <FaUsers className='bg-neutral-100 text-neutral-600 p-2 w-12 h-12 rounded-md absolute right-4 top-4' />
        </div>
      </div>
    </section>
  );
};

// const countPosts = async () => await prisma.nc_posts.count();
// const countViews = async () =>
//   await prisma.nc_posts.aggregate({
//     _sum: {
//       views: true,
//     },
//   });
// const countComments = async () => await prisma.nc_comments.count();
// const countUsers = async () => await prisma.nc_users.count();

export default PageStats;
