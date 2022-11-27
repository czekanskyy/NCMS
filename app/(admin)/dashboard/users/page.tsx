import { serialize } from '@/utils/serializeData';
import { prisma } from '@/api/prisma';
import { nc_roles, nc_users } from '@prisma/client';
import UsersTable from './components/UsersTable';
import AddUser from './components/AddUser';

const Users = async () => {
  const admins = await getUsers('ADMIN');
  const authors = await getUsers('AUTHOR');
  const users = await getUsers('USER');
  const { ownerId } = await getOwner();

  return (
    <div className='flex flex-col gap-8 text-white'>
      <AddUser />

      <UsersTable title='Administratorzy' users={admins} ownerId={ownerId} />

      <UsersTable title='Autorzy' users={authors} />

      <UsersTable title='Użytkownicy' users={users} />
    </div>
  );
};

const getUsers = async (role: nc_roles) =>
  serialize(
    await prisma.nc_users.findMany({
      where: {
        role,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
  ) as nc_users[];

const getOwner = async () =>
  await prisma.nc_site_config.findFirst({
    select: {
      ownerId: true,
    },
  });

export default Users;
