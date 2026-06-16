import { Download, FileSpreadsheet, Filter } from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { opdList, reportItems } from "@/data/dummy";

export default function LaporanPage() {
  return (
    <DashboardLayout
      title="Laporan"
      description="Tampilan rekapitulasi program untuk kebutuhan monitoring pimpinan, rapat koordinasi, serta ekspor dokumen pelaporan."
    >
      <Card>
        <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <CardTitle>Filter Laporan</CardTitle>
            <CardDescription>
              Pengaturan dummy untuk menentukan laporan yang ingin diekspor.
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">
              <FileSpreadsheet className="h-4 w-4" />
              Export Excel
            </Button>
            <Button>
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="laporan-tahun">Tahun</Label>
            <Select id="laporan-tahun" defaultValue="2026">
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="laporan-opd">OPD</Label>
            <Select id="laporan-opd" defaultValue="all">
              <option value="all">Semua OPD</option>
              {opdList.map((opd) => (
                <option key={opd.id} value={opd.id}>
                  {opd.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="laporan-status">Status</Label>
            <Select id="laporan-status" defaultValue="all">
              <option value="all">Semua Status</option>
              <option value="selesai">Selesai</option>
              <option value="warning">Warning</option>
              <option value="kritis">Kritis</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="laporan-cari">Cari Laporan</Label>
            <div className="flex gap-2">
              <Input id="laporan-cari" placeholder="Nama OPD..." />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rekap Program per OPD</CardTitle>
          <CardDescription>
            Ringkasan capaian program untuk bahan monitoring dan bahan presentasi pimpinan.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>OPD</TableHead>
                <TableHead>Total Program</TableHead>
                <TableHead>Program Selesai</TableHead>
                <TableHead>Program Warning</TableHead>
                <TableHead>Program Kritis</TableHead>
                <TableHead>Rata-rata Capaian</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportItems.map((item) => (
                <TableRow key={item.opd}>
                  <TableCell className="min-w-[240px] font-medium">{item.opd}</TableCell>
                  <TableCell>{item.totalPrograms}</TableCell>
                  <TableCell>{item.completedPrograms}</TableCell>
                  <TableCell>{item.warningPrograms}</TableCell>
                  <TableCell>{item.criticalPrograms}</TableCell>
                  <TableCell>{item.averageAchievement}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
