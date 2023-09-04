import { useContext } from "react"
import { PeriodContext } from "./Context"

export const usePeriod = () => {
  const context = useContext(PeriodContext);
  if (!context) {
    throw new Error('usePeriod must be used within a PeriodProvider');
  }

  return context;
}