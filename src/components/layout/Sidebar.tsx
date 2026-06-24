"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  ClipboardCheck,
  FileSpreadsheet,
  Gauge,
  LayoutDashboard,
  Settings,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems: Array<{ label: string; href: Route; icon: typeof LayoutDashboard }> = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Master OPD", href: "/opd", icon: Building2 },
  { label: "Program", href: "/program", icon: BarChart3 },
  { label: "Indikator Kinerja", href: "/indikator", icon: Gauge },
  { label: "Input Realisasi", href: "/input-realisasi", icon: FileSpreadsheet },
  { label: "Validasi Data", href: "/validasi", icon: ClipboardCheck },
  { label: "Laporan", href: "/laporan", icon: FileSpreadsheet },
  { label: "Pengaturan", href: "/pengaturan", icon: Settings },
];

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

export function Sidebar({ mobile = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "glass-panel flex h-full w-full flex-col rounded-[30px] border border-white/70 p-5 shadow-[var(--shadow-panel)]",
        mobile ? "rounded-none border-0 bg-[color:var(--color-primary)] text-white shadow-none" : "",
      )}
    >
      <div className="mb-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={cn("flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[color:var(--color-muted)] p-1.5", mobile && "bg-white/12")}>
            <Image
              src="/branding/logo.jpg"
              alt="spectra logo"
              width={48}
              height={48}
              className="h-full w-full rounded-xl object-cover"
              priority
            />
          </div>
          <div>
            <p className={cn("text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-secondary)]", mobile && "text-emerald-200")}>
              spectra
            </p>
            <h1 className={cn("mt-2 font-[family-name:var(--font-ibm-plex-sans)] text-2xl font-semibold text-[color:var(--color-foreground)]", mobile && "text-white")}>
              Dashboard
            </h1>
          </div>
        </div>
        {mobile ? (
          <button
            className="rounded-xl border border-white/15 p-2 text-white"
            type="button"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                mobile
                  ? "text-slate-100 hover:bg-white/10"
                  : "text-[color:var(--color-muted-foreground)] hover:bg-white/80 hover:text-[color:var(--color-foreground)]",
                active &&
                  (mobile
                    ? "bg-white/14 text-white"
                    : "bg-[color:var(--color-primary)] text-white shadow-lg shadow-[color:var(--color-primary)]/15"),
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div
        className={cn(
          "mt-6 rounded-[24px] bg-[color:var(--color-primary)]/6 p-4",
          mobile && "bg-white/10",
        )}
      >
        <p className={cn("text-sm font-semibold text-[color:var(--color-foreground)]", mobile && "text-white")}>
          Snapshot Mingguan
        </p>
        <p className={cn("mt-2 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]", mobile && "text-slate-200")}>
          Monitoring program prioritas ekonomi daerah dengan validasi lintas OPD dan insight real time.
        </p>
      </div>
    </aside>
  );
}
