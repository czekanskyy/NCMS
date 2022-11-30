import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import UserBlock from './UserBlock';
import Logo from '../../../public/favicon.png';

const Navbar = () => {
  return (
    <nav className='bg-white px-8 sticky left-0 top-0 shadow-lg shadow-black/5 z-40'>
      <div className='max-w-6xl w-full flex justify-between items-center h-16 text-lg mx-auto'>
        <Link href='/' className='text-2xl font-semibold flex items-center gap-x-2'>
          <div className='relative w-7 h-7'>
            <Image src={Logo} alt='Logo' fill />
          </div>
          <p>Blogger</p>
        </Link>

        <UserBlock />

        <form className='flex items-center'>
          <input type='search' placeholder='Szukaj artykułów' className='input pr-8' disabled />

          <FaSearch className='h-8 w-8 z-10 p-1.5 -ml-8 text-gray-400' />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
