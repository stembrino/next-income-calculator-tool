import { useFinancialIndicators } from "@/contexts/FinancialIndicatorsContext/useFinancialIndicators";
import { usePeriod } from "@/contexts/PeriodContext/usePeriod";
import { useEffect, useRef, useState } from "react";

export const usePeriodSelector = () => {
  const { period, periodDispatch } = usePeriod();
  let periodIndex = useRef(2);
  const { indicators } = useFinancialIndicators();
  const [labels, setLabels] = useState({ cdi: "", selic: "" });


  useEffect(() => {
    indicatorPeriodSelector();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indicators])

  const indicatorPeriodSelector = () => {
    switch (periodIndex.current) {
      case 0:
        periodDispatch({ type: "a.d." });
        setLabels((state) => {
          if (!indicators.cdi.ad || !indicators.selic.ad) return state;
          return {
            ...state,
            cdi: String((indicators.cdi.ad * 100).toFixed(6)),
            selic: String((indicators.selic.ad * 100).toFixed(6))
          }
        })
        break;
      case 1:
        periodDispatch({ type: "a.m." })
        setLabels((state) => {
          if (!indicators.cdi.am || !indicators.selic.am) return state;
          return {
            ...state,
            cdi: String((indicators.cdi.am * 100).toFixed(4)),
            selic: String((indicators.selic.am * 100).toFixed(4))
          }
        });
        break;
      default:
        periodDispatch({ type: "a.a." })
        setLabels((state) => {
          if (!indicators.cdi.aa || !indicators.selic.aa) return state;
          return {
            ...state,
            cdi: String(indicators.cdi.aa * 100),
            selic: String(indicators.selic.aa * 100)
          }
        })
        break;
    }
  }

  const calculatePeriodSelected = () => {
    periodIndex.current++;
    if (periodIndex.current == 3) periodIndex.current = 0;
    indicatorPeriodSelector();
  }

  return {
    labels,
    period,
    calculatePeriodSelected
  }
}