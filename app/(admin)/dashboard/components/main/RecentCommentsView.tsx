import { serialize } from '@/utils/serializeData';
import { prisma } from '@/api/prisma';
import CommentsData from './CommentsData';

const RecentCommentsView = async () => {
  const comments = await getRecentComments(10);

  return (
    <section className='flex flex-col gap-y-3'>
      <h3 className='uppercase text-gray-400'>Nowe komentarze</h3>
      <table className='table-gray'>
        <thead>
          <tr className='bg-gray-100'>
            <th scope='col' className='table-header'>
              ID
            </th>
            <th scope='col' className='table-header'>
              Treść
            </th>
            <th scope='col' className='table-header'>
              Autor
            </th>
            <th scope='col' className='table-header'>
              <span className='sr-only'>Akcje</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <CommentsData comments={comments} />
        </tbody>
      </table>
    </section>
  );
};

const getRecentComments = async (n: number) =>
  serialize(
    await prisma.nc_comments.findMany({
      take: n,
      orderBy: {
        createdAt: 'asc',
      },
    })
  );

export default RecentCommentsView;
