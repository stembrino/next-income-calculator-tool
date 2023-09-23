import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import { usePeriod } from '@/contexts/PeriodContext/usePeriod';
import { useEffect, useRef, useState } from 'react';

export const usePeriodSelector = () => {
  const { period, periodDispatch } = usePeriod();
  const periodIndex = useRef(1);
  const { indicators } = useFinancialIndicators();
  const [labels, setLabels] = useState({ cdi: '', selic: '' });

  useEffect(() => {
    indicatorPeriodSelector();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indicators]);

  const indicatorPeriodSelector = () => {
    switch (periodIndex.current) {
      case 0:
        periodDispatch({ type: 'a.d.' });
        setLabels((state) => {
          if (!indicators.cdi['a.d.'] || !indicators.selic['a.d.']) return state;
          return {
            ...state,
            cdi: String((indicators.cdi['a.d.'] * 100).toFixed(6)),
            selic: String((indicators.selic['a.d.'] * 100).toFixed(6)),
          };
        });
        break;
      case 1:
        periodDispatch({ type: 'a.m.' });
        setLabels((state) => {
          if (!indicators.cdi['a.m.'] || !indicators.selic['a.m.']) return state;
          return {
            ...state,
            cdi: String((indicators.cdi['a.m.'] * 100).toFixed(4)),
            selic: String((indicators.selic['a.m.'] * 100).toFixed(4)),
          };
        });
        break;
      default:
        periodDispatch({ type: 'a.a.' });
        setLabels((state) => {
          if (!indicators.cdi['a.a.'] || !indicators.selic['a.a.']) return state;
          return {
            ...state,
            cdi: String(indicators.cdi['a.a.'] * 100),
            selic: String(indicators.selic['a.a.'] * 100),
          };
        });
        break;
    }
  };

  const calculatePeriodSelected = () => {
    periodIndex.current++;
    if (periodIndex.current == 3) periodIndex.current = 0;
    indicatorPeriodSelector();
  };

  return {
    labels,
    period,
    calculatePeriodSelected,
  };
};
