import Hero from './components/Hero';
import RecentPosts from './components/RecentPosts';
import PopularPosts from './components/PopularPosts';

const Home = async () => {
  return (
    <>
      <Hero />
      <RecentPosts />
      <PopularPosts />
    </>
  );
};

export default Home;
