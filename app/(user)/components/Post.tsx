import Image from 'next/image';
import Link from 'next/link';
// import { PostTag, PostWithAuthor } from '@typings';
import { toURLPath } from '@/utils/toURLPath';
import { FaEye } from 'react-icons/fa';
import { PostWithMetadata } from '@typings';

interface Props {
  post: PostWithMetadata;
  large?: boolean;
}

const Post = ({ post, large = false }: Props) => {
  const pathname = toURLPath(post.id, post.title);
  const created = new Date(post.createdAt!).toLocaleDateString('pl-PL', { dateStyle: 'medium' });

  const PostBody = () => (
    <>
      <p className={`${large ? 'text-blue-300' : 'text-blue-500'} text-sm flex gap-1 font-medium`}>
        {post.tags.map(tag => {
          if (tag.name) return <span key={tag.name}>#{tag.name}</span>;
        })}
      </p>
      <p className={`${large ? 'text-2xl' : 'text-xl'} font-semibold flex-grow`}>{post.title}</p>
      <p className='text-xs flex gap-x-3'>
        <span>{post.author.fullName}</span>•<span>{created}</span>•
        <span className='flex items-center gap-x-1'>
          <FaEye />
          {post.views}
        </span>
      </p>
    </>
  );

  if (large)
    return (
      <Link
        href={`/article/${pathname}`}
        className='post-large'
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 67%, rgba(255,255,255,0) 100%), url(${post.thumbnail})`,
        }}
      >
        <div className='absolute bottom-0 left-0 w-full flex flex-col p-6 gap-y-2'>
          <PostBody />
        </div>
      </Link>
    );

  return (
    <Link href={`/article/${pathname}`} className='post-small'>
      <div className='w-full h-56 relative'>
        {post.thumbnail && <Image src={post.thumbnail} alt={post.title} fill sizes='(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw' />}
      </div>
      <div className='w-full flex flex-col p-6 gap-y-2 h-40'>
        <PostBody />
      </div>
    </Link>
  );
};

export default Post;
