'use client';

import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  visible: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
}

const ModalWrapper = ({ children, visible, onClose }: Props) => {
  if (visible)
    return (
      <div className='w-screen h-screen grid place-content-center fixed left-0 top-0 z-50 backdrop-blur-sm backdrop-brightness-75 p-8' onClick={onClose}>
        <div className='p-6 rounded-xl bg-white text-gray-700 shadow-xl overflow-auto' onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  return <></>;
};

export default ModalWrapper;
