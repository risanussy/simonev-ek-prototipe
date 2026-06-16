import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]/30 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--color-primary)] text-white shadow-lg shadow-[color:var(--color-primary)]/15 hover:-translate-y-0.5 hover:bg-[color:var(--color-primary)]/92",
        secondary:
          "bg-[color:var(--color-secondary)] text-white shadow-lg shadow-[color:var(--color-secondary)]/15 hover:-translate-y-0.5 hover:bg-[color:var(--color-secondary)]/92",
        outline:
          "border border-[color:var(--color-border)] bg-white/80 text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]",
        ghost:
          "text-[color:var(--color-muted-foreground)] hover:bg-white/70 hover:text-[color:var(--color-foreground)]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-12 px-6 text-sm",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
