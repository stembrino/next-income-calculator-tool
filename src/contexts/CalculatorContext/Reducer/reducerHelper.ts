import { calculateCompoundInterestRate } from "../financialCalculations";
import { Calculation, CalculatorAction } from "./Reducer";

export function calculateCdi(action: CalculatorAction): Calculation {
  const { initialValue, financialIndicators, period } = action.payload;
  const cdiFinalValue = calculateCompoundInterestRate({
    initialValue: initialValue,
    financialIndicator: financialIndicators.cdi,
    period: period
  })

  return {
    initialValue: action.payload.initialValue,
    finalValue: cdiFinalValue,
    period: period,
    result: cdiFinalValue - initialValue
  };
}

export function calculateSelic(action: CalculatorAction) {
  const { initialValue, financialIndicators, period } = action.payload;
  const selicFinalValue = calculateCompoundInterestRate({
    initialValue: initialValue,
    financialIndicator: financialIndicators.selic,
    period: period
  })

  return {
    initialValue: action.payload.initialValue,
    finalValue: selicFinalValue,
    period: period,
    result: selicFinalValue - initialValue
  }
}

