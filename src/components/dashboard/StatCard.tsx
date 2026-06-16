import {
  Activity,
  ArrowUpRight,
  BadgeAlert,
  BriefcaseBusiness,
  Building2,
  CircleGauge,
  CircleOff,
  ShieldCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  helper: string;
}

const cardThemes = {
  "Total Program": {
    icon: BriefcaseBusiness,
    accent: "from-[#123a68] to-[#2d6aa8]",
    ring: "bg-[#123a68]/12 text-[#123a68]",
  },
  "Total Kegiatan": {
    icon: Activity,
    accent: "from-[#16805d] to-[#25a17a]",
    ring: "bg-[#16805d]/12 text-[#16805d]",
  },
  "Total OPD": {
    icon: Building2,
    accent: "from-[#26538d] to-[#46a0b8]",
    ring: "bg-[#26538d]/12 text-[#26538d]",
  },
  "Rata-rata Progres Fisik": {
    icon: CircleGauge,
    accent: "from-[#16805d] to-[#123a68]",
    ring: "bg-[#16805d]/12 text-[#16805d]",
  },
  "Rata-rata Realisasi Anggaran": {
    icon: ArrowUpRight,
    accent: "from-[#123a68] to-[#16805d]",
    ring: "bg-[#123a68]/12 text-[#123a68]",
  },
  "Indikator Tercapai": {
    icon: ShieldCheck,
    accent: "from-[#16805d] to-[#36b991]",
    ring: "bg-[#16805d]/12 text-[#16805d]",
  },
  "Indikator Warning": {
    icon: BadgeAlert,
    accent: "from-[#d59d19] to-[#f1c54d]",
    ring: "bg-[#d59d19]/12 text-[#ad7700]",
  },
  "Indikator Kritis": {
    icon: CircleOff,
    accent: "from-[#cc4f4f] to-[#e77a7a]",
    ring: "bg-[#cc4f4f]/12 text-[#b83d3d]",
  },
} as const;

export function StatCard({ title, value, helper }: StatCardProps) {
  const theme = cardThemes[title as keyof typeof cardThemes] ?? cardThemes["Total Program"];
  const Icon = theme.icon;

  return (
    <Card className="spotlight-card overflow-hidden border-white/80 bg-white/88">
      <CardContent className="p-0">
        <div className={cn("h-1.5 w-full bg-gradient-to-r", theme.accent)} />
        <div className="p-5">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted-foreground)]">
                Insight
              </div>
              <p className="mt-4 text-sm text-[color:var(--color-muted-foreground)]">{title}</p>
            </div>
            <div className={cn("rounded-2xl p-3", theme.ring)}>
              <Icon className="h-5 w-5" />
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-3xl font-bold text-[color:var(--color-foreground)]">{value}</p>
              <p className="mt-2 max-w-[17rem] text-sm leading-6 text-[color:var(--color-muted-foreground)]">
                {helper}
              </p>
            </div>
            <div className="hidden rounded-2xl border border-white/70 bg-slate-50/80 px-3 py-2 text-right md:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-muted-foreground)]">
                Status
              </p>
              <p className="mt-1 text-sm font-semibold text-[color:var(--color-foreground)]">
                Stabil
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className={cn("h-full rounded-full bg-gradient-to-r", theme.accent, "w-[72%]")} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-muted-foreground)]">
              live
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
