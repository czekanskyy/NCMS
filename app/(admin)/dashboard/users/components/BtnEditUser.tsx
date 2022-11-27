'use client';

import { nc_users } from '@prisma/client';
import { useState } from 'react';
import EditUser from './EditUser';

interface Props {
  user: nc_users;
}

const BtnEditUser = ({ user }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <button className='text-blue-500 font-semibold' onClick={e => setModalVisible(true)}>
        Edytuj
      </button>

      <EditUser user={user} modalVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};

export default BtnEditUser;
