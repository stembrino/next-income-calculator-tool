"use client"
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import React, { FC } from 'react';

const Header: FC = () => {
  const { cdi, selic } = useFinancialIndicators();
  const selicPercentage = selic ? selic * 100 : "";
  const cdiPercentage = cdi ? cdi * 100 : "";
  return (
    <header className='text-white py-2 px-4 flex gap-6'>
      <span>Selic: {`${selicPercentage}%`}</span>
      <span>CDI: {`${cdiPercentage}%`}</span>
    </header>
  );
};

export default Header;