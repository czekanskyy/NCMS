'use client';

import { FormEvent, useState } from 'react';
import ModalWrapper from '../../components/global/ModalWrapper';

interface Props {
  id: string;
}

const deleteUser = async (e: FormEvent<HTMLFormElement>, id: string) => {
  e.preventDefault();

  const res = await fetch('https://localhost:3000/api/deleteUser', {
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  if (res.status === 200) {
    alert('Pomyślnie usunięto');
    const target = e.target as HTMLFormElement;
    target.submit();
  }
};

const BtnDeleteUser = ({ id }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <button className='text-red-500 font-semibold' onClick={e => setModalVisible(true)}>
        Usuń
      </button>

      <ModalWrapper visible={modalVisible} onClose={() => setModalVisible(false)}>
        <p className='text-xl'>Czy na pewno chcesz usunąć tego użytkownika?</p>
        <p className='text-2xl font-medium text-red-500'>Tej akcji nie można cofnąć!</p>
        <div className='flex gap-x-2 justify-end mt-4'>
          <form onSubmit={e => deleteUser(e, id)}>
            <button
              type='submit'
              className='text-white max-w-max px-4 py-2 rounded-lg w-96 bg-red-500 outline-none mt-2 font-medium transition-all hover:bg-red-600 focus:bg-red-600 active:bg-red-600'
            >
              Usuń
            </button>
          </form>
          <button
            type='button'
            className='text-white max-w-max px-4 py-2 rounded-lg w-96 bg-green-500 outline-none mt-2 font-medium transition-all hover:bg-green-600 focus:bg-green-600 active:bg-green-600'
            onClick={e => {
              e.preventDefault();
              setModalVisible(false);
            }}
          >
            Anuluj
          </button>
        </div>
      </ModalWrapper>
    </>
  );
};

export default BtnDeleteUser;
