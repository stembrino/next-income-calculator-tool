import React, { FC } from 'react';
import { tv } from 'tailwind-variants';

type LogCellProps = {
  label: string;
  value: string | number;
  variant?: "border" | "borderless";
}

const variants = tv({
  variants: {
    variant: {
      border: "md:border-r md:border-gray-400",
      borderless: "",
    },
  },
})

const LogCell: FC<LogCellProps> = ({ label, value, variant = "borderless" }) => {
  return (
    <div className={`text-sm px-4 flex gap-2 md:flex-col md:gap-0 ${variants({ variant })}`}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

export default LogCell;