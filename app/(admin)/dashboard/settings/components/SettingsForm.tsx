'use client';

import { nc_site_config } from '@prisma/client';
import { useState } from 'react';
import Input from '../../components/global/Input';

interface Props {
  configData: nc_site_config;
}

interface FormData {
  name?: string;
  description?: string;
  keywords?: string;
  favicon?: string;
}

const SettingsForm = ({ configData }: Props) => {
  const initialValues: FormData = {
    name: configData?.name,
    description: configData?.description,
    keywords: configData?.keywords,
    favicon: configData?.favicon,
  };

  const [values, setValues] = useState<FormData>(initialValues);

  const updateConfig: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const res = await fetch('https://localhost:3000/api/updateConfig', {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    if (res.status === 200) alert('Pomyślnie zmieniono');
    const target = e.target as HTMLFormElement;
    target.submit();
  };

  return (
    <form className='bg-white p-6 rounded-xl w-max flex flex-col gap-y-2' onSubmit={updateConfig}>
      <h2 className='text-gray-800 text-2xl'>
        Ustawienia strony
        <p className='text-xs text-blue-300'>(Zmiana pól jest opcjonalna)</p>
      </h2>

      <Input label='Nazwa strony' placeholder={configData.name} handler={e => setValues({ ...values, name: e.target.value })} />
      <Input
        label={
          <span>
            Opis strony <span className='text-xs tracking-tight text-gray-300'>(opcjonalne)</span>
          </span>
        }
        placeholder={configData.description}
        textarea
        handler={e => setValues({ ...values, description: e.target.value })}
      />
      <Input
        label={
          <span>
            Słowa kluczowe <span className='text-xs tracking-tight text-gray-300'>(opcjonalne)</span>
          </span>
        }
        placeholder={configData.keywords}
        handler={e => setValues({ ...values, keywords: e.target.value })}
      />
      <Input label='URL favikony' placeholder={configData.favicon} handler={e => setValues({ ...values, favicon: e.target.value })} />

      <button
        type='submit'
        className='px-4 py-2 rounded-lg w-96 bg-indigo-500 outline-none mt-2 font-medium transition-all hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-600'
      >
        Zapisz zmiany
      </button>
    </form>
  );
};

export default SettingsForm;
