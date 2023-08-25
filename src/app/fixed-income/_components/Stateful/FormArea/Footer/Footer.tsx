import React, { FC } from 'react';
import Button from '../../../Stateless/Button/Button';
import { useFinancialIndicators } from '@/contexts/FinancialIndicatorsContext/useFinancialIndicators';
import { useFormArea } from '../hooks/useFormArea';

type FooterProps = {
  onClickCDI: () => void;
  onClickSelic: () => void;
}

const Footer: FC<FooterProps> = ({ onClickCDI, onClickSelic }) => {
  const { isIndicatorsLoading } = useFinancialIndicators();

  return (
    <div>
      <div className='ml-auto flex gap-4 items-center'>
        <p>calculate:</p>
        <Button type='button' disabled={isIndicatorsLoading} label='Selic' onClick={onClickSelic} />
        <Button type='button' disabled={isIndicatorsLoading} label='CDI' onClick={onClickCDI} />
        <Button type='submit' disabled={isIndicatorsLoading} label='All' />
      </div>
    </div>
  );
};

export default Footer;