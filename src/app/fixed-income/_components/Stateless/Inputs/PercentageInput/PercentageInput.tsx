import React, { FC, useRef } from 'react';
import { FaPercent } from 'react-icons/fa';

type PercentageInputProps = {
  id: string;
  label: string;
  value: number;
  name: string;
  onChange: ({ name, value }: { name: string; value: number }) => void;
};

const PercentageInput: FC<PercentageInputProps> = ({ id, name, value, label, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () => {
    if (!inputRef.current) return;

    onChange({ name, value: Number(inputRef.current.value) });
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold text-sm underline">
        {label}
      </label>
      <div className=" flex gap-1 items-center w-min">
        <input
          className="border-2 text-lg border-gray-300 px-2 py-2 rounded-lg w-20"
          min={1}
          max={999}
          ref={inputRef}
          onChange={handleOnChange}
          value={value}
          type="number"
        />
        <FaPercent />
      </div>
    </div>
  );
};

export default PercentageInput;
