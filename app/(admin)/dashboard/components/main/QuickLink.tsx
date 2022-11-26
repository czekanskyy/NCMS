import Link from 'next/link';

interface Props {
  name: string;
  href: string;
}

const QuickLink = ({ href, name }: Props) => {
  return (
    <Link className='bg-white text-gray-900 px-4 py-2 rounded-lg min-w-max text-lg' href={href}>
      {name}
    </Link>
  );
};

export default QuickLink;
