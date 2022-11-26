'use client';

interface Props {
  name: string;
}

const QuickAction = ({ name }: Props) => {
  return <button className='bg-white text-gray-900 px-4 py-2 rounded-lg min-w-max text-lg'>{name}</button>;
};

export default QuickAction;
