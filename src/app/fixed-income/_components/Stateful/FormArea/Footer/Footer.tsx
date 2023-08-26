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
    <div className='ml-auto flex gap-3 items-center'>
      <p>calculate to:</p>
      <div className='flex gap-4 flex-wrap'>
        <Button type='button' variant='outlined' disabled={isIndicatorsLoading} label='Selic' onClick={onClickSelic} />
        <Button type='button' variant='outlined' disabled={isIndicatorsLoading} label='CDI' onClick={onClickCDI} />
        <Button type='submit' variant='outlined' disabled={isIndicatorsLoading} label='All' />
      </div>
    </div>
  );
};

export default Footer;