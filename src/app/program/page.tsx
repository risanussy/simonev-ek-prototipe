import { Filter } from "lucide-react";

import { StatusBadge } from "@/components/dashboard/StatusBadge";
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
import { formatCurrency, opdList, programList } from "@/data/dummy";

export default function ProgramPage() {
  return (
    <DashboardLayout
      title="Master Program"
      description="Pantau daftar program pembangunan ekonomi, realisasi anggaran, progres fisik, dan filter analisis berbasis tahun serta perangkat daerah."
    >
      <Card>
        <CardHeader>
          <CardTitle>Filter Program</CardTitle>
          <CardDescription>
            Kontrol dummy untuk menyaring program berdasarkan tahun, OPD, dan status.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="filter-year">Tahun</Label>
            <Select id="filter-year" defaultValue="2026">
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="filter-opd">OPD</Label>
            <Select id="filter-opd" defaultValue="all">
              <option value="all">Semua OPD</option>
              {opdList.map((opd) => (
                <option key={opd.id} value={opd.id}>
                  {opd.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="filter-status">Status</Label>
            <Select id="filter-status" defaultValue="all">
              <option value="all">Semua Status</option>
              <option value="on-track">On Track</option>
              <option value="warning">Warning</option>
              <option value="kritis">Kritis</option>
              <option value="belum-input">Belum Input</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="search-program">Pencarian</Label>
            <div className="flex gap-2">
              <Input id="search-program" placeholder="Cari nama program..." />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Program Pembangunan Ekonomi</CardTitle>
          <CardDescription>
            Daftar program utama dengan target dan realisasi anggaran terbaru.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Kode Program</TableHead>
                <TableHead>Nama Program</TableHead>
                <TableHead>OPD Pengampu</TableHead>
                <TableHead>Tahun</TableHead>
                <TableHead>Target Anggaran</TableHead>
                <TableHead>Realisasi Anggaran</TableHead>
                <TableHead>Progres Fisik</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programList.map((program) => (
                <TableRow key={program.code}>
                  <TableCell className="font-semibold text-[color:var(--color-primary)]">
                    {program.code}
                  </TableCell>
                  <TableCell className="min-w-[260px] font-medium">{program.name}</TableCell>
                  <TableCell className="min-w-[240px]">{program.opd}</TableCell>
                  <TableCell>{program.year}</TableCell>
                  <TableCell>{formatCurrency(program.targetBudget)}</TableCell>
                  <TableCell>{formatCurrency(program.realizedBudget)}</TableCell>
                  <TableCell>{program.physicalProgress}%</TableCell>
                  <TableCell>
                    <StatusBadge status={program.status} />
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
