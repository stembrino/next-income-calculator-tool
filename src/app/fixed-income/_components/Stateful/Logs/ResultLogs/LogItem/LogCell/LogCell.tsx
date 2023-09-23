import React, { FC } from 'react';
import { tv } from 'tailwind-variants';

type LogCellProps = {
  label: string;
  value: string | number;
  variant?: 'border' | 'borderless';
  text?: 'shift';
};

const variants = tv({
  variants: {
    variant: {
      border: 'md:border-r md:border-gray-400',
      borderless: '',
    },
    text: {
      shift: 'uppercase font-bold',
    },
  },
});

const LogCell: FC<LogCellProps> = ({ label, value, variant = 'borderless', text }) => {
  return (
    <div className={`text-sm px-4 flex gap-2 md:flex-col md:gap-0 ${variants({ variant })}`}>
      <div className={`${variants({ text })}`}>{label}</div>
      <div>{value}</div>
    </div>
  );
};

export default LogCell;
