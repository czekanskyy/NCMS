'use client';
import { signOut } from 'next-auth/react';

const LogoutBtn = () => {
  return <button onClick={() => signOut()}>LogOut</button>;
};

export default LogoutBtn;
