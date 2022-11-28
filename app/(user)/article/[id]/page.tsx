import { PostWithMetadata } from '@typings';
import { serialize } from '@/utils/serializeData';
import { prisma } from '@/api/prisma';
import Header from './components/Header';
import CommentsSection from './components/CommentsSection';
import TagsSection from './components/TagsSection';
import ArticleContent from './components/ArticleContent';
import { nc_tags } from '@prisma/client';

interface Props {
  params: {
    id: string;
  };
}

const Article = async ({ params: { id: pathname } }: Props) => {
  const id = pathname.substring(0, pathname.indexOf('--'));
  const post = await getPost(id);
  const postTags = await getPostTags(id);
  const comments = await prisma.nc_comments.count({
    where: {
      id,
    },
  });

  return (
    <>
      <Header
        title={post.title}
        createdAt={post.createdAt}
        views={post.views!}
        cover={post.thumbnail}
        comments={comments}
        authorName={post.author.fullName}
        authorPicture={post.author.picture}
      />

      <main className='flex flex-col items-center p-8 gap-y-12 bg-gray-100'>
        <ArticleContent content={post?.content} />
      </main>

      <TagsSection tags={postTags} />
      {/* @ts-ignore */}
      <CommentsSection id={id} />
    </>
  );
};

const getPost = async (id: string) =>
  serialize(
    await prisma.nc_posts.findUnique({
      where: {
        id,
      },
      include: {
        author: {
          select: {
            fullName: true,
            picture: true,
          },
        },
      },
    })
  ) as PostWithMetadata;

const getPostTags = async (id: string) =>
  serialize(
    await prisma.nc_tags.findMany({
      where: {
        posts: {
          some: {
            id,
          },
        },
      },
    })
  ) as nc_tags[];

export default Article;
