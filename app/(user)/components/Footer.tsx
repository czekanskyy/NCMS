import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='p-12 bg-gray-100 flex text-gray-600 justify-center font-medium'>
      <div className='max-w-6xl w-full grid gap-y-6'>
        {/* <hr /> */}
        <div className='flex justify-between text-sm'>
          <p>&copy; {new Date().getFullYear()} Blogger - wszelkie prawa zastrzeżone</p>

          <Link href='/dashboard' className='text-sm font-medium p-1 underline text-gray-800'>
            Zaloguj się do Panelu
          </Link>

          <p>
            stworzone przez:{' '}
            <a href='https://czekanski.dev/' className='font-semibold' target='_blank' rel='noreferer noopener'>
              Dominik Czekański
            </a>{' '}
            4FTg
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
