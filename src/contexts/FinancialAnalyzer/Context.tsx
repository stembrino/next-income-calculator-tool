import { createContext } from 'react';
import { ResultLog } from '../CalculatorContext/Reducer/Reducer';

export type FinancialAnalyzer = {
  firstValue: ResultLog | null;
  secondValue: ResultLog | null;
  comparator: {
    diff: number | null;
  };
};

export type GenerateAnalyzeParam = {
  firstValue: ResultLog;
  secondValue: ResultLog;
};

export type FinancialAnalyzerContextType = {
  financialAnalyzer: FinancialAnalyzer;
  generateAnalyze: ({ firstValue, secondValue }: GenerateAnalyzeParam) => void;
};

export const FinancialAnalyzerContext = createContext<FinancialAnalyzerContextType | null>(null);
