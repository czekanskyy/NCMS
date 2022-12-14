import Profile from './Profile';
import Links from './Links';
import Footer from './Footer';

const Sidebar = () => {
  return (
    <nav className='w-64 fixed left-0 top-0 h-screen bg-gray-800 text-white p-4 pt-8 flex flex-col gap-y-8 flex-shrink-0 z-40 overflow-auto'>
      <Profile />
      <hr className='border-gray-700' />
      <Links />
      <Footer />
    </nav>
  );
};

export default Sidebar;
