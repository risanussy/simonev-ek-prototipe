"use client";

import { useState } from "react";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

interface DashboardLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function DashboardLayout({
  title,
  description,
  children,
}: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-[1600px] gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-50 bg-slate-950/45 lg:hidden">
            <div className="h-full max-w-[320px]">
              <Sidebar mobile onClose={() => setMobileOpen(false)} />
            </div>
          </div>
        ) : null}

        <main className="space-y-6 overflow-hidden">
          <Topbar
            title={title}
            description={description}
            onMenuClick={() => setMobileOpen(true)}
          />
          <div className="page-shell space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
