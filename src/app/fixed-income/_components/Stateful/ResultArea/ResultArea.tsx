import React, { FC } from 'react';
import ResultAreaLayout from './ResultAreaLayout/ResultAreaLayout';
import { Info } from '../../Stateless/Card/types';
import Card from '../../Stateless/Card/Card';
import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';

const ResultArea: FC = () => {
  const { calculatorState } = useCalculator();

  const selicConfig: Info[] = [
    {
      id: '2',
      ellipseColor: 'bg-black',
      label: 'Initial value',
      value: calculatorState.selic.initialValue,
    },
    {
      id: '3',
      label: 'Final value',
      value: calculatorState.selic.finalValue,
      ellipseColor: 'bg-red-400',
    },
    {
      id: '4',
      label: 'Gross income',
      value: calculatorState.selic.result,
      ellipseColor: 'bg-red-400',
    },
  ];
  const cdiConfig: Info[] = [
    {
      id: '1',
      ellipseColor: 'bg-black',
      label: 'Initial value',
      value: calculatorState.cdi.initialValue,
    },
    {
      id: '2',
      label: 'Final value',
      value: calculatorState.cdi.finalValue,
      ellipseColor: 'bg-red-400',
    },
    {
      id: '3',
      label: 'Gross income',
      value: calculatorState.cdi.result,
      ellipseColor: 'bg-red-400',
    },
  ];

  return (
    <ResultAreaLayout>
      <Card
        period={calculatorState.selic.period}
        info={selicConfig}
        title="SELIC"
        percentage={50}
      />
      <Card period={calculatorState.cdi.period} info={cdiConfig} title="CDI" percentage={50} />
    </ResultAreaLayout>
  );
};

export default ResultArea;
