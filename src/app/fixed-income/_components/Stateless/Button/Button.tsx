import React, { FC } from 'react';
import { Tailwindest } from 'tailwindest';
import { tv } from 'tailwind-variants';


type ButtonProps = {
  type?: "button" | "submit";
  label: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outlined" | "outlined-white";
  size?: "small" | "medium";
  onClick?: () => void;
}

const variants = tv({
  base: "rounded-full disabled:bg-gray-100 disabled:cursor-not-allowed",
  variants: {
    variant: {
      primary: "bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-900 text-white",
      secondary: "bg-sky-700 hover:bg-sky-600 active:bg-sky-800 text-white",
      outlined: "bg-transparent border border-zinc-700 text-black hover:outline-1 hover:outline active:outline-2",
      "outlined-white": "bg-transparent border border-white text-white hover:outline-1 hover:outline active:outline-2"
    },
    size: {
      small: "text-xs py-1 px-2 sm:text-sm sm:px-3 sm:py-1",
      medium: "text-base px-2 sm:px-6 sm:py-2 "
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

const Button: FC<ButtonProps> = ({
  label,
  type = "submit",
  disabled,
  variant = "secondary",
  size = "medium",
  onClick,
}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      aria-disabled={disabled} disabled={disabled}
      className={`${variants({ variant, size })}`}
    >
      {label}
    </button >
  );
};

export default Button;