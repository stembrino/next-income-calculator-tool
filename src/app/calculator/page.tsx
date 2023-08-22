import { CalculatorArea } from '@/app/calculator/_components/ResultArea'
import { FinancialIndicatorsProvider } from '@/contexts/FinancialIndicatorsContext'
import { FormArea } from './_components/FormArea'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* <FinancialIndicatorsProvider> */}
      <div className='flex flex-col md:flex-row w-full gap-5 box-border px-4 py-6 items-start'>
        <FormArea />
        <CalculatorArea />
      </div>
      {/* </FinancialIndicatorsProvider> */}
    </main>
  )
}
