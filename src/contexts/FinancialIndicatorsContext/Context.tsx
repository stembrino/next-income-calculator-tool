import { createContext } from 'react';
import { PeriodKeys } from '../PeriodContext/Reducer';

// export type IndicatorsDatesType = {
//   aa: number | null,
//   am: number | null,
//   ad: number | null
// }
export type IndicatorsDatesType = Record<PeriodKeys, number | null>

export type Indicators = {
  cdi: IndicatorsDatesType,
  selic: IndicatorsDatesType,
}


export type FinancialIndicatorsContextType = {
  isIndicatorsLoading: boolean;
  indicators: Indicators,
  updateCDI: () => Promise<boolean>;
  updateSelic: () => Promise<boolean>;
  updateAllIndicators: () => Promise<boolean>;
}
export const FinancialIndicatorsContext = createContext<FinancialIndicatorsContextType | undefined>(undefined);