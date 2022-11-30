'use client';

import { nc_users } from '@prisma/client';
import { MouseEventHandler, useState } from 'react';
import Input from '../../components/global/Input';
import ModalWrapper from '../../components/global/ModalWrapper';

interface Props {
  modalVisible: boolean;
  user: nc_users;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  phone: string;
  bio: string;
  picture: string;
}

const EditUser = ({ modalVisible, user, onClose }: Props) => {
  const initialValues: FormData = {
    fullName: user.fullName,
    phone: user.phone,
    bio: user.bio,
    picture: user.picture,
  };

  const [values, setValues] = useState<FormData>(initialValues);

  const editUser: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const res = await fetch('https://localhost:3000/api/editUser', {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (res.status === 200) {
      alert('Pomyślnie edytowano');
      const target = e.target as HTMLFormElement;
      target.submit();
    }
  };

  return (
    <>
      <ModalWrapper visible={modalVisible} onClose={onClose}>
        <form className='grid gap-3 lg:grid-cols-2' onSubmit={editUser}>
          <Input
            label='Imię i nazwisko'
            required
            handler={e => setValues({ ...values, fullName: e.target.value })}
            value={values.fullName}
            className='col-span-full'
          />
          <Input
            label={
              <span>
                Numer tel. <span className='text-xs tracking-tight text-gray-300'>(opcjonalne)</span>
              </span>
            }
            type='tel'
            handler={e => setValues({ ...values, phone: e.target.value })}
            value={values.phone}
          />
          <Input
            label={
              <span>
                URL zdjęcia <span className='text-xs tracking-tight text-gray-300'>(opcjonalne)</span>
              </span>
            }
            type='url'
            handler={e => setValues({ ...values, picture: e.target.value })}
            value={values.picture}
          />
          <Input
            label={
              <span>
                Opis <span className='text-xs tracking-tight text-gray-300'>(opcjonalne)</span>
              </span>
            }
            className='col-span-full'
            textarea
            handler={e => setValues({ ...values, bio: e.target.value })}
            value={values.bio}
          />
          <div className='col-span-full flex justify-end gap-2'>
            <button
              className='text-white max-w-max px-4 py-2 rounded-lg w-96 bg-red-500 outline-none mt-2 font-medium transition-all hover:bg-red-600 focus:bg-red-600 active:bg-red-600'
              onClick={e => {
                e.preventDefault();
                onClose();
              }}
            >
              Anuluj
            </button>
            <button
              type='submit'
              className='text-white max-w-max px-4 py-2 rounded-lg w-96 bg-green-500 outline-none mt-2 font-medium transition-all hover:bg-green-600 focus:bg-green-600 active:bg-green-600'
            >
              Dodaj
            </button>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

export default EditUser;
