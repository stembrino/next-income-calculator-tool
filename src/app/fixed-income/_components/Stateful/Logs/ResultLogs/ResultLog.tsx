import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import React, { FC } from 'react';
import HistoryLogItem from './LogItem/LogItem';

const HistoryResultLog: FC = () => {
  const { calculatorState } = useCalculator();

  const handleOnClick = () => {
    console.log('line clicked');
  };

  const HistoryLog = calculatorState.logs.map((log, i) => (
    <HistoryLogItem onClick={handleOnClick} key={crypto.randomUUID()} number={i + 1} log={log} />
  ));
  return <ul className="flex flex-col gap-4">{HistoryLog}</ul>;
};

export default HistoryResultLog;
