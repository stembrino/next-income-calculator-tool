import React, { FC, FormEvent, useEffect, useState } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import PercentageGroupLayout from '../../Stateless/Inputs/PercentageInput/PercentageGroupLayout/PercentageGroupLayout';
import PercentageInput from '../../Stateless/Inputs/PercentageInput/PercentageInput';
import CurrencyInput from '../../Stateless/Inputs/CurrencyInput/CurrencyInput';
import MonthInput from '../../Stateless/Inputs/MonthInput/MonthInput';
import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import { useFormArea } from './hooks/useFormArea';
import Footer from './Footer/Footer';

const FormArea: FC = () => {
  const { formStates, handleOnChange, handleOnClickCDI, handleOnClickSelic, handleSubmit } = useFormArea();
  const { calculatorState } = useCalculator();

  return (
    <form onSubmit={handleSubmit}>
      <FormAreaLayout>
        <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-20'>
          <CurrencyInput
            id='selic'
            name='initialValue'
            icon={<LiaPiggyBankSolid size={35} />}
            label='Initial Value'
            onChange={handleOnChange}
            value={formStates.initialValue} />
          <MonthInput name='period' label='Number of months' value={formStates.period} id='test' onChange={handleOnChange} />
        </div>
        <PercentageGroupLayout>
          {/* TODO: reset indicators text button */}
          <PercentageInput label='CDI Percentage' value={formStates.cdiPercentage} id='test' onChange={() => { }} />
          <PercentageInput label='Selic Percentage' value={formStates.selicPercentage} id='test' onChange={() => { }} />
        </PercentageGroupLayout>
        <Footer onClickCDI={handleOnClickCDI} onClickSelic={handleOnClickSelic} />
      </FormAreaLayout>
      <h1 className='text-white text-xl'>{JSON.stringify(calculatorState, null, 4)}</h1>
    </form>
  );
};

export default FormArea;