'use client';

import { nc_users } from '@prisma/client';
import { useState } from 'react';

interface FormData {
  username: string;
  password: string;
  fullName: string;
  email: string;
  role: string;
}

const CreateUser = () => {
  const initialValues: FormData = {
    username: '',
    password: '',
    fullName: '',
    email: '',
    role: 'USER',
  };
  const [values, setValues] = useState<FormData>(initialValues);

  const createUser: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/create', {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const user: nc_users = await res.json();
    console.log(user);
  };

  return (
    <form className='flex flex-col gap-y-2' onSubmit={createUser}>
      <p>
        username <input type='text' required onChange={e => setValues({ ...values, username: e.target.value })} value={values.username} />
      </p>
      <p>
        password <input type='password' required onChange={e => setValues({ ...values, password: e.target.value })} value={values.password} />
      </p>
      <p>
        fullName <input type='text' required onChange={e => setValues({ ...values, fullName: e.target.value })} value={values.fullName} />
      </p>
      <p>
        email <input type='email' required onChange={e => setValues({ ...values, email: e.target.value })} value={values.email} />
      </p>
      <p>
        role
        <select onChange={e => setValues({ ...values, role: e.target.value })} value={values.role}>
          <option value='USER'>USER</option>
          <option value='AUTHOR'>AUTHOR</option>
          <option value='ADMIN'>ADMIN</option>
        </select>
      </p>

      <button type='submit' className='p-2 bg-yellow-300'>
        Dodaj
      </button>
    </form>
  );
};

export default CreateUser;
