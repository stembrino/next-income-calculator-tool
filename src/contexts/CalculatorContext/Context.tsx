import { createContext } from 'react';
import { CalculatorAction, CalculatorState } from './Reducer';

export type CalculatorContextType = {
  calculatorState: CalculatorState;
  calculatorDispatch: React.Dispatch<CalculatorAction>;
};

export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);