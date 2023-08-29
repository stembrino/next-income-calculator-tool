type CalculateParams = {
  initialValue: number;
  period: number;
  financialIndicator?: number
  percentage: number;
}

// M = C(1 + i)t
// i: interest rate
// C: initial value
// t: time
// M: final value
export const calculateCompoundInterestRate = ({ financialIndicator: i, initialValue: C, period: t, percentage }: CalculateParams): number => {
  if (!i) throw new Error("calculateCompoundInterestRate ~ calculateCompoundInterestRate:financialIndicator was not provided.");
  if (!percentage) throw new Error("calculateCompoundInterestRate ~ percentage was not provided.");
  console.log("🚀 ~ calculateCompoundInterestRate ~ 1 + i * percentage:", percentage)

  const M = C * Math.pow(1 + i, t);

  return M;
}