import Link from 'next/link';
import PostGroup from './PostGroup';

const RecentPosts = () => {
  return (
    <article className='flex justify-center p-8 pb-16 bg-white'>
      <div className='max-w-6xl w-full grid grid-cols-12 gap-4'>
        <div className='col-span-12'>
          <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Najnowsze artykuły</p>
          <hr />
        </div>

        <div className='col-span-12' />

        {/* @ts-expect-error Server Component */}
        <PostGroup recent />

        <Link href='/articles/page/1' className='col-span-12 flex justify-end mt-2'>
          <p className='text-sm text-gray-500 font-semibold py-1'>Pokaż więcej</p>
        </Link>
      </div>
    </article>
  );
};

export default RecentPosts;
