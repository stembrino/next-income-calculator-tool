"use client"

import { useReducer } from 'react';
import React, { ReactNode } from 'react';
import { CalculatorContext, CalculatorContextType } from './Context';
import { CalculatorState, reducer } from './Reducer';


export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialValue: CalculatorState = { finalValue: null };
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
