import { Paperclip, Save, SendHorizontal } from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { opdList, programList } from "@/data/dummy";

export default function InputRealisasiPage() {
  return (
    <DashboardLayout
      title="Input Realisasi OPD"
      description="Form dummy untuk pengisian progres program, realisasi anggaran, kendala, dan dokumen pendukung oleh OPD pengampu."
    >
      <Card>
        <CardHeader>
          <CardTitle>Form Realisasi Program</CardTitle>
          <CardDescription>
            Tampilan awal form input pelaporan progres untuk kebutuhan validasi BP4D.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="program">Pilih Program</Label>
            <Select id="program" defaultValue="">
              <option value="" disabled>
                Pilih program
              </option>
              {programList.map((program) => (
                <option key={program.code} value={program.code}>
                  {program.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="kegiatan">Pilih Kegiatan</Label>
            <Select id="kegiatan" defaultValue="">
              <option value="" disabled>
                Pilih kegiatan
              </option>
              <option value="keg-01">Koordinasi lintas OPD</option>
              <option value="keg-02">Pendampingan lapangan</option>
              <option value="keg-03">Monitoring bulanan</option>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="progres">Progres Fisik (%)</Label>
            <Input id="progres" type="number" placeholder="Contoh: 72" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="opd">OPD Pengampu</Label>
            <Select id="opd" defaultValue={opdList[0]?.id}>
              {opdList.map((opd) => (
                <option key={opd.id} value={opd.id}>
                  {opd.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="target-anggaran">Target Anggaran</Label>
            <Input id="target-anggaran" placeholder="Rp 0" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="realisasi-anggaran">Realisasi Anggaran</Label>
            <Input id="realisasi-anggaran" placeholder="Rp 0" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="kendala">Kendala</Label>
            <Textarea
              id="kendala"
              placeholder="Jelaskan hambatan pelaksanaan program, misalnya keterlambatan pengadaan atau koordinasi lintas sektor."
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="tindak-lanjut">Tindak Lanjut</Label>
            <Textarea
              id="tindak-lanjut"
              placeholder="Tuliskan rencana percepatan, tindak lanjut koordinasi, atau langkah mitigasi."
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="upload">Upload Bukti Dukung</Label>
            <label
              htmlFor="upload"
              className="flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-[color:var(--color-primary)]/25 bg-[color:var(--color-primary)]/4 px-5 py-6 text-center"
            >
              <Paperclip className="h-6 w-6 text-[color:var(--color-primary)]" />
              <p className="mt-3 text-sm font-medium text-[color:var(--color-foreground)]">
                Klik untuk memilih file pendukung
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-muted-foreground)]">
                PDF, DOCX, JPG, atau XLSX hingga 10 MB
              </p>
            </label>
            <input id="upload" type="file" className="sr-only" />
          </div>

          <div className="flex flex-col gap-3 pt-2 md:col-span-2 md:flex-row">
            <Button variant="outline" className="md:min-w-[180px]">
              <Save className="h-4 w-4" />
              Simpan Draft
            </Button>
            <Button variant="secondary" className="md:min-w-[180px]">
              <SendHorizontal className="h-4 w-4" />
              Kirim Validasi
            </Button>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
