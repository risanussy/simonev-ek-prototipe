import { AlertTriangle, CircleCheckBig, FolderKanban, OctagonAlert } from "lucide-react";

import {
  BudgetBarChart,
  ProgressLineChart,
  StatusPieChart,
} from "@/components/dashboard/Charts";
import { StatCard } from "@/components/dashboard/StatCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dashboardHighlights, dashboardStats, formatCurrency, programList } from "@/data/dummy";

export default function DashboardPage() {
  return (
    <DashboardLayout
      title="Dashboard Utama"
      description="Ikhtisar perkembangan program ekonomi daerah, status indikator utama, dan pelaporan lintas OPD dalam satu tampilan yang ringkas."
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Realisasi Anggaran per OPD</CardTitle>
            <CardDescription>
              Gambaran persentase realisasi anggaran lintas perangkat daerah.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BudgetBarChart />
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Status Program</CardTitle>
              <CardDescription>Distribusi status pelaksanaan program tahun 2026.</CardDescription>
            </CardHeader>
            <CardContent>
              <StatusPieChart />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Progres Program per Bulan</CardTitle>
            <CardDescription>
              Tren kumulatif pelaporan progres fisik dari Januari sampai Agustus.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProgressLineChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Highlight Pengendalian</CardTitle>
            <CardDescription>
              Titik fokus monitoring untuk rapat koordinasi mingguan.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardHighlights.map((item, index) => {
              const icons = [FolderKanban, AlertTriangle, OctagonAlert];
              const Icon = icons[index] ?? CircleCheckBig;

              return (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/60 bg-white/60 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[color:var(--color-muted-foreground)]">{item.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-[color:var(--color-foreground)]">
                        {item.value}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[color:var(--color-primary)]/10 p-3 text-[color:var(--color-primary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted-foreground)]">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Program</CardTitle>
          <CardDescription>
            Program prioritas ekonomi yang paling sering dipantau oleh BP4D.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Program</TableHead>
                <TableHead>OPD Pengampu</TableHead>
                <TableHead>Progres Fisik</TableHead>
                <TableHead>Realisasi Anggaran</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Update Terakhir</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programList.map((program) => (
                <TableRow key={program.code}>
                  <TableCell className="min-w-[240px] font-medium">{program.name}</TableCell>
                  <TableCell className="min-w-[220px]">{program.opd}</TableCell>
                  <TableCell>{program.physicalProgress}%</TableCell>
                  <TableCell>{formatCurrency(program.realizedBudget)}</TableCell>
                  <TableCell>
                    <StatusBadge status={program.status} />
                  </TableCell>
                  <TableCell>{program.updatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
