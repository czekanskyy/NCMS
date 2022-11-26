import '@/styles/global.scss';
import '@/styles/components.scss';
import '@/styles/document.scss';
import Providers from './providers';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='pl'>
      <head />
      <body className='font-roboto min-h-screen bg-gray-100'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
