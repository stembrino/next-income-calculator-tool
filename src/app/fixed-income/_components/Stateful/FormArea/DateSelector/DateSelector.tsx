import React, { FC } from 'react';
import MonthInput from '../../../Stateless/Inputs/MonthInput/MonthInput';
import Button from '../../../Stateless/Button/Button';

type DateSelectorProps = {
  value: number;
  onSelectChange: ({ name, value }: { name: string, value: number }) => void;
}

const DateSelector: FC<DateSelectorProps> = ({ value, onSelectChange }) => {
  return (
    <div className='flex items-end gap-1'>
      <MonthInput name='period' label='Number of months' value={value} id='test' onChange={onSelectChange} />
      <div className='flex gap-2'>
        <Button variant='outlined' size='small' label='Day' />
        <Button variant='outlined' size='small' label='Month' />
        <Button variant='outlined' size='small' label='Month' />
      </div>
    </div>
  );
};

export default DateSelector;