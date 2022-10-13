import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-brand-lilac-300 hover:bg-brand-lilac-500 transition-colors font-semibold text-brand-white rounded-md text-sm focus:ring-2 ring-brand-white",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
