const Hero = () => {
  return (
    <header className='flex bg-gray-100 h-96 justify-center items-center px-8'>
      <div className='max-w-6xl w-full flex justify-between'>
        <div>
          <h1 className='text-8xl font-semibold'>
            Web<span className='text-blue-500'>4U</span>
            <p className='text-2xl font-semibold tracking-wide'>WebDev prostymi słowami.</p>
          </h1>
        </div>
        <div className='text-9xl font-mono font-bold'>
          &lt;<span className='text-blue-500'>/</span>&gt;
        </div>
      </div>
    </header>
  );
};

export default Hero;
