import React, { FC } from 'react';
import { Tailwindest } from 'tailwindest';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} aria-disabled={disabled} disabled={disabled} className="px-6 disabled:bg-gray-300  py-2 bg-sky-700 hover:bg-sky-600 active:bg-sky-800 text-base rounded-full text-white">
      {label}
    </button >
  );
};

export default Button;