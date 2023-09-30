import { createContext } from 'react';
import { CalculationResultState } from '../CalculatorContext/Reducer/Reducer';

export type FinancialAnalyzer = {
  firstValue: CalculationResultState | null;
  secondValue: CalculationResultState | null;
  comparator: {
    diff: number | null;
  };
};

export type GenerateAnalyzeParam = {
  firstValue: CalculationResultState;
  secondValue: CalculationResultState;
};

export type FinancialAnalyzerContextType = {
  financialAnalyzer: FinancialAnalyzer;
  generateAnalyze: ({ firstValue, secondValue }: GenerateAnalyzeParam) => void;
};

export const FinancialAnalyzerContext = createContext<FinancialAnalyzerContextType | null>(null);
