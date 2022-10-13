import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface HeaderProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Header({
  size = "md",
  children,
  asChild,
  className,
}: HeaderProps) {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      className={clsx(
        "text-brand-white font-bold font-sans",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
