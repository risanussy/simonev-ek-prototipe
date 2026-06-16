import * as React from "react";

import { cn } from "@/lib/utils";

const Select = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-2xl border border-transparent bg-white/80 px-4 py-2 text-sm shadow-inner shadow-slate-100 outline-none transition focus:border-[color:var(--color-primary)]/25 focus:ring-4 focus:ring-[color:var(--color-primary)]/10",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);
Select.displayName = "Select";

export { Select };
