"use client"
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import React, { FC } from 'react';

const Header: FC = () => {
  const { cdi, selic } = useFinancialIndicators()
  return (
    <header className='text-white'>
      <span>Selic: {selic}</span>
      <span>CDI: {cdi}</span>
    </header>
  );
};

export default Header;