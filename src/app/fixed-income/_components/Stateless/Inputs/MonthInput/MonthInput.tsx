import React, { FC, useRef } from 'react';
import { BsCalendar } from 'react-icons/bs';

type MonthInputProps = {
  id: string;
  label: string;
  name: string;
  value: number;
  onChange: ({ name, value }: { value: number; name: string }) => void;
};

const MonthInput: FC<MonthInputProps> = ({ id, value, label, name, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () => {
    if (!inputRef.current) return;

    onChange({ name: name, value: Number(inputRef.current.value) });
  };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold text-sm whitespace-nowrap">
        {label}
      </label>
      <div className=" flex gap-1 items-center w-min">
        <BsCalendar size="20" />
        <input
          name={name}
          className="border-b-2 text-lg border-gray-300 px-2 w-20"
          min={1}
          max={999}
          ref={inputRef}
          onChange={handleOnChange}
          value={value}
          type="number"
        />
      </div>
    </div>
  );
};

export default MonthInput;
