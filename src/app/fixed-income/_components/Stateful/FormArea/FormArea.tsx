import React, { FC, FormEvent, useEffect, useState } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import PercentageGroupLayout from '../../Stateless/Inputs/PercentageInput/PercentageGroupLayout/PercentageGroupLayout';
import PercentageInput from '../../Stateless/Inputs/PercentageInput/PercentageInput';
import CurrencyInput from '../../Stateless/Inputs/CurrencyInput/CurrencyInput';
import Button from '../../Stateless/Button/Button';
import MonthInput from '../../Stateless/Inputs/MonthInput/MonthInput';
import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import { FinanceForm } from './types';


const FormArea: FC = () => {
  // TODO: refactor to move the form logic to custom hook
  const { indicatorRatesByMonth, isIndicatorsLoading, updateAllIndicators, selic } = useFinancialIndicators();
  const { calculatorState, calculatorDispatch } = useCalculator();
  const [formStates, setFormStates] = useState<FinanceForm>({
    initialValue: 1000,
    period: 12,
    cdiPercentage: 100,
    selicPercentage: 100,

  })

  const handleOnChange = ({ name, value }: { name: string, value: number }) => {
    setFormStates((state) => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  const handleOnClickSelic = () => {
    calculatorDispatch({ type: "selic", payload: { initialValue: formStates.initialValue, period: formStates.period, financialIndicators: { selic: indicatorRatesByMonth().selic } } })
  }

  const handleOnClickCDI = () => {
    calculatorDispatch({ type: "cdi", payload: { initialValue: formStates.initialValue, period: formStates.period, financialIndicators: { cdi: indicatorRatesByMonth().cdi } } })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selicRate = indicatorRatesByMonth().selic;
    if (!selicRate) return;

    calculatorDispatch({ type: "all", payload: { initialValue: formStates.initialValue, period: formStates.period, financialIndicators: { cdi: indicatorRatesByMonth().cdi, selic: indicatorRatesByMonth().selic } } })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormAreaLayout>
        <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-20'>
          <CurrencyInput name='initialValue' icon={<LiaPiggyBankSolid size={35} />} id='selic' label='Valor da Aplicação' onChange={handleOnChange} value={formStates.initialValue} />
          <MonthInput name='period' label='Number of months' value={formStates.period} id='test' onChange={handleOnChange} />
        </div>
        <PercentageGroupLayout>
          {/* TODO: reset indicators text button */}
          <PercentageInput label='CDI Percentage' value={formStates.cdiPercentage} id='test' onChange={() => { }} />
          <PercentageInput label='Selic Percentage' value={formStates.selicPercentage} id='test' onChange={() => { }} />
        </PercentageGroupLayout>
        <div className='ml-auto flex gap-4 items-center'>
          <p>calculate:</p>
          <Button type='button' disabled={isIndicatorsLoading} label='Selic' onClick={handleOnClickSelic} />
          <Button type='button' disabled={isIndicatorsLoading} label='CDI' onClick={handleOnClickCDI} />
          <Button type='submit' disabled={isIndicatorsLoading} label='All' />
        </div>
      </FormAreaLayout>
      <h1 className='text-white text-xl'>{JSON.stringify(calculatorState, null, 4)}</h1>
    </form>
  );
};

export default FormArea;