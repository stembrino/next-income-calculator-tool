import { useContext } from 'react';
import { FinancialIndicatorsContext } from './Context';

export const useFinancialIndicators = () => {
  const context = useContext(FinancialIndicatorsContext);
  if (!context) {
    throw new Error('useFinancialIndicators must be used within a FinancialIndicatorsProvider');
  }
  return context;
};
