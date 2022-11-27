import { nc_users } from '@prisma/client';
import { Suspense } from 'react';
import BlankTable from '../../components/global/BlankTable';
import ActionButtons from './ActionButtons';

interface Props {
  title: string;
  users: nc_users[];
  ownerId?: string;
}

const UsersTable = ({ users, title, ownerId }: Props) => {
  return (
    <section>
      <h2 className='col-span-full text-xl font-medium justify-self-start mb-2'>{title}</h2>
      <div className='overflow-auto rounded-xl'>
        <table className='table-gray'>
          <Suspense fallback={<BlankTable n={3} />}>
            <thead>
              <tr className='bg-gray-100'>
                <th className='table-header'>ID</th>
                <th className='table-header'>Pełna nazwa</th>
                <th className='table-header'>Nazwa użytkownika</th>
                <th className='table-header'>Adres email</th>
                <th className='table-header'>Numer tel.</th>
                <th className='table-header'>Data utworzenia</th>
                <th className='table-header w-0 opacity-0'>Akcje</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className={`table-body ${user.id === ownerId && 'font-medium italic'}`}>
                  <td className='table-data'>{user.id}</td>
                  <td className='table-data'>{user.fullName}</td>
                  <td className='table-data'>{user.username}</td>
                  <td className='table-data'>{user.email}</td>
                  <td className='table-data'>
                    {user.phone ? (
                      `${user.phone?.substring(0, 3)} ${user.phone?.substring(3, 6)} ${user.phone?.substring(6, 9)}`
                    ) : (
                      <span className='text-gray-300 italic'>BRAK</span>
                    )}
                  </td>
                  <td className='table-data'>{new Date(user.createdAt).toLocaleString('pl-PL', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                  <td className='table-data flex gap-x-3'>
                    <ActionButtons user={user} ownerId={ownerId} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Suspense>
        </table>
      </div>
    </section>
  );
};

export default UsersTable;
