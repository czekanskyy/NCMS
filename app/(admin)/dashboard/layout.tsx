import Sidebar from './components/sidebar/SideBar';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className='p-8 pl-72 w-screen min-h-screen bg-gray-700 text-white'>{children}</main>
    </>
  );
};
