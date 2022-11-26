const SettingsLodaing = async () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='bg-white p-6 rounded-xl w-max flex flex-col gap-y-2 animate-pulse'>
        <h2 className='bg-gray-500 h-8 w-48 rounded-lg'></h2>
        <div className='bg-gray-400 rounded-lg mt-4 h-5 w-44' />
        <div className='bg-gray-50 px-4 py-2 rounded-lg w-96 h-11' />
        <div className='bg-gray-400 rounded-lg mt-4 h-5 w-40' />
        <div className='bg-gray-50 px-4 py-2 rounded-lg w-96 h-20' />
        <div className='bg-gray-400 rounded-lg mt-4 h-5 w-56' />
        <div className='bg-gray-50 px-4 py-2 rounded-lg w-96 h-11' />
        <div className='bg-gray-400 rounded-lg mt-4 h-5 w-48' />
        <div className='bg-gray-50 px-4 py-2 rounded-lg w-96 h-11' />
        <button className='px-4 py-2 rounded-lg w-96 bg-gray-300 outline-none mt-2'>
          <span className='opacity-0'>_</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsLodaing;
