import React, { FC, FormEvent, useState } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import PercentageGroupLayout from '../../Stateless/Inputs/PercentageInput/PercentageGroupLayout/PercentageGroupLayout';
import PercentageInput from '../../Stateless/Inputs/PercentageInput/PercentageInput';
import CurrencyInput from '../../Stateless/Inputs/CurrencyInput/CurrencyInput';
import Button from '../../Stateless/Button/Button';
import MonthInput from '../../Stateless/Inputs/MonthInput/MonthInput';
import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';

type FinanceForm = {
  initialValue: number,
  cdiPercentage: number,
  selicPercentage: number,
}

const FormArea: FC = () => {
  const [temp, setTemp] = useState(100)
  const [formStates, setFormStates] = useState<FinanceForm>({
    initialValue: 1000,
    cdiPercentage: 100,
    selicPercentage: 100,

  })
  const { indicatorRatesByMonth, isIndicatorsLoading } = useFinancialIndicators();
  const { calculatorState, calculatorDispatch } = useCalculator();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selicRate = indicatorRatesByMonth().selic;
    if (!selicRate) return;

    calculatorDispatch({ type: "all", payload: { initialValue: formStates.initialValue, months: 10, financialIndicators: { cdi: indicatorRatesByMonth().cdi, selic: indicatorRatesByMonth().selic } } })
  }

  const handleOnChange = ({ name, value }: { name: string, value: number }) => {
    setFormStates((state) => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormAreaLayout>
        <h1>TEST: {JSON.stringify(calculatorState)}</h1>
        <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-20'>
          <CurrencyInput name='initialValue' icon={<LiaPiggyBankSolid size={35} />} id='selic' label='Valor da Aplicação' onChange={handleOnChange} value={formStates.initialValue} />
          <MonthInput label='Number of months' value={temp} id='test' onChange={() => { }} />
        </div>
        <PercentageGroupLayout>
          {/* TODO: reset indicators text button */}
          <PercentageInput label='CDI Percentage' value={formStates.cdiPercentage} id='test' onChange={() => { }} />
          <PercentageInput label='Selic Percentage' value={formStates.selicPercentage} id='test' onChange={() => { }} />
        </PercentageGroupLayout>
        <div className='ml-auto'>
          <Button disabled={isIndicatorsLoading} label='Calcular' />
        </div>
      </FormAreaLayout>
    </form>
  );
};

export default FormArea;