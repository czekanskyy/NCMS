import Image from 'next/image';
import Logo from '../../../public/favicon.png';

const Hero = () => {
  return (
    <header className='flex bg-gray-100 h-96 justify-center items-center px-8'>
      <div className='max-w-6xl w-full flex justify-start gap-x-2'>
        <div className='relative w-32 h-32'>
          <Image src={Logo} alt='Logo' fill />
        </div>
        <h1 className='text-8xl font-semibold'>
          Blogger
          <p className='text-2xl font-semibold tracking-wide italic mt-2 text-gray-600'>Blog o wszystkim i o niczym.</p>
        </h1>
      </div>
    </header>
  );
};

export default Hero;
