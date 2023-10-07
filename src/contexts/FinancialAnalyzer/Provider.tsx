'use client';

import { useState } from 'react';
import {
  FinancialAnalyzerContext,
  FinancialAnalyzerContextType,
  FinancialAnalyzer,
  GenerateAnalyzeParam,
} from './Context';

export const FinancialAnalyzerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [financialAnalyzer, setFinancialAnalyzer] = useState<FinancialAnalyzer>({
    firstValue: null,
    secondValue: null,
    comparator: { diff: null },
  });

  const generateAnalyze = ({ firstValue, secondValue }: GenerateAnalyzeParam) => {
    //TODO Crate a reducer to do it
    //TODO: generate the result for comparator
    const financialAnalyzer: FinancialAnalyzer = {
      firstValue: { ...firstValue },
      secondValue: { ...secondValue },
      comparator: { diff: 9999 },
    };
    setFinancialAnalyzer(financialAnalyzer);
  };

  const contextValue: FinancialAnalyzerContextType = {
    financialAnalyzer,
    generateAnalyze,
  };

  return (
    <FinancialAnalyzerContext.Provider value={contextValue}>
      {children}
    </FinancialAnalyzerContext.Provider>
  );
};
