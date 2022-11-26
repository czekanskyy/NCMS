import Link from 'next/link';
import LogoutBtn from './logout';

const HomePage = () => (
  <>
    <h1>Hello world!</h1>
    <Link href='/dashboard' className='bg-blue-500 text-white p-2'>
      Go to dashboard
    </Link>
    <LogoutBtn />
  </>
);

export default HomePage;
