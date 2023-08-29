import { FormEvent, useEffect, useState } from 'react';
import { useCalculator } from "@/contexts/CalculatorContext/useCalculator";
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import { FinanceForm } from '../types';
import { ActionTypes } from '@/contexts/CalculatorContext/Reducer/Reducer';

export const useFormArea = () => {
  const { calculatorDispatch } = useCalculator();
  const { indicatorRatesByMonth, selic, cdi, govSaving } = useFinancialIndicators();
  const [formStates, setFormStates] = useState<FinanceForm>({
    initialValue: 1000,
    period: 12,
    cdiPercentage: 100,
    selicPercentage: 100,

  })

  const calculatorDispatchByType = (type: ActionTypes) => {
    calculatorDispatch({
      type,
      payload: {
        initialValue: formStates.initialValue,
        period: formStates.period,
        indicators: {
          cdi: {
            value: indicatorRatesByMonth().cdi,
            percentage: formStates.cdiPercentage
          },
          selic: {
            value: indicatorRatesByMonth().selic,
            percentage: formStates.selicPercentage
          }
        }
      }
    })
  }

  useEffect(() => {
    if (!selic || !cdi || !govSaving) return;

    calculatorDispatchByType("all");
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
    calculatorDispatchByType("selic");
  }

  const handleOnClickCDI = () => {
    calculatorDispatchByType("cdi");
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculatorDispatchByType("all");
  }

  return {
    formStates,
    handleOnChange,
    handleOnClickSelic,
    handleOnClickCDI,
    handleSubmit,
  }
}