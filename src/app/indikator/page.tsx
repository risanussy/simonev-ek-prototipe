import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { indicatorList } from "@/data/dummy";

export default function IndikatorPage() {
  return (
    <DashboardLayout
      title="Indikator Kinerja"
      description="Pantau indikator kinerja utama program ekonomi dengan baseline, target tahunan, realisasi, dan status capaian terkini."
    >
      <Card>
        <CardHeader>
          <CardTitle>Daftar Indikator</CardTitle>
          <CardDescription>
            Capaian indikator strategis lintas OPD untuk monitoring tahun 2026.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Indikator</TableHead>
                <TableHead>Satuan</TableHead>
                <TableHead>Baseline</TableHead>
                <TableHead>Target 2026</TableHead>
                <TableHead>Realisasi 2026</TableHead>
                <TableHead>Capaian %</TableHead>
                <TableHead>OPD Pengampu</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {indicatorList.map((indicator) => (
                <TableRow key={indicator.name}>
                  <TableCell className="min-w-[260px] font-medium">{indicator.name}</TableCell>
                  <TableCell>{indicator.unit}</TableCell>
                  <TableCell>{indicator.baseline}</TableCell>
                  <TableCell>{indicator.target}</TableCell>
                  <TableCell>{indicator.realization}</TableCell>
                  <TableCell className="min-w-[180px]">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{indicator.achievement}%</span>
                        <span className="text-[color:var(--color-muted-foreground)]">Capaian</span>
                      </div>
                      <Progress value={indicator.achievement} />
                    </div>
                  </TableCell>
                  <TableCell className="min-w-[240px]">{indicator.opd}</TableCell>
                  <TableCell>
                    <StatusBadge status={indicator.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
