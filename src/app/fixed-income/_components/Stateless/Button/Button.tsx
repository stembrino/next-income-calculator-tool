import React, { FC } from 'react';
import { Tailwindest } from 'tailwindest';

type ButtonProps = {
  label: string;
  width?: Tailwindest["width"];
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, width, onClick, disabled }) => {
  return (
    <button onClick={onClick} aria-disabled={disabled} disabled={disabled} className={`px-3 disabled:bg-gray-300  py-2 ${width} bg-sky-700 hover:bg-sky-600 active:bg-sky-800 text-sm rounded-full text-white`}>
      {label}
    </button >
  );
};

export default Button;