/* eslint-disable no-case-declarations */
import { PeriodKeys } from '@/contexts/PeriodContext/Reducer';
import { calculateCdi, calculateSelic } from './reducerHelper';
import { IndicatorsDatesType } from '@/contexts/FinancialIndicatorsContext/Context';

type Indicators = 'cdi' | 'selic';

export type ActionTypes = Indicators | 'all' | 'cleanLogs';

type Payload = {
  initialValue: number;
  period: number;
  timeUnit: PeriodKeys;
  indicators: {
    cdi: {
      unitValues: IndicatorsDatesType;
      percentage: number;
    };
    selic: {
      unitValues: IndicatorsDatesType;
      percentage: number;
    };
  };
};

export type Calculation = {
  finalValue: number;
  initialValue: number;
  period: number;
  result: number;
  percentage: number;
};

export type ResultLog = Calculation & { type: string };

export type CalculationResultState = { cdi: Calculation; selic: Calculation; logs: ResultLog[] };

export type CalculatorAction = { type: ActionTypes; payload: Payload };

export function reducer(
  state: CalculationResultState,
  action: CalculatorAction,
): CalculationResultState {
  let logs: ResultLog[] = [];

  switch (action.type) {
    case 'cdi':
      const cdiResult: Calculation = calculateCdi(action);
      logs = [{ ...cdiResult, type: 'cdi' }, ...state.logs];

      return { ...state, cdi: cdiResult, logs };
    case 'selic':
      const selicResult: Calculation = calculateSelic(action);
      logs = [{ ...selicResult, type: 'selic' }, ...state.logs];

      return { ...state, selic: selicResult, logs };
    case 'all':
      const allResults: Record<Indicators, Calculation> = {
        cdi: calculateCdi(action),
        selic: calculateSelic(action),
      };
      logs = [
        { ...allResults.cdi, type: 'cdi' },
        { ...allResults.selic, type: 'selic' },
        ...state.logs,
      ];

      return { ...allResults, logs };
    case 'cleanLogs':
      return { ...state, logs: [] };
    default:
      return state;
  }
}
