import { createContext } from "react";
import { PeriodAction } from "./Reducer";


export type PeriodState = {
  key: string,
  label: string
}

export type PeriodContext = {
  period: PeriodState;
  periodDispatch: React.Dispatch<PeriodAction>;
};

export const PeriodContext = createContext<PeriodContext | null>(null);