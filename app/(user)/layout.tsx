import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import { nc_posts } from '@prisma/client';
import { serialize } from '@/utils/serializeData';
import { prisma } from '@/api/prisma';

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const highlights = await getHighlights();

  return (
    <>
      <Navbar />
      {children}
      <Highlights posts={highlights} />
      <Footer />
    </>
  );
};

const getHighlights = async () =>
  serialize(
    await prisma.nc_posts.findMany({
      take: 3,
      orderBy: {
        createdAt: 'desc',
      },
    })
  ) as nc_posts[];

export default HomeLayout;
