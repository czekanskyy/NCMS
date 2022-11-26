import ChangeOwner from './components/ChangeOwner';
import SettingsForm from './components/SettingsForm';
import { prisma } from '@/api/prisma';
import { serialize } from '@/utils/serializeData';
import { SHA3 } from 'crypto-js';

const SettingsPage = async () => {
  const pageConfig = await getPageConfig();

  return (
    <div className='flex flex-col gap-y-8'>
      <SettingsForm configData={pageConfig} />
      <ChangeOwner ownerId={pageConfig?.ownerId} />
    </div>
  );
};

const getPageConfig = async () => serialize(await prisma.nc_site_config.findFirst());

export default SettingsPage;
