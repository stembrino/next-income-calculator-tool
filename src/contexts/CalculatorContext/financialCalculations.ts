type CalculateParams = {
  initialValue: number;
  months: number;
  financialIndicators: {
    selic: number;
  }
}

type FinancialCalculation = {
  calculateSelic: (param: CalculateParams) => number
}

export const financialCalculation = (calculateParams: CalculateParams): FinancialCalculation => {

  const calculateSelic = () => {
    console.log("🚀 ~ financialCalculation ~ calculateParams:", calculateParams)

    return 0;
  }

  return {
    calculateSelic
  }
}