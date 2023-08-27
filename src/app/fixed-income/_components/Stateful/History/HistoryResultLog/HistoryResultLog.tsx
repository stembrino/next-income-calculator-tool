import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import React, { FC } from 'react';
import HistoryLogItem from './HistoryLogItem/HistoryLogItem';

const HistoryResultLog: FC = () => {
  const { calculatorState } = useCalculator();

  const HistoryLog = calculatorState.logs.map((log, i) => <HistoryLogItem key={crypto.randomUUID()} number={i + 1} log={log} />);
  return (
    <ul className='flex flex-col gap-4'>
      {HistoryLog}
    </ul>
  );
};

export default HistoryResultLog;