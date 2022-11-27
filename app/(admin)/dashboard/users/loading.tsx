import BlankTable from '../components/global/BlankTable';

const SettingsLodaing = async () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='w-44 h-10 rounded-lg bg-gray-300 animate-pulse' />
      {[...Array(3)].map((_, i) => (
        <BlankTable n={3} key={i} />
      ))}
    </div>
  );
};

export default SettingsLodaing;
