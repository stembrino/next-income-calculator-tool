import React, { FC, useState } from 'react';
import ResultAreaLayout from './ResultAreaLayout/ResultAreaLayout';
import { Info } from '../../Stateless/Card/types';
import Card from '../../Stateless/Card/Card';
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';

const ResultArea: FC = () => {
  const { selic, cdi, govSaving } = useFinancialIndicators();
  const { calculatorState, calculatorDispatch } = useCalculator();

  const selicConfig: Info[] = [
    { id: "1", ellipseColor: "bg-black", label: "Initial Value", value: calculatorState.selic.initialValue },
    { id: "2", label: "Gross Result", value: calculatorState.selic.finalValue, ellipseColor: "bg-red-400" },
    { id: "3", label: "Impostos", value: 30000 }
  ]

  return (
    <ResultAreaLayout>
      <Card info={selicConfig} title='SELIC' percentage={50} />
      {/* <Card info={mock} title='CDI' percentage={50} /> */}
    </ResultAreaLayout>
  );
};

export default ResultArea;