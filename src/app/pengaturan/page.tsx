import { BellDot, ShieldCheck, SlidersHorizontal } from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const settingsCards = [
  {
    title: "Notifikasi Monitoring",
    description:
      "Atur pengingat pelaporan mingguan, notifikasi status warning, dan ringkasan progres untuk pimpinan.",
    icon: BellDot,
  },
  {
    title: "Hak Akses Pengguna",
    description:
      "Simulasikan pengaturan peran admin BP4D, operator OPD, serta reviewer validasi data.",
    icon: ShieldCheck,
  },
  {
    title: "Preferensi Dashboard",
    description:
      "Atur widget prioritas, tampilan kartu statistik, dan filter default pada setiap halaman.",
    icon: SlidersHorizontal,
  },
];

export default function PengaturanPage() {
  return (
    <DashboardLayout
      title="Pengaturan"
      description="Area dummy untuk preferensi aplikasi, kontrol notifikasi, dan pengelolaan akses pengguna."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        {settingsCards.map(({ title, description, icon: Icon }) => (
          <Card key={title}>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="rounded-[24px] bg-[color:var(--color-muted)]/70 p-4 text-sm leading-7 text-[color:var(--color-muted-foreground)]">
                Komponen ini disiapkan sebagai placeholder UI agar struktur aplikasi konsisten
                saat backend dan manajemen hak akses nanti ditambahkan.
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </DashboardLayout>
  );
}
