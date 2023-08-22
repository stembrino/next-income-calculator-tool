import React, { FC } from 'react';
import PercentageBar from './PercentageBar/PercentageBar';
import Tag from './Tag/Tag';
import { Tailwindest } from 'tailwindest';
import { CardProps, Info } from './types';

const Card: FC<CardProps> = ({ percentage = 50, title, info }) => {


  const Tags = info.map((info) => <Tag key={info.id} ellipseColor={info.ellipseColor} label={info.label} value={info.value} />)

  return (
    <div className='w-96 px-6 py-4 bg-white rounded-3xl'>
      <div>{title}</div>
      <div className='py-6'>
        <PercentageBar percentage={percentage} />
      </div>
      <div className=''>
        {Tags}
      </div>
    </div>
  );
};

export default Card;