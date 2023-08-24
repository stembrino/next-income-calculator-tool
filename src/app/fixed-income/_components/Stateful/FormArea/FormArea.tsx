import React, { FC, useState } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import PercentageGroupLayout from '../../Stateless/Inputs/PercentageInput/PercentageGroupLayout/PercentageGroupLayout';
import PercentageInput from '../../Stateless/Inputs/PercentageInput/PercentageInput';
import CurrencyInput from '../../Stateless/Inputs/CurrencyInput/CurrencyInput';
import Button from '../../Stateless/Button/Button';
import MonthInput from '../../Stateless/Inputs/MonthInput/MonthInput';
import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import { ActionTypes } from '@/contexts/CalculatorContext/Reducer';



const FormArea: FC = () => {
  const [temp, setTemp] = useState(100)

  const { calculatorState, calculatorDispatch } = useCalculator();

  const handleSubmit = () => {

    calculatorDispatch({ type: ActionTypes.CDI, payload: { initialValue: 1000, months: 10 } })
  }

  return (
    <FormAreaLayout>
      <h1>TEST: {JSON.stringify(calculatorState)}</h1>
      <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-20'>
        <CurrencyInput icon={<RiMoneyDollarCircleLine size={25} />} id='selic' label='Valor da Aplicação' onChange={() => { }} value={temp} />
        <MonthInput label='Number of months' value={temp} id='test' onChange={() => { }} />
      </div>
      <PercentageGroupLayout>
        <PercentageInput label='Current CDI' value={temp} id='test' onChange={() => { }} />
        <PercentageInput label='CDB' value={temp} id='test' onChange={() => { }} />
        <PercentageInput label='Selic' value={temp} id='test' onChange={() => { }} />
        <PercentageInput label='Selic' value={temp} id='test' onChange={() => { }} />
      </PercentageGroupLayout>
      <div className='ml-auto'>
        <Button label='Calcular' onClick={handleSubmit} />
      </div>
    </FormAreaLayout>
  );
};

export default FormArea;