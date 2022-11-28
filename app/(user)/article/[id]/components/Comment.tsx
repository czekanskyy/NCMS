import { nc_comments } from '@prisma/client';

interface Props {
  comment: nc_comments;
}

const Comment = ({ comment }: Props) => {
  return (
    <div className='flex gap-x-5'>
      <div className='relative w-10 h-10 flex-shrink-0'>
        <img src={`https://avatars.dicebear.com/api/initials/${comment.author}.svg`} alt={comment.author} className='rounded-lg mt-1' />
      </div>
      <div className='grid gap-y-3'>
        <p className='text-gray-600 '>{comment.content}</p>
        <p className='flex items-center gap-x-4 w-full'>
          <span className='text-sm font-semibold'>{comment.author}</span>
          <span className='text-sm text-gray-400'>{new Date(comment.createdAt).toLocaleString('pl-PL', { dateStyle: 'long', timeStyle: 'short' })}</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
