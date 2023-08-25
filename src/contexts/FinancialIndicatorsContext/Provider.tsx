"use client"

import { APIRoutes, getApi } from '@/service/request';
import React, { useState, useEffect, ReactNode } from 'react';
import { FinancialIndicatorsContext, FinancialIndicatorsContextType } from './Context';

export const FinancialIndicatorsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cdi, setCDI] = useState<number>();
  const [selic, setSelic] = useState<number>();
  const [govSaving, setGovSaving] = useState<number>();
  const [isIndicatorsLoading, setIsIndicatorsLoading] = useState(true);

  const updateCDI = async (): Promise<boolean> => {
    setIsIndicatorsLoading(true);
    try {
      const cdi = (await getApi(APIRoutes.CDI)) as number;
      setCDI(cdi)
    } catch {
      return false;
    } finally {
      setIsIndicatorsLoading(false);
    }
    return true;
  };

  const updateSelic = async (): Promise<boolean> => {
    setIsIndicatorsLoading(true);
    try {
      const selic = (await getApi(APIRoutes.SELIC)) as number;
      console.log("🚀 ~ updateSelic ~ selic:", selic)
      setSelic(selic)
    } catch {
      return false;
    } finally {
      setIsIndicatorsLoading(false);
    }
    return true;
  };

  const updateGovSaving = async (): Promise<boolean> => {
    setIsIndicatorsLoading(true);
    try {
      const govSaving = (await getApi(APIRoutes.GOV_SAVING)) as number;
      setGovSaving(govSaving)
    } catch {
      return false;
    } finally {
      setIsIndicatorsLoading(false);
    }
    return true;
  };

  const updateAllIndicators = async (): Promise<boolean> => {
    setIsIndicatorsLoading(true);
    try {
      await Promise.all([updateCDI(), updateSelic(), updateGovSaving()]);
    } catch {
      return false
    } finally {
      setIsIndicatorsLoading(false);
    }
    return true;
  }

  const indicatorRatesByMonth = () => {
    return {
      selic: selic && selic / 12,
      cdi: cdi && cdi / 12,
      govSaving: govSaving && govSaving / 12
    }

  }

  useEffect(() => {
    updateAllIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: FinancialIndicatorsContextType = {
    cdi,
    govSaving,
    selic,
    isIndicatorsLoading,
    updateCDI,
    updateSelic,
    updateGovSaving,
    updateAllIndicators,
    indicatorRatesByMonth
  };

  return (
    <FinancialIndicatorsContext.Provider value={contextValue}>
      {children}
    </FinancialIndicatorsContext.Provider>
  );
};
