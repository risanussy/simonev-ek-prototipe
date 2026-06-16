import { Bell, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Topbar({
  title,
  description,
  onMenuClick,
}: {
  title: string;
  description: string;
  onMenuClick?: () => void;
}) {
  return (
    <header className="page-shell flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex items-start gap-3">
        {onMenuClick ? (
          <Button
            variant="outline"
            size="icon"
            className="mt-1 lg:hidden"
            onClick={onMenuClick}
          >
            <span className="sr-only">Buka menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </div>
          </Button>
        ) : null}
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--color-secondary)]">
            Monitoring & evaluasi
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-ibm-plex-sans)] text-3xl font-semibold text-[color:var(--color-foreground)]">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative min-w-[260px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-muted-foreground)]" />
          <Input className="pl-11" placeholder="Cari program, OPD, atau indikator..." />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="glass-panel flex items-center gap-3 rounded-2xl border border-white/60 px-4 py-2 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-primary)] text-sm font-semibold text-white">
              AB
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-foreground)]">Admin BP4D</p>
              <p className="text-xs text-[color:var(--color-muted-foreground)]">Kabupaten Subang</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
