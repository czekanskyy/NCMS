import { nc_tags } from '@prisma/client';

interface Props {
  tags: nc_tags[];
}

const TagsSection = ({ tags }: Props) => {
  return (
    <section className='flex flex-col items-center p-8 gap-y-12 bg-gray-100'>
      <div className='max-w-4xl w-full grid gap-y-5'>
        <div>
          <p className='uppercase font-medium underline underline-offset-4 decoration-4 text-gray-700'>Tagi</p>
          <hr />
        </div>
        {tags.length > 0 ? (
          <div className='flex gap-x-3'>
            {tags?.map((tag, i) => (
              <p key={i} className='px-2 py-0.5 w-max rounded-xl bg-gray-200'>
                #{tag.name}
              </p>
            ))}
          </div>
        ) : (
          <p>Brak tagów</p>
        )}
      </div>
    </section>
  );
};

export default TagsSection;
