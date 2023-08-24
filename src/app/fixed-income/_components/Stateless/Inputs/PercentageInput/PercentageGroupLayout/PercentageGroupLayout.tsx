import React, { FC } from 'react';

const PercentageGroupLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex justify-evenly md:justify-normal md:gap-6 flex-wrap'>
      {children}
    </div>
  );
};

export default PercentageGroupLayout;