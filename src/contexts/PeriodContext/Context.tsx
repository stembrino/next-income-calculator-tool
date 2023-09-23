import { createContext } from 'react';
import { PeriodAction, PeriodKeys } from './Reducer';

export type PeriodState = {
  key: PeriodKeys;
  label: string;
};

export type PeriodContext = {
  period: PeriodState;
  periodDispatch: React.Dispatch<PeriodAction>;
};

export const PeriodContext = createContext<PeriodContext | null>(null);
