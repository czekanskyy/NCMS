import PageStats from './components/main/PageStats';
import PopularPostsView from './components/main/PopularPostsView';
import QuickActions from './components/main/QuickActions';
import RecentCommentsView from './components/main/RecentCommentsView';

const DashboardPage = async () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <QuickActions />
      {/* @ts-ignore */}
      <PageStats />
      {/* @ts-ignore */}
      <PopularPostsView />
      {/* @ts-ignore */}
      <RecentCommentsView />
    </div>
  );
};

export default DashboardPage;
