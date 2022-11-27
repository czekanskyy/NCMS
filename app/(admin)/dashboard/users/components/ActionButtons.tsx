'use client';

import getUser from '@/utils/getUser';
import { nc_users } from '@prisma/client';
import BtnDeleteUser from './BtnDeleteUser';
import BtnEditUser from './BtnEditUser';

interface Props {
  user: nc_users;
  ownerId: string;
}

const ActionButtons = ({ user, ownerId }: Props) => {
  const activeUser = getUser();

  if (!ownerId)
    return (
      <>
        <BtnEditUser user={user} />
        <BtnDeleteUser id={user.id} />
      </>
    );

  if (activeUser?.id === ownerId)
    return (
      <>
        <BtnEditUser user={user} />
        <BtnDeleteUser id={user.id} />
      </>
    );

  return <BtnEditUser user={user} />;
};

export default ActionButtons;
