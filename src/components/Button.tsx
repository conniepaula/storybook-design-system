import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-brand-lilac-300 hover:bg-brand-lilac-500 transition-colors font-semibold text-brand-white rounded-md text-sm focus:ring-2 ring-brand-white"
      )}
    >
      {children}
    </Comp>
  );
}
