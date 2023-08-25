import { FormEvent, useEffect, useState } from 'react';
import { useCalculator } from "@/contexts/CalculatorContext/useCalculator";
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import { FinanceForm } from '../types';

export const useFormArea = () => {
  const { calculatorDispatch } = useCalculator();
  const { indicatorRatesByMonth, selic, cdi, govSaving } = useFinancialIndicators();
  const [formStates, setFormStates] = useState<FinanceForm>({
    initialValue: 1000,
    period: 12,
    cdiPercentage: 100,
    selicPercentage: 100,

  })

  useEffect(() => {
    if (!selic || !cdi || !govSaving) return;

    calculatorDispatch({
      type: "all", payload: {
        initialValue: formStates.initialValue, period: formStates.period, financialIndicators: {
          cdi: indicatorRatesByMonth().cdi,
          selic: indicatorRatesByMonth().selic
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selic, cdi, govSaving]);

  const handleOnChange = ({ name, value }: { name: string, value: number }) => {
    setFormStates((state) => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  const handleOnClickSelic = () => {
    calculatorDispatch({
      type: "selic", payload: {
        initialValue: formStates.initialValue,
        period: formStates.period, financialIndicators: { selic: indicatorRatesByMonth().selic }
      }
    })
  }

  const handleOnClickCDI = () => {
    calculatorDispatch({
      type: "cdi", payload: {
        initialValue: formStates.initialValue,
        period: formStates.period, financialIndicators: { cdi: indicatorRatesByMonth().cdi }
      }
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selicRate = indicatorRatesByMonth().selic;
    if (!selicRate) return;

    calculatorDispatch({
      type: "all", payload: {
        initialValue: formStates.initialValue, period: formStates.period,
        financialIndicators: { cdi: indicatorRatesByMonth().cdi, selic: indicatorRatesByMonth().selic }
      }
    })
  }

  return {
    formStates,
    handleOnChange,
    handleOnClickSelic,
    handleOnClickCDI,
    handleSubmit,
  }
}