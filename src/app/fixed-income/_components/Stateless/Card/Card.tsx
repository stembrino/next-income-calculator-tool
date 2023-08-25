import React, { FC } from 'react';
import PercentageBar from './PercentageBar/PercentageBar';
import Tag from './Tag/Tag';
import { CardProps } from './types';
import { BsCalendar } from 'react-icons/bs';

const Card: FC<CardProps> = ({ percentage = 50, title, info, period }) => {


  const Tags = info.map((info) => <Tag key={info.id} ellipseColor={info.ellipseColor} label={info.label} value={info.value} />)

  return (
    <div className='px-6 py-4 bg-white rounded-3xl'>
      <div className='flex'>
        <h2 className='font-semibold'>{title}</h2>
        <div className='ml-auto flex items-center gap-1'>
          <BsCalendar size="12" />
          <span className='text-sm'>{period}</span>
        </div>
      </div>
      <div className='py-6'>
        <PercentageBar percentage={percentage} />
      </div>
      <div className='flex flex-col gap-2'>
        {Tags}
      </div>
    </div>
  );
};

export default Card;