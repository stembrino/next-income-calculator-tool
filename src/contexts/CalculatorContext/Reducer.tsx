import { calculateCompoundInterestRate } from "./financialCalculations";

type Indicators = "cdi" | "selic";

type ActionTypes = Indicators | "all";

export type CalculatorAction = { type: ActionTypes, payload: { initialValue: number, months: number, financialIndicators: { cdi?: number, selic?: number } } }

export type CalculationResultState = { initialValue?: number } & Record<Indicators, { finalValue: number | null }>

export function reducer(state: CalculationResultState, action: CalculatorAction): CalculationResultState {
  switch (action.type) {
    case "cdi":
      return {
        ...state,
        initialValue: action.payload.initialValue,
        cdi: {
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.cdi,
            months: action.payload.months
          })
        }
      };
    case "selic":
      return {
        ...state,
        initialValue: action.payload.initialValue,
        selic: {
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.selic,
            months: action.payload.months
          })
        }
      };
    case "all":
      return {
        initialValue: action.payload.initialValue,
        cdi: {
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.cdi,
            months: action.payload.months
          })
        },
        selic: {
          finalValue: calculateCompoundInterestRate({
            initialValue: action.payload.initialValue,
            financialIndicator: action.payload.financialIndicators.selic,
            months: action.payload.months
          })
        }
      }
    default: return state;
  }
}