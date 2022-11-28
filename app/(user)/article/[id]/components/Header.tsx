import Image from 'next/image';
import { FaComments, FaEye } from 'react-icons/fa';

interface Props {
  title: string;
  createdAt: Date;
  views: number;
  cover?: string | null;
  comments: number;
  authorName: string;
  authorPicture?: string;
}

const Header = ({ title, createdAt, views, cover, comments, authorName, authorPicture }: Props) => {
  return (
    <header className='flex flex-col items-center p-8 gap-y-12 bg-gray-100'>
      <h1 className='max-w-4xl w-full text-5xl font-semibold text-gray-800 mt-8'>{title}</h1>
      <div className='max-w-4xl w-full flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <div className='relative w-12 h-12'>
            <Image src={authorPicture} alt='Profile picture' fill className='object-cover object-center rounded-full' priority />
          </div>
          <div className='grid'>
            <p>
              Autor: <span className='font-bold text-gray-600'>{authorName}</span>
            </p>
            <p className='text-sm text-gray-600 flex items-center gap-x-2'>
              <span>{new Date(createdAt).toLocaleDateString('pl-PL', { dateStyle: 'long' })}</span>•
              <span className='flex items-center gap-x-1'>
                <FaEye />
                {views}
              </span>
            </p>
          </div>
        </div>

        <div className='flex items-center gap-x-2 text-xl'>
          <FaComments className='w-6' />
          {comments}
        </div>
      </div>
      <div className='max-w-4xl w-full relative h-[480px]'>{cover && <Image src={cover} alt='' fill className='object-cover object-center rounded-xl' />}</div>
    </header>
  );
};

export default Header;
