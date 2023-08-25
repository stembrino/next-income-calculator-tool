import { createContext } from 'react';
import { CalculatorAction, CalculationResultState } from './Reducer';

export type CalculatorContextType = {
  calculatorState: CalculationResultState;
  calculatorDispatch: React.Dispatch<CalculatorAction>;
};

export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);