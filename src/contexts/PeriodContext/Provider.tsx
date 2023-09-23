'use client';

import { useReducer } from 'react';
import { PeriodContext, PeriodState } from './Context';
import { reducer } from './Reducer';

const initialValue: PeriodState = { key: 'a.m.', label: 'month' };

export const PeriodProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [period, periodDispatch] = useReducer(reducer, initialValue);

  const contextValue: PeriodContext = {
    period,
    periodDispatch,
  };

  return <PeriodContext.Provider value={contextValue}>{children}</PeriodContext.Provider>;
};
