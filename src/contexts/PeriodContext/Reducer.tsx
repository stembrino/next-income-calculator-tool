import { PeriodState } from "./Context";

type PeriodKeys = "a.m." | "a.d." | "a.a.";

export type PeriodAction = { type: PeriodKeys };


export function reducer(state: PeriodState, action: PeriodAction): PeriodState {
  switch (action.type) {
    case "a.d.":
      return { key: "a.d.", label: "day" }
    case "a.m.":
      return { key: "a.m.", label: "month" }
    case "a.a.":
      return { key: "a.a.", label: "year" }
    default:
      return { ...state }
  }
}