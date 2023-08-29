import { calculateCompoundInterestRate } from "../financialCalculations";
import { Calculation, CalculatorAction } from "./Reducer";

function calculateResult(initialValue: number, finalValue: number) {
  //TODO: calculate the the taxes and rates
  const grossResult = finalValue - initialValue

  return { grossResult: grossResult };
}

export function calculateCdi(action: CalculatorAction): Calculation {
  const { initialValue, indicators, period } = action.payload;
  const cdiFinalValue = calculateCompoundInterestRate({
    initialValue: initialValue,
    financialIndicator: indicators.cdi.value,
    period: period,
    percentage: indicators.cdi.percentage
  })

  return {
    initialValue: action.payload.initialValue,
    finalValue: cdiFinalValue,
    period: period,
    result: calculateResult(initialValue, cdiFinalValue).grossResult,
    percentage: indicators.cdi.percentage
  };
}

export function calculateSelic(action: CalculatorAction): Calculation {
  const { initialValue, indicators, period } = action.payload;
  const selicFinalValue = calculateCompoundInterestRate({
    initialValue: initialValue,
    financialIndicator: indicators.selic.value,
    period: period,
    percentage: indicators.selic.percentage
  })

  return {
    initialValue: action.payload.initialValue,
    finalValue: selicFinalValue,
    period: period,
    result: calculateResult(initialValue, selicFinalValue).grossResult,
    percentage: indicators.selic.percentage
  }
}

