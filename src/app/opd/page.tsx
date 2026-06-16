import { Eye, PencilLine, Plus } from "lucide-react";

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
import { opdList } from "@/data/dummy";

const opdStatusVariant = {
  Lengkap: "success",
  "Perlu Update": "warning",
  "Belum Lengkap": "danger",
} as const;

export default function OpdPage() {
  return (
    <DashboardLayout
      title="Master OPD"
      description="Kelola daftar perangkat daerah yang menjadi pengampu program pembangunan ekonomi dan status kelengkapan input datanya."
    >
      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Daftar OPD</CardTitle>
            <CardDescription>
              Tabel referensi perangkat daerah dengan kontak penanggung jawab dan status
              input data.
            </CardDescription>
          </div>
          <Button>
            <Plus className="h-4 w-4" />
            Tambah OPD
          </Button>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama OPD</TableHead>
                <TableHead>Kepala OPD</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Jumlah Program</TableHead>
                <TableHead>Status Input Data</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {opdList.map((opd) => (
                <TableRow key={opd.id}>
                  <TableCell className="min-w-[240px] font-medium">{opd.name}</TableCell>
                  <TableCell>{opd.head}</TableCell>
                  <TableCell>{opd.email}</TableCell>
                  <TableCell>{opd.programCount}</TableCell>
                  <TableCell>
                    <Badge variant={opdStatusVariant[opd.dataStatus]}>{opd.dataStatus}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                        Detail
                      </Button>
                      <Button variant="outline" size="sm">
                        <PencilLine className="h-4 w-4" />
                        Edit
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
