import { CalculatorArea } from '@/app/calculator/_components/CalculatorArea'
import { FinancialIndicatorsProvider } from '@/contexts/FinancialIndicatorsContext'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <FinancialIndicatorsProvider>
        <CalculatorArea />
      </FinancialIndicatorsProvider>
    </main>
  )
}
