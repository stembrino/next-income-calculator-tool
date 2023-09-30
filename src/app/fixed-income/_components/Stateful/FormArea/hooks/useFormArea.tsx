import { FormEvent, useState } from 'react';
import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import { FinanceForm } from '../types';
import { ActionTypes } from '@/contexts/CalculatorContext/Reducer/Reducer';
import { usePeriod } from '@/contexts/PeriodContext/usePeriod';

export const useFormArea = () => {
  const { calculatorDispatch } = useCalculator();
  const { indicators } = useFinancialIndicators();
  const { period } = usePeriod();
  const [formStates, setFormStates] = useState<FinanceForm>({
    initialValue: 1000,
    period: 12,
    cdiPercentage: 100,
    selicPercentage: 100,
  });

  const calculatorDispatchByType = (type: ActionTypes) => {
    calculatorDispatch({
      type,
      payload: {
        initialValue: formStates.initialValue,
        period: formStates.period,
        timeUnit: period.key,
        indicators: {
          cdi: {
            unitValues: indicators.cdi,
            percentage: formStates.cdiPercentage,
          },
          selic: {
            unitValues: indicators.selic,
            percentage: formStates.selicPercentage,
          },
        },
      },
    });
  };

  const handleOnChange = ({ name, value }: { name: string; value: number }) => {
    setFormStates((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleOnClickSelic = () => {
    calculatorDispatchByType('selic');
  };

  const handleOnClickCDI = () => {
    calculatorDispatchByType('cdi');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculatorDispatchByType('all');
  };

  return {
    formStates,
    handleOnChange,
    handleOnClickSelic,
    handleOnClickCDI,
    handleSubmit,
  };
};
