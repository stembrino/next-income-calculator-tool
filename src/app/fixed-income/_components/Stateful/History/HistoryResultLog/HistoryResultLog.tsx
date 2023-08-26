import { useCalculator } from '@/contexts/CalculatorContext/useCalculator';
import React, { FC } from 'react';
import HistoryLogItem from './HistoryLogItem/HistoryLogItem';

const HistoryResultLog: FC = () => {
  const { calculatorState } = useCalculator();

  const HistoryLog = calculatorState.logs.map((log) => <HistoryLogItem key={crypto.randomUUID()} result={log} />);
  return (
    <div>
      {HistoryLog}
    </div>
  );
};

export default HistoryResultLog;