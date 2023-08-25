"use client"

import { useReducer } from 'react';
import React, { ReactNode } from 'react';
import { CalculatorContext, CalculatorContextType } from './Context';
import { CalculationResultState, reducer } from './Reducer/Reducer';


export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialValue: CalculationResultState = {
    cdi: { finalValue: 0, initialValue: 0, period: 0, result: 0 },
    selic: { finalValue: 0, initialValue: 0, period: 0, result: 0 }
  };
  const [calculatorState, calculatorDispatch] = useReducer(reducer, initialValue);

  const contextValue: CalculatorContextType = {
    calculatorState,
    calculatorDispatch
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
