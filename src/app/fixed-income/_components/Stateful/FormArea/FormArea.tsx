import React, { FC } from 'react';
import FormAreaLayout from './FormAreaLayout/FormAreaLayout';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import PercentageGroupLayout from '../../Stateless/Inputs/PercentageInput/PercentageGroupLayout/PercentageGroupLayout';
import PercentageInput from '../../Stateless/Inputs/PercentageInput/PercentageInput';
import CurrencyInput from '../../Stateless/Inputs/CurrencyInput/CurrencyInput';
import { useFormArea } from './hooks/useFormArea';
import Footer from './Footer/Footer';
import MonthInput from '../../Stateless/Inputs/MonthInput/MonthInput';
import { usePeriod } from '@/contexts/PeriodContext/usePeriod';

const FormArea: FC = () => {
  const { formStates, handleOnChange, handleOnClickCDI, handleOnClickSelic, handleSubmit } =
    useFormArea();
  const { period } = usePeriod();

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FormAreaLayout>
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-20 items-center">
            <CurrencyInput
              id="selic"
              name="initialValue"
              icon={<LiaPiggyBankSolid size={35} />}
              label="Initial Value"
              onChange={handleOnChange}
              value={formStates.initialValue}
            />
            <MonthInput
              name="period"
              label={`Number of ${period.label}`}
              value={formStates.period}
              id="monthInput"
              onChange={handleOnChange}
            />
          </div>
          <PercentageGroupLayout>
            <PercentageInput
              name="cdiPercentage"
              label="CDI Percentage"
              value={formStates.cdiPercentage}
              id="cdiInput"
              onChange={handleOnChange}
            />
            <PercentageInput
              name="selicPercentage"
              label="Selic Percentage"
              value={formStates.selicPercentage}
              id="selicInput"
              onChange={handleOnChange}
            />
          </PercentageGroupLayout>
          <Footer onClickCDI={handleOnClickCDI} onClickSelic={handleOnClickSelic} />
        </FormAreaLayout>
      </form>
    </section>
  );
};

export default FormArea;
