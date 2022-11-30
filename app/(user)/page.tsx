import Hero from './components/Hero';
import Post from './components/Post';
import Link from 'next/link';
import { PostWithMetadata } from '@typings';
import { serialize } from '@/utils/serializeData';
import { prisma } from '@/api/prisma';

const Home = async () => {
  const recent = await getPosts('createdAt');
  const popular = await getPosts('views');

  return (
    <>
      <Hero />

      {/* Recent posts */}
      <article className='flex justify-center p-8 pb-16 bg-white'>
        <div className='max-w-6xl w-full grid grid-cols-12 gap-4'>
          <div className='col-span-12'>
            <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Najnowsze artykuły</p>
            <hr />
          </div>

          <div className='col-span-12' />

          {recent?.map((post, i) => {
            return <Post key={i} post={post} large={i === 0} />;
          })}

          <Link href='/articles/page/1' className='col-span-12 flex justify-end mt-2'>
            <p className='text-sm text-gray-500 font-semibold py-1'>Pokaż więcej</p>
          </Link>
        </div>
      </article>

      {/* Popular posts */}
      <article className='flex justify-center p-8 pb-16 bg-gray-100'>
        <div className='max-w-6xl w-full grid grid-cols-12 gap-4'>
          <div className='col-span-12'>
            <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Popularne teraz</p>
            <hr />
          </div>

          <div className='col-span-12' />

          {popular?.map((post, i) => {
            return <Post key={i} post={post} large={i === 0} />;
          })}
        </div>
      </article>
    </>
  );
};

const getPosts = async (key: 'createdAt' | 'views') =>
  serialize(
    await prisma.nc_posts.findMany({
      take: 5,
      include: {
        author: {
          select: {
            fullName: true,
          },
        },
        tags: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        [key]: 'desc',
      },
    })
  ) as PostWithMetadata[];

export const revalidate = 30;

export default Home;
