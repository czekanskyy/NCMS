'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Input from '../../components/global/Input';
import ModalWrapper from '../../components/global/ModalWrapper';

interface FormData {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  picture: string;
  passwordF: string;
  passwordR: string;
}

const AddUser = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const initialValues: FormData = {
    username: '',
    fullName: '',
    email: '',
    phone: '',
    bio: '',
    picture: '',
    passwordF: '',
    passwordR: '',
  };

  const [values, setValues] = useState<FormData>(initialValues);
  const [passwdMatch, setPasswdMatch] = useState(true);

  const addUser: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (values.passwordF !== values.passwordR) return;

    const res = await fetch('https://n-cms.netlify.app/api/addUser', {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (res.status === 200) {
      alert('Pomyślnie dodano');
      const target = e.target as HTMLFormElement;
      target.submit();
    }
  };

  return (
    <>
      <button className='w-max px-4 py-2 rounded-lg bg-indigo-500 font-medium flex items-center gap-x-2' onClick={() => setModalVisible(true)}>
        <FaPlus />
        Nowy użytkownik
      </button>

      <ModalWrapper visible={modalVisible} onClose={() => setModalVisible(false)}>
        <form className='grid gap-3 lg:grid-cols-2' onSubmit={addUser}>
          <Input label='Imię i nazwisko' required handler={e => setValues({ ...values, fullName: e.target.value })} />
          <Input label='Nazwa użytkownika' required handler={e => setValues({ ...values, username: e.target.value })} />
          <Input label='Adres email' type='email' required className='col-span-full' handler={e => setValues({ ...values, email: e.target.value })} />
          <Input
            label={
              <span>
                Numer tel. <span className='text-xs tracking-tight text-gray-300'>(opcjonalne)</span>
              </span>
            }
            type='tel'
            handler={e => setValues({ ...values, phone: e.target.value })}
          />
          <Input
            label={
              <span>
                URL zdjęcia <span className='text-xs tracking-tight text-gray-300'>(opcjonalne)</span>
              </span>
            }
            type='url'
            handler={e => setValues({ ...values, picture: e.target.value })}
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
          />
          <Input label='Hasło' type='password' required handler={e => setValues({ ...values, passwordF: e.target.value })} />
          <Input
            label='Powtórz hasło'
            type='password'
            required
            handler={e => {
              setValues({ ...values, passwordR: e.target.value });
              if (e.target.value !== values.passwordF) return setPasswdMatch(false);
              setPasswdMatch(true);
            }}
            error={!passwdMatch}
          />
          <div className='col-span-full flex justify-end gap-2'>
            <button
              type='button'
              className='text-white max-w-max px-4 py-2 rounded-lg w-96 bg-red-500 outline-none mt-2 font-medium transition-all hover:bg-red-600 focus:bg-red-600 active:bg-red-600'
              onClick={e => {
                e.preventDefault();
                setModalVisible(false);
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

export default AddUser;
