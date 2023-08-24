import React, { FC } from 'react';

const FormAreaLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className='flex flex-col gap-8 bg-white rounded-xl w-full px-6 py-6'>
      {children}
    </section>
  );
};

export default FormAreaLayout;