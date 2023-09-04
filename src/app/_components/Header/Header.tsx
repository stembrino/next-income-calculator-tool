"use client"
import Button from '@/app/fixed-income/_components/Stateless/Button/Button';
import React, { FC } from 'react';
import { usePeriodSelector } from './hooks/usePeriodSelector';

const Header: FC = () => {
  const { period, calculatePeriodSelected, labels } = usePeriodSelector();

  const handleOnClick = () => {
    calculatePeriodSelected();
  }

  return (
    <header className='px-4 py-2 text-white flex flex-col gap-2'>
      <div className='flex gap-6 items-center'>
        <span>Selic ({period.key}): {`${labels.selic}%`}</span>
        <span>CDI ({period.key}): {`${labels.cdi}%`}</span>
      </div>
      <div className='w-min'>
        <Button onClick={handleOnClick} label={period.label} variant='outlined-white' size='small' />
      </div>
    </header>
  );
};

export default Header;