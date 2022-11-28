import Image from 'next/image';
import Link from 'next/link';
import { serialize } from '@/utils/serializeData';
import { toURLPath } from '@/utils/toURLPath';
import { prisma } from '@/api/prisma';
import { FaEye } from 'react-icons/fa';
import { nc_posts } from '@prisma/client';

const Highlights = async () => {
  const posts = await getPosts();

  return (
    <section className='p-12 bg-white flex justify-center font-medium'>
      <div className='max-w-6xl w-full grid gap-y-5'>
        <div>
          <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Zobacz także</p>
          <hr />
        </div>

        <div className='grid grid-cols-3 gap-x-6'>
          {posts?.map((post, i) => (
            <Link
              href={`/article/${toURLPath(post.id, post.title)}`}
              key={i}
              className='rounded-xl col-span-1 transition-all hover:-translate-y-1 flex gap-x-2 h-24'
            >
              <div className='relative w-32 h-24 shrink-0'>
                <Image src={post.thumbnail} alt={post.title} fill className='rounded-lg' sizes='(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw' />
              </div>
              <div className='flex flex-col gap-y-2 text-sm justify-start'>
                <p className='text-lg font-bold'>{post.title}</p>
                <div className='flex gap-x-3'>
                  <span>{new Date(post.createdAt).toLocaleDateString('pl-PL', { dateStyle: 'medium' })}</span>•
                  <span className='flex gap-x-1 items-center'>
                    <FaEye className='w-4' />
                    {post.views}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const getPosts = async () =>
  serialize(
    await prisma.nc_posts.findMany({
      take: 3,
      orderBy: {
        createdAt: 'desc',
      },
    })
  ) as nc_posts[];

export default Highlights;
