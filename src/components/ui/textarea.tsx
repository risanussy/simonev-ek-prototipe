import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-2xl border border-transparent bg-white/80 px-4 py-3 text-sm shadow-inner shadow-slate-100 outline-none transition placeholder:text-[color:var(--color-muted-foreground)] focus:border-[color:var(--color-primary)]/25 focus:ring-4 focus:ring-[color:var(--color-primary)]/10",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
