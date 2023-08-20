"use client"

import { getApi } from '@/service/request';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type FinancialIndicatorsContextType = {
  govSaving: number | null;
  cdi: number | null;
  selic: number | null;
  isLoading: boolean;
  updateCDI: () => Promise<boolean>;
  updateSelic: () => Promise<boolean>;
  updateGovSaving: () => Promise<boolean>;
  updateAllIndicators: () => Promise<boolean>;
};

const FinancialIndicatorsContext = createContext<FinancialIndicatorsContextType | undefined>(undefined);

export const useFinancialIndicators = () => {
  const context = useContext(FinancialIndicatorsContext);
  if (!context) {
    throw new Error('useFinancialIndicators must be used within a FinancialIndicatorsProvider');
  }
  return context;
};

export const FinancialIndicatorsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cdi, setCDI] = useState<number | null>(null);
  const [selic, setSelic] = useState<number | null>(null);
  const [govSaving, setGovSaving] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateCDI = async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      const cdi = await getApi("cdi");
      setCDI(cdi)
    } catch {
      return false;
    } finally {
      setIsLoading(false);
    }
    return true;
  };

  const updateSelic = async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      const selic = await getApi("selic");
      console.log("🚀 ~ updateSelic ~ selic:", selic)
      setSelic(selic)
    } catch {
      return false;
    } finally {
      setIsLoading(false);
    }
    return true;
  };

  const updateGovSaving = async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      const govSaving = await getApi("gov-saving");
      setGovSaving(govSaving)
    } catch {
      return false;
    } finally {
      setIsLoading(false);
    }
    return true;
  };

  const updateAllIndicators = async (): Promise<boolean> => {
    try {
      await Promise.all([updateCDI(), updateSelic(), updateGovSaving()]);
    } catch {
      return false
    }
    return true;
  }

  useEffect(() => {
    updateAllIndicators();
  }, []);

  const contextValue: FinancialIndicatorsContextType = {
    cdi,
    govSaving,
    selic,
    isLoading,
    updateCDI,
    updateSelic,
    updateGovSaving,
    updateAllIndicators
  };

  return (
    <FinancialIndicatorsContext.Provider value={contextValue}>
      {children}
    </FinancialIndicatorsContext.Provider>
  );
};
