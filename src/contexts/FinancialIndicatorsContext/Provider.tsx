'use client';

import { APIRoutes, getApi } from '@/service/request';
import React, { useState, useEffect, ReactNode } from 'react';
import { FinancialIndicatorsContext, FinancialIndicatorsContextType, Indicators } from './Context';
import { calculateIndicatorByDay, calculateIndicatorByMonth } from './helper';

export const FinancialIndicatorsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialValueIndicators: Indicators = {
    cdi: {
      'a.a.': null,
      'a.d.': null,
      'a.m.': null,
    },
    selic: {
      'a.a.': null,
      'a.d.': null,
      'a.m.': null,
    },
  };
  const [isIndicatorsLoading, setIsIndicatorsLoading] = useState(true);
  const [indicators, setIndicators] = useState(initialValueIndicators);

  const updateCDI = async (): Promise<boolean> => {
    setIsIndicatorsLoading(true);
    try {
      const cdi = (await getApi(APIRoutes.CDI)) as number;
      setIndicators((state) => ({
        ...state,
        cdi: {
          'a.a.': cdi,
          'a.d.': calculateIndicatorByDay(cdi),
          'a.m.': calculateIndicatorByMonth(cdi),
        },
      }));
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
      setIndicators((state) => ({
        ...state,
        selic: {
          'a.a.': selic,
          'a.d.': calculateIndicatorByDay(selic),
          'a.m.': calculateIndicatorByMonth(selic),
        },
      }));
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
      await Promise.all([updateCDI(), updateSelic()]);
    } catch {
      return false;
    } finally {
      setIsIndicatorsLoading(false);
    }
    return true;
  };

  useEffect(() => {
    updateAllIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: FinancialIndicatorsContextType = {
    isIndicatorsLoading,
    indicators,
    updateCDI,
    updateSelic,
    updateAllIndicators,
  };

  return (
    <FinancialIndicatorsContext.Provider value={contextValue}>
      {children}
    </FinancialIndicatorsContext.Provider>
  );
};
