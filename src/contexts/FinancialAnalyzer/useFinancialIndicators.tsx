import { useContext } from 'react';
import { FinancialAnalyzerContext } from './Context';

export const useFinancialAnalyzer = () => {
  const context = useContext(FinancialAnalyzerContext);
  if (!context) {
    throw new Error('useFinancialIndicators must be used within a FinancialIndicatorsProvider');
  }
  return context;
};
