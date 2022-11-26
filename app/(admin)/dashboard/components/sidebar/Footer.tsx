import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex text-xs gap-x-1 text-center text-gray-600 mt-auto'>
      &copy; 2022
      <Link href='/' className='font-semibold'>
        <h1>NextCMS</h1>
      </Link>
      |
      <a className='font-semibold' href='https://czekanski.dev' rel='noreferer noopener' target='_blank'>
        Dominik Czekański
      </a>
    </footer>
  );
};

export default Footer;
