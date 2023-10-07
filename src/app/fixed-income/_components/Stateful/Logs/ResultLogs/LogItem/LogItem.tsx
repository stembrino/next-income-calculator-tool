import { ResultLog } from '@/contexts/CalculatorContext/Reducer/Reducer';
import React, { FC } from 'react';
import LogCell from './LogCell/LogCell';

type HistoryLogItemProps = {
  log: ResultLog;
  number: number;
  onClick(log: ResultLog): void;
};

const LogItem: FC<HistoryLogItemProps> = ({ log, number, onClick }) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleOnClick = () => {
    onClick(log);
  };

  return (
    <button type="button" onClick={handleOnClick}>
      <li className="flex gap-5 items-center border-y border-gray-400 py-2">
        <div className="w-8 h-8  rounded-full bg-gray-300 flex justify-center items-center text-lg">
          {number}
        </div>
        <div className="grid md:grid-flow-col">
          <LogCell text="shift" variant="border" label={log.type} value={`${log.percentage}%`} />
          <LogCell
            variant="border"
            label="InitialValue"
            value={formattedCurrency.format(log.initialValue)}
          />
          <LogCell
            variant="border"
            label="FinalValue"
            value={formattedCurrency.format(log.finalValue)}
          />
          <LogCell variant="border" label="Period" value={log.period} />
          <LogCell label="Gross Result" value={formattedCurrency.format(log.result)} />
        </div>
      </li>
    </button>
  );
};

export default LogItem;
