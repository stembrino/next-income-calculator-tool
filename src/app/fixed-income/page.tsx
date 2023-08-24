import { CalculatorArea } from './_components/Stateful/ResultArea'
import { FinancialIndicatorsProvider } from '@/contexts/FinancialIndicatorsContext/Provider'
import { FormArea } from './_components/Stateful/FormArea'
import { CalculatorProvider } from '@/contexts/CalculatorContext/Provider'

export default function FixedIncome() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <FinancialIndicatorsProvider>
        <CalculatorProvider>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr,1fr] w-full gap-8 box-border px-4 py-6 items-start'>
            <FormArea />
            <CalculatorArea />
          </div>
        </CalculatorProvider>
      </FinancialIndicatorsProvider>
    </main>
  )
}
