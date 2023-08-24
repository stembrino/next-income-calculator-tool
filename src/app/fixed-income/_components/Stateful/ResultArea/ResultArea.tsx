import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext';
import React, { FC, useState } from 'react';
import ResultAreaLayout from './ResultAreaLayout/ResultAreaLayout';
import { Info } from '../../Stateless/Card/types';
import Card from '../../Stateless/Card/Card';

const ResultArea: FC = () => {
  // const { selic, cdi, govSaving } = useFinancialIndicators();
  const [counter, setCounter] = useState(30)

  const handleOnCLick = () => {
    setCounter((state) => state += 10)
  }
  const handleOnCLick02 = () => {
    setCounter((state) => state -= 10)
  }

  const mock: Info[] = [
    { id: "1", ellipseColor: "bg-black", label: "Valor investido", value: 100 },
    { id: "2", label: "Valor Bruto", value: 30000, ellipseColor: "bg-red-400" },
    { id: "3", label: "Impostos", value: 30000 }
  ]

  return (
    <ResultAreaLayout>
      {/* SELIC:{selic}
      CDI: {cdi}
      GOV SAVING: {govSaving} */}

      {/* <button className='text-white' onClick={handleOnCLick}>Click Increase</button>
      <br />
      <button className='text-white' onClick={handleOnCLick02}>Click Decrease</button> */}
      <Card info={mock} title='SELIC' percentage={counter} /> {/* Adjust this value */}
    </ResultAreaLayout>
  );
};

export default ResultArea;