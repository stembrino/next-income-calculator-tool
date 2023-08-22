import React, { FC } from 'react';
import { TagProps } from './types';

const Tag: FC<TagProps> = ({ label, value, ellipseColor = "" }) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className='inline-flex gap-x-2 items-center'>
      <span className={`inline-block w-3 h-3 rounded-full ${ellipseColor}`}></span>
      <span className='text-sm color text-gray-500 font-semibold'>
        <span className='pe-2'>{label}</span><span>{formattedCurrency.format(value)}</span>
      </span>
    </div >
  );
};

export default Tag;