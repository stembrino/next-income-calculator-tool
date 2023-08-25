import { calculateCompoundInterestRate } from "./financialCalculations";

type Indicators = "cdi" | "selic";

type ActionTypes = Indicators | "all";

export type CalculationResultState = Record<Indicators, { finalValue: number, initialValue: number, period: number }>

export type CalculatorAction = { type: ActionTypes, payload: { initialValue: number, period: number, financialIndicators: { cdi?: number, selic?: number } } }

export function reducer(state: CalculationResultState, action: CalculatorAction): CalculationResultState {
  switch (action.type) {
    case "cdi":
      return {
        ...state,
        cdi: {
          initialValue: action.payload.initialValue,
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.cdi,
            period: action.payload.period
          }),
          period: action.payload.period
        }
      };
    case "selic":
      return {
        ...state,
        selic: {
          initialValue: action.payload.initialValue,
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.selic,
            period: action.payload.period
          }),
          period: action.payload.period
        }
      };
    case "all":
      return {
        cdi: {
          initialValue: action.payload.initialValue,
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.cdi,
            period: action.payload.period
          }),
          period: action.payload.period
        },
        selic: {
          initialValue: action.payload.initialValue,
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.selic,
            period: action.payload.period
          }),
          period: action.payload.period

        }
      }
    default: return state;
  }
}