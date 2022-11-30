import { serialize } from '@/utils/serializeData';
import { prisma } from '@/api/prisma';
import { PostWithMetadata } from '@typings';
import Post from '../../../components/Post';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
  };
}

const Articles = async ({ params: { id } }: Props) => {
  const posts = await getPosts(+id - 1);
  const postsLen = await countPosts();

  return (
    <article className='flex justify-center p-8 pb-16 bg-gray-100'>
      <div className='max-w-6xl w-full grid grid-cols-12 gap-4'>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}

        <div className='col-span-12 flex gap-2 items-center mt-8'>
          <p className='text-xl'>Strona: </p>
          {[...Array(Math.ceil(postsLen / 15))].map((n, i) => (
            <Link
              href={`/articles/page/${i + 1}`}
              key={i}
              className={`w-10 h-10 text-white transition-all hover:bg-gray-500 text-xl grid place-content-center rounded-lg ${
                i + 1 === +id ? 'bg-gray-500' : 'bg-gray-600'
              }`}
            >
              {i + 1}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

const getPosts = async (skip: number) =>
  serialize(
    await prisma.nc_posts.findMany({
      skip: skip * 15,
      take: 15,
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
        createdAt: 'desc',
      },
    })
  ) as PostWithMetadata[];

const countPosts = async () => serialize(await prisma.nc_posts.count()) as number;

export default Articles;
