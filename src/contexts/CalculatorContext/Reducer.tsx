export enum ActionTypes {
  CDI = "cdi"
}

export type CalculatorAction = { type: ActionTypes, payload: { initialValue: number, months: number } }

export type CalculatorState = {
  finalValue: number | null;
}

export function reducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case ActionTypes.CDI:
      console.log("🚀 ~ reducer ~ action.payload:", action.payload)
      return { ...state, finalValue: 0 };
    default: return state;
  }
}