import { FormArea } from './_components/Stateful/FormArea';
import { CalculatorProvider } from '@/contexts/CalculatorContext/Provider';
import Logs from './_components/Stateful/Logs/Logs';

export default function FixedIncome() {
  return (
    <main>
      <CalculatorProvider>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] w-full gap-8 box-border px-4 py-6 items-start">
          <div className="flex flex-col gap-5">
            <FormArea />
          </div>
          <Logs />
        </div>
      </CalculatorProvider>
    </main>
  );
}
