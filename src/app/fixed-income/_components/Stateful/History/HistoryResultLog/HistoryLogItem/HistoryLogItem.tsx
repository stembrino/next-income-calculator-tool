import { CalculationResult } from '@/contexts/CalculatorContext/Reducer/Reducer';
import React, { FC } from 'react';

type HistoryLogItemProps = {
  result: CalculationResult
}

const HistoryLogItem: FC<HistoryLogItemProps> = ({ result }) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div>
      initialValue: {formattedCurrency.format(result.selic.initialValue)}
      <br />
      finalValue: {formattedCurrency.format(result.selic.finalValue)}
      <br />
      period: {result.selic.period}
      <br />
      result: {formattedCurrency.format(result.selic.result)}
      <br />
    </div>
  );
};

export default HistoryLogItem;