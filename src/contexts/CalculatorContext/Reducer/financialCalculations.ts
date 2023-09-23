import { IndicatorsDatesType } from '@/contexts/FinancialIndicatorsContext/Context';
import { PeriodKeys } from '../../PeriodContext/Reducer';

type CalculateParams = {
  initialValue: number;
  period: number;
  unitValues: IndicatorsDatesType;
  percentage: number;
};

// M = C(1 + i)t
// i: interest rate
// C: initial value
// t: time
// M: final value
function calculate({
  i,
  C,
  t,
  percentage,
}: {
  i: number;
  C: number;
  t: number;
  percentage: number;
}) {
  percentage = percentage / 100;
  i = i * percentage;
  const M = C * Math.pow(1 + i, t);

  return M;
}

export function calculateCompoundInterestRate(
  timeUnit: PeriodKeys,
  { initialValue, percentage, period, unitValues }: CalculateParams,
): number {
  if (!unitValues['a.d.'] || !unitValues['a.m.'] || !unitValues['a.a.'])
    throw new Error(
      'calculateCompoundInterestRate ~ calculateCompoundInterestRate was not provided.',
    );
  if (!percentage) throw new Error('calculateCompoundInterestRate ~ percentage was not provided.');

  switch (timeUnit) {
    case 'a.d.':
      return calculate({ C: initialValue, i: unitValues['a.d.'], percentage, t: period });
    case 'a.m.':
      return calculate({ C: initialValue, i: unitValues['a.m.'], percentage, t: period });
    case 'a.a.':
      return calculate({ C: initialValue, i: unitValues['a.a.'], percentage, t: period });
  }
}
