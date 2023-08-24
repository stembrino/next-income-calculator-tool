import { createContext } from 'react';

export type FinancialIndicatorsContextType = {
  govSaving: number | null;
  cdi: number | null;
  selic: number | null;
  isLoading: boolean;
  updateCDI: () => Promise<boolean>;
  updateSelic: () => Promise<boolean>;
  updateGovSaving: () => Promise<boolean>;
  updateAllIndicators: () => Promise<boolean>;
};

export const FinancialIndicatorsContext = createContext<FinancialIndicatorsContextType | undefined>(undefined);