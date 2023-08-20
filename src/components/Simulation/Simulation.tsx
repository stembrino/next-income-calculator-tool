import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext';
import React, { FC, useEffect } from 'react';

const Simulation: FC = ({ }) => {
  const { selic, updateAllIndicators } = useFinancialIndicators();

  useEffect(() => {
    updateAllIndicators();
  }, [updateAllIndicators]);

  return (
    <div className='flex w-full p-5 bg-white shadow-md'>
      {selic}
    </div>
  );
};

export default Simulation;