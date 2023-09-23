export function calculateIndicatorByDay(indicatorByYear: number) {
  const dailyRate = indicatorByYear / 365;

  return dailyRate;
}

export function calculateIndicatorByMonth(indicatorByYear: number) {
  const dailyRate = indicatorByYear / 12;

  return dailyRate;
}
