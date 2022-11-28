import Post from './Post';
import { prisma } from '@/api/prisma';

import { serialize } from '@/utils/serializeData';
import { PostWithMetadata } from '@typings';

interface Props {
  count?: number;
  recent?: boolean;
}

const PostGroup = async ({ recent = false }: Props) => {
  const posts = await getPosts(recent ? 'createdAt' : 'views');

  return (
    <>
      {posts.map((post, i) => {
        return <Post key={i} post={post} large={i === 0} />;
      })}
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

export default PostGroup;
