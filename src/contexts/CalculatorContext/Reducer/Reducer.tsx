import { calculateCdi, calculateSelic } from "./reducerHelper";

type Indicators = "cdi" | "selic";

type ActionTypes = Indicators | "all";

export type Calculation = { finalValue: number, initialValue: number, period: number, result: number }

export type CalculationResult = Record<Indicators, Calculation>;

export type CalculationResultState = CalculationResult & { logs: CalculationResult[] }

type Payload = { initialValue: number, period: number, financialIndicators: { cdi?: number, selic?: number } }

export type CalculatorAction = { type: ActionTypes, payload: Payload }


export function reducer(state: CalculationResultState, action: CalculatorAction): CalculationResultState {
  let newResult: CalculationResult | null = null;
  let logs: CalculationResult[] | null = null;

  switch (action.type) {
    case "cdi":
      newResult = { ...state, cdi: calculateCdi(action) };
      logs = [...state.logs, newResult]

      return { ...state, ...newResult, logs }
    case "selic":
      newResult = { ...state, selic: calculateSelic(action) };
      logs = [...state.logs, newResult]

      return { ...state, ...newResult, logs }
    case "all":
      newResult = {
        cdi: calculateCdi(action),
        selic: calculateSelic(action)
      }
      logs = [...state.logs, newResult]

      return { ...newResult, logs }
    default: return state;
  }
}