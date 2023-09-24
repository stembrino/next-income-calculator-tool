import { calculateCompoundInterestRate } from './financialCalculations';
import { CalculatePayload, Calculation, CalculatorAction } from './Reducer';

function calculateResult(initialValue: number, finalValue: number) {
  const grossResult = finalValue - initialValue;

  return { grossResult: grossResult };
}

export function calculateCdi(action: CalculatorAction): Calculation {
  const { initialValue, indicators, period, timeUnit } = action.payload as CalculatePayload;
  const cdiFinalValue = calculateCompoundInterestRate(timeUnit, {
    initialValue: initialValue,
    unitValues: indicators.cdi.unitValues,
    period: period,
    percentage: indicators.cdi.percentage,
  });

  return {
    initialValue: action.payload!.initialValue,
    finalValue: cdiFinalValue,
    period: period,
    result: calculateResult(initialValue, cdiFinalValue).grossResult,
    percentage: indicators.cdi.percentage,
  };
}

export function calculateSelic(action: CalculatorAction): Calculation {
  const { initialValue, indicators, period, timeUnit } = action.payload as CalculatePayload;
  const selicFinalValue = calculateCompoundInterestRate(timeUnit, {
    initialValue: initialValue,
    unitValues: indicators.selic.unitValues,
    period: period,
    percentage: indicators.selic.percentage,
  });

  return {
    initialValue: action.payload!.initialValue,
    finalValue: selicFinalValue,
    period: period,
    result: calculateResult(initialValue, selicFinalValue).grossResult,
    percentage: indicators.selic.percentage,
  };
}
