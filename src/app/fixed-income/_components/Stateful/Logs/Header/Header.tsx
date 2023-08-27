import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import React, { FC } from 'react';

const Header: FC = () => {
  const { calculatorDispatch } = useCalculator();

  const handleClickClean = () => {
    calculatorDispatch({ type: "cleanLogs" })
  }

  return (
    <div className='relative'>
      <button onClick={handleClickClean} aria-label='clean logs' className='absolute right-0 text-sm font-semibold'>clean</button>
      <div className='flex flex-col text-center'>
        <h2 className='text-xl'>Logs</h2>
        <h3 className='text-sm'>investment simulation</h3>
      </div>
    </div>
  );
};

export default Header;