import PostGroup from './PostGroup';

const PopularPosts = () => {
  return (
    <article className='flex justify-center p-8 pb-16 bg-gray-100'>
      <div className='max-w-6xl w-full grid grid-cols-12 gap-4'>
        <div className='col-span-12'>
          <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Popularne teraz</p>
          <hr />
        </div>
        <div className='col-span-12' />

        {/* @ts-expect-error Server Component */}
        <PostGroup />
      </div>
    </article>
  );
};

export default PopularPosts;
