import React, { FC, FormEvent, useEffect, useState } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import PercentageGroupLayout from '../../Stateless/Inputs/PercentageInput/PercentageGroupLayout/PercentageGroupLayout';
import PercentageInput from '../../Stateless/Inputs/PercentageInput/PercentageInput';
import CurrencyInput from '../../Stateless/Inputs/CurrencyInput/CurrencyInput';
import { useFormArea } from './hooks/useFormArea';
import Footer from './Footer/Footer';
import DateSelector from './DateSelector/DateSelector';

const FormArea: FC = () => {
  const { formStates, handleOnChange, handleOnClickCDI, handleOnClickSelic, handleSubmit } = useFormArea();

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
        </div>
        <DateSelector value={formStates.period} onSelectChange={handleOnChange} />
        <PercentageGroupLayout>
          {/* TODO: reset indicators text button */}
          <PercentageInput name='cdiPercentage' label='CDI Percentage' value={formStates.cdiPercentage} id='test' onChange={handleOnChange} />
          <PercentageInput name='selicPercentage' label='Selic Percentage' value={formStates.selicPercentage} id='test' onChange={handleOnChange} />
        </PercentageGroupLayout>
        <Footer onClickCDI={handleOnClickCDI} onClickSelic={handleOnClickSelic} />
      </FormAreaLayout>
    </form>
  );
};

export default FormArea;