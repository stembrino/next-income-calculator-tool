import React, { FC, useState } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import CurrencyInput from '../Stateless/Inputs/CurrencyInput/CurrencyInput';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { SiBuzzfeed } from 'react-icons/si';
import PercentageInput from '../Stateless/Inputs/PercentualInput/PercentualInput';
import PercentageGroupLayout from '../Stateless/Inputs/PercentualInput/PercentageGroupLayout/PercentageGroupLayout';



const FormArea: FC = () => {
  const [temp, setTemp] = useState(100)
  return (
    <FormAreaLayout>
      <CurrencyInput icon={<RiMoneyDollarCircleLine size={25} />} id='selic' label='Valor da Aplicação' onChange={(value: any) => { setTemp(value) }} value={temp} />
      <CurrencyInput icon={<RiMoneyDollarCircleLine size={25} />} id='selic' label='Valor da Aplicação' onChange={(value: any) => { setTemp(value) }} value={temp} />
      <PercentageGroupLayout>
        <PercentageInput label='Selic' value={temp} id='test' onChange={(value) => setTemp(value)} />
        <PercentageInput label='Selic' value={temp} id='test' onChange={(value) => setTemp(value)} />
        <PercentageInput label='Selic' value={temp} id='test' onChange={(value) => setTemp(value)} />
        <PercentageInput label='Selic' value={temp} id='test' onChange={(value) => setTemp(value)} />
      </PercentageGroupLayout>
    </FormAreaLayout>
  );
};

export default FormArea;