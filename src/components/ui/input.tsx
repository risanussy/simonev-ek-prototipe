import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-2xl border border-transparent bg-white/80 px-4 py-2 text-sm shadow-inner shadow-slate-100 outline-none transition placeholder:text-[color:var(--color-muted-foreground)] focus:border-[color:var(--color-primary)]/25 focus:ring-4 focus:ring-[color:var(--color-primary)]/10",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
