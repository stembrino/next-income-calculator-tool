import React, { FC, ReactNode, useRef } from 'react';

type InputProps = {
  id: string;
  value: number;
  label: string;
  name: string;
  icon?: ReactNode;
  onChange: ({ name, value }: { value: number; name: string }) => void;
};

const CurrencyInput: FC<InputProps> = ({ id, value, label, icon, name, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formatter = Intl.NumberFormat('pt-BR', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleOnChange = () => {
    if (!inputRef.current) return;
    const value = inputRef.current.value.replace(/\./g, '');
    const extractedNumbers = value.match(/\d+/g);
    const valueAsNumber = Number(extractedNumbers);
    onChange({ value: valueAsNumber, name });
  };

  return (
    <div className="flex flex-col gap-2 border-b-2 border-gray-300 w-full">
      <label htmlFor={id} className="font-semibold text-sm">
        {label}
      </label>
      <div className="flex items-center">
        <span>{icon}</span>
        <div className="flex relative w-full">
          <span className="absolute ps-1">R$</span>
          <input
            type="text"
            ref={inputRef}
            name={name}
            id={id}
            value={formatter.format(value)}
            className="w-full pe-3 ps-7"
            placeholder="Please enter a number"
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyInput;
