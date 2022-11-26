import Link from 'next/link';
import PageStats from './components/main/PageStats';
import PopularPostsView from './components/main/PopularPostsView';
import QuickActions from './components/main/QuickActions';
import RecentCommentsView from './components/main/RecentCommentsView';

const DashboardPage = async () => {
  return (
    <>
      <h1 className='bold text-2xl'>Dashboard</h1>
      <Link href='/' className='bg-blue-500 text-white p-2'>
        Back to home
      </Link>
      <h2>test</h2>
      <h2>test2</h2>
    </>
  );
};

export default DashboardPage;
