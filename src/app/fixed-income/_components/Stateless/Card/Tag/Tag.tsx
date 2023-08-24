import React, { FC } from 'react';
import { TagProps } from './types';

const Tag: FC<TagProps> = ({ label, value, ellipseColor = "" }) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className='border-b border-gray-200 grid grid-flow-col items-center grid-cols-[min-content,minmax(150px,0.4fr),1fr]'>
      <div className={`inline-block mr-1 w-3 h-3 rounded-full ${ellipseColor}`}></div>
      <div className='pe-2 text-gray-500'>{`${label}:`}</div>
      <div>{formattedCurrency.format(value)}</div>
    </div >
  );
};

export default Tag;