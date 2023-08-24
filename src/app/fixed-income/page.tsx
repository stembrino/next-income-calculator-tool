import { CalculatorArea } from './_components/Stateful/ResultArea'
import { FinancialIndicatorsProvider } from '@/contexts/FinancialIndicatorsContext'
import { FormArea } from './_components/Stateful/FormArea'

export default function FixedIncome() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* <FinancialIndicatorsProvider> */}
      <div className='grid grid-cols-1 lg:grid-cols-[1fr,1fr] w-full gap-5 box-border px-4 py-6 items-start'>
        <FormArea />
        <CalculatorArea />
      </div>
      {/* </FinancialIndicatorsProvider> */}
    </main>
  )
}
