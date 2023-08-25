type CalculateParams = {
  initialValue: number;
  period: number;
  financialIndicator?: number
}

// M = C(1 + i)t
// i: interest rate
// C: initial value
// t: time
// M: final value
export const calculateCompoundInterestRate = ({ financialIndicator: i, initialValue: C, period: t }: CalculateParams): number => {
  if (!i) throw new Error("calculateCompoundInterestRate ~ calculateCompoundInterestRate:financialIndicator was not provided.");
  i = i / 100;
  const M = C * Math.pow(1 + i, t);

  return M;
}