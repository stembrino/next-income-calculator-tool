import React, { FC, ReactNode } from 'react';
import CurrencyInputLib from 'react-currency-input-field';


type InputProps = {
  id: string;
  value: number;
  label: string;
  icon?: ReactNode;
  onChange: (value: string, name?: string) => void;
}

const CurrencyInput: FC<InputProps> = ({ id, value, label, icon, onChange }) => {
  const handleOnChange = (value?: string) => {
    if (!value) return;
    onChange(value);
  }

  return (
    <div className='flex flex-col gap-2 border-b-2 border-gray-300 w-full'>
      <label htmlFor={id} className='font-semibold text-sm'>{label}</label>
      <div className='flex items-center'>
        {icon}
        <CurrencyInputLib
          intlConfig={{ locale: 'pt-Br', currency: 'BRL' }}
          id={id}
          value={value}
          className='w-full px-3'
          placeholder="Please enter a number"
          decimalsLimit={4}
          onValueChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default CurrencyInput;