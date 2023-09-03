import { useFinancialIndicators } from "@/contexts/FinancialIndicatorsContext/useFinancialIndicators";
import { useEffect, useRef, useState } from "react";

export const usePeriodSelector = () => {
  const periodLabels = ["a.d.", "a.m.", "a.a."];
  let periodIndex = useRef(2);
  const { indicators } = useFinancialIndicators();
  const [labels, setLabels] = useState({ cdi: "", selic: "" });
  const [btnLabel, setBtnLabel] = useState(periodLabels[2]);

  useEffect(() => {
    indicatorPeriodSelector();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indicators])

  const indicatorPeriodSelector = () => {
    switch (periodIndex.current) {
      case 0:
        setLabels((state) => {
          if (!indicators.cdi.ad || !indicators.selic.ad) return state;
          return {
            ...state,
            cdi: String((indicators.cdi.ad * 100).toFixed(4)),
            selic: String((indicators.selic.ad * 100).toFixed(4))
          }
        })
        break;
      case 1:
        setLabels((state) => {
          if (!indicators.cdi.am || !indicators.selic.am) return state;
          return {
            ...state,
            cdi: String((indicators.cdi.am * 100).toFixed(2)),
            selic: String((indicators.selic.am * 100).toFixed(2))
          }
        });
        break;
      default:
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
    if (periodIndex.current == periodLabels.length) periodIndex.current = 0;
    setBtnLabel(periodLabels[periodIndex.current]);
    indicatorPeriodSelector();
  }

  return {
    labels,
    btnLabel,
    calculatePeriodSelected
  }
}