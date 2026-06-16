import { Check, Eye, RotateCcw } from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, validationQueue } from "@/data/dummy";

const validationVariant = {
  Menunggu: "warning",
  "Perlu Revisi": "danger",
  Disetujui: "success",
} as const;

export default function ValidasiPage() {
  return (
    <DashboardLayout
      title="Validasi BP4D"
      description="Daftar data realisasi yang menunggu penelaahan, persetujuan, atau revisi oleh admin BP4D."
    >
      <Card>
        <CardHeader>
          <CardTitle>Antrian Validasi</CardTitle>
          <CardDescription>
            Gunakan tampilan ini untuk memeriksa kelengkapan data yang dikirim OPD.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program</TableHead>
                <TableHead>OPD</TableHead>
                <TableHead>Progres</TableHead>
                <TableHead>Realisasi Anggaran</TableHead>
                <TableHead>Tanggal Kirim</TableHead>
                <TableHead>Status Validasi</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {validationQueue.map((item) => (
                <TableRow key={`${item.program}-${item.submittedAt}`}>
                  <TableCell className="min-w-[220px] font-medium">{item.program}</TableCell>
                  <TableCell className="min-w-[240px]">{item.opd}</TableCell>
                  <TableCell>{item.progress}%</TableCell>
                  <TableCell>{formatCurrency(item.budgetRealization)}</TableCell>
                  <TableCell>{item.submittedAt}</TableCell>
                  <TableCell>
                    <Badge variant={validationVariant[item.validationStatus]}>
                      {item.validationStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                        Lihat Detail
                      </Button>
                      <Button variant="secondary" size="sm">
                        <Check className="h-4 w-4" />
                        Setujui
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4" />
                        Revisi
                      </Button>
                    </div>
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
