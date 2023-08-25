import { calculateCdi, calculateSelic } from "./reducerHelper";

type Indicators = "cdi" | "selic";

type ActionTypes = Indicators | "all";

export type CalculationResultState = Record<Indicators, { finalValue: number, initialValue: number, period: number, result: number }>

type Payload = { initialValue: number, period: number, financialIndicators: { cdi?: number, selic?: number } }

export type CalculatorAction = { type: ActionTypes, payload: Payload }

export function reducer(state: CalculationResultState, action: CalculatorAction): CalculationResultState {
  switch (action.type) {
    case "cdi":
      return { ...state, cdi: calculateCdi(action) }
    case "selic":
      return { ...state, selic: calculateSelic(action) }
    case "all":
      return {
        cdi: calculateCdi(action),
        selic: calculateSelic(action)
      }
    default: return state;
  }
}