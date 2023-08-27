import { ResultLog } from '@/contexts/CalculatorContext/Reducer/Reducer';
import React, { FC } from 'react';

type HistoryLogItemProps = {
  log: ResultLog;
  number: number;
}

const HistoryLogItem: FC<HistoryLogItemProps> = ({ log, number }) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <li className='flex gap-5 items-center border-y border-gray-400 py-2'>
      <div className='w-8 h-8  rounded-full bg-gray-300 flex justify-center items-center text-lg'>{number}</div>
      <div className='grid md:grid-flow-col gap-2'>
        <div className='md:border-r md:border-gray-400 md:pe-2'>
          InitialValue: <span className='font-semibold'>{formattedCurrency.format(log.initialValue)}</span>
        </div>
        <div className='md:border-r md:border-gray-400 md:pe-2'>
          FinalValue: <span className='font-semibold'>{formattedCurrency.format(log.finalValue)}</span>
        </div>
        <div className='md:border-r md:border-gray-400 md:pe-2'>
          Period: <span className='font-semibold'>{log.period}</span>
        </div>
        <div>
          Result: <span className='font-semibold'>{formattedCurrency.format(log.result)}</span>
        </div>
      </div>
    </li>
  );
};

export default HistoryLogItem;