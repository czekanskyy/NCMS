import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* @ts-expect-error Server Component */}
      <Highlights />
      <Footer />
    </>
  );
};

export default HomeLayout;
