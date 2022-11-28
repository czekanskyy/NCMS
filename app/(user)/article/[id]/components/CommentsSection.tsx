import { serialize } from '@/utils/serializeData';
import { nc_comments } from '@prisma/client';
import AddCommentForm from './AddCommentForm';
import Comment from './Comment';

interface Props {
  id: string;
}

const CommentsSection = async ({ id }: Props) => {
  const comments = await getComments(id);

  return (
    <>
      <section className='flex flex-col items-center p-8 gap-y-12 bg-gray-100'>
        <div className='max-w-4xl w-full grid gap-y-5'>
          <div>
            <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Komentarze</p>
            <hr />
          </div>
          {comments.length > 0 ? comments?.map((comment, i) => <Comment key={i} comment={comment} />) : <p>Brak komentarzy</p>}
        </div>
      </section>

      <section className='flex flex-col items-center p-8 gap-y-12 bg-gray-100'>
        <div className='max-w-4xl w-full grid gap-y-5'>
          <div>
            <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Dodaj komentarz</p>
            <hr />
          </div>
          <AddCommentForm post={id} />
        </div>
      </section>
    </>
  );
};

const getComments = async (postId: string) =>
  serialize(
    await prisma.nc_comments.findMany({
      where: {
        postId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  ) as nc_comments[];

export default CommentsSection;
