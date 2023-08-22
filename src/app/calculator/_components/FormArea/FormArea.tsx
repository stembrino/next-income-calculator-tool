import React, { FC, useState } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import Input from '../Stateless/Input/Input';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { SiBuzzfeed } from 'react-icons/si';



const FormArea: FC = () => {
  const [temp, setTemp] = useState(100)
  return (
    <FormAreaLayout>
      <Input icon={<RiMoneyDollarCircleLine size={25} />} id='selic' label='Valor da Aplicação' onChange={(value: any) => { setTemp(value) }} value={temp} />
      <Input icon={<RiMoneyDollarCircleLine size={25} />} id='selic' label='Valor da Aplicação' onChange={(value: any) => { setTemp(value) }} value={temp} />
      <Input icon={<SiBuzzfeed size={22} />} id='selic' label='Taxa CDI' onChange={(value: any) => { setTemp(value) }} value={temp} />
      <Input icon={<SiBuzzfeed size={22} />} id='selic' label='Selic' onChange={(value: any) => { setTemp(value) }} value={temp} />
      <Input icon={<SiBuzzfeed size={22} />} id='selic' label='LCI/LCA' onChange={(value: any) => { setTemp(value) }} value={temp} />
    </FormAreaLayout>
  );
};

export default FormArea;