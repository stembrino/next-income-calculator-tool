import { useFinancialIndicators } from '@/app/calculator/_contexts/FinancialIndicatorsContext';
import React, { FC } from 'react';

const CalculatorArea: FC = ({ }) => {
  const { selic, cdi, govSaving } = useFinancialIndicators();

  return (
    <div className='flex w-full p-5 bg-white shadow-md'>
      SELIC:{selic}
      CDI: {cdi}
      GOV SAVING: {govSaving}
    </div>
  );
};

export default CalculatorArea;