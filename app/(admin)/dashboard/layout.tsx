import Sidebar from './components/sidebar/SideBar';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='p-12 min-h-screen w-full bg-gray-700 text-white'>{children}</main>
    </div>
  );
};
