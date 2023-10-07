import { FormArea } from './_components/Stateful/FormArea';
import { CalculatorProvider } from '@/contexts/CalculatorContext/Provider';
import Logs from './_components/Stateful/Logs/Logs';
import { FinancialAnalyzerProvider } from '@/contexts/FinancialAnalyzer/Provider';

export default function FixedIncome() {
  return (
    <main>
      <CalculatorProvider>
        <FinancialAnalyzerProvider>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] w-full gap-8 box-border px-4 py-6 items-start">
            <div className="flex flex-col gap-5">
              <FormArea />
            </div>
            <Logs />
          </div>
        </FinancialAnalyzerProvider>
      </CalculatorProvider>
    </main>
  );
}
