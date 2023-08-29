import { calculateCdi, calculateSelic } from "./reducerHelper";

type Indicators = "cdi" | "selic"

export type ActionTypes = Indicators | "all" | "cleanLogs";

type Payload = {
  initialValue: number,
  period: number,
  indicators: {
    cdi: {
      value: number,
      percentage: number
    },
    selic: {
      value: number,
      percentage: number
    }
  }
}

export type Calculation = { finalValue: number, initialValue: number, period: number, result: number, percentage: number }

export type ResultLog = Calculation & { type: string }

export type CalculationResultState = { cdi: Calculation, selic: Calculation, logs: ResultLog[] }

export type CalculatorAction = { type: ActionTypes, payload: Payload }



export function reducer(state: CalculationResultState, action: CalculatorAction): CalculationResultState {
  let newResult: any = null;
  let logs: ResultLog[] = [];

  switch (action.type) {
    case "cdi":
      newResult = calculateCdi(action);
      logs = [{ ...newResult, type: "cdi" }, ...state.logs]

      return { ...state, cdi: newResult, logs }
    case "selic":
      newResult = calculateSelic(action);
      logs = [{ ...newResult, type: "selic" }, ...state.logs as any[]]

      return { ...state, selic: newResult, logs }
    case "all":
      newResult = {
        cdi: calculateCdi(action),
        selic: calculateSelic(action)
      }
      logs = [
        { ...newResult.cdi, type: "cdi" },
        { ...newResult.selic, type: "selic" },
        ...state.logs
      ]

      return { ...newResult, logs }
    case "cleanLogs":

      return { ...state, logs: [] }
    default: return state;
  }
}