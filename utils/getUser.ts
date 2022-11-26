import { nc_users } from '@prisma/client';
import { useSession } from 'next-auth/react';

const getUser = () => {
  const { data } = useSession();
  return data?.user as nc_users;
};

export default getUser;
