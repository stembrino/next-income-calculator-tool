import { createContext } from 'react';

export type FinancialIndicatorsContextType = {
  govSaving?: number;
  cdi?: number;
  selic?: number;
  isIndicatorsLoading: boolean;
  updateCDI: () => Promise<boolean>;
  updateSelic: () => Promise<boolean>;
  updateGovSaving: () => Promise<boolean>;
  updateAllIndicators: () => Promise<boolean>;
  indicatorRatesByMonth: () => {
    selic: number;
    cdi: number;
    govSaving: number;
  };
};

export const FinancialIndicatorsContext = createContext<FinancialIndicatorsContextType | undefined>(undefined);