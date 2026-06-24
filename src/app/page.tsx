import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ChartSpline,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-6 md:py-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl items-center gap-8 rounded-[34px] border border-white/70 bg-white/65 p-6 shadow-[0_24px_70px_rgba(8,22,39,0.10)] backdrop-blur md:p-8 lg:grid-cols-[1fr_420px]">
        <section className="mesh-surface relative overflow-hidden rounded-[30px] px-6 py-8 text-white md:px-8 md:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_32%)]" />
          <div className="relative z-10">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white/14 p-2 backdrop-blur">
              <Image
                src="/branding/logo.jpg"
                alt="spectra logo"
                width={64}
                height={64}
                className="h-full w-full rounded-xl object-cover"
                priority
              />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
              spectra
            </p>
            <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-ibm-plex-sans)] text-4xl font-semibold leading-tight md:text-5xl">
              Monitoring program ekonomi daerah dalam satu tampilan yang sederhana.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
              Platform monitoring dan pengendalian program berbasis digital untuk
              kebutuhan operasional spectra.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-100">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-emerald-300" />
                Monitoring lintas OPD yang ringkas dan mudah dipahami
              </div>
              <div className="flex items-center gap-3">
                <ChartSpline className="h-4 w-4 text-emerald-300" />
                Siap menampilkan progres, validasi, dan laporan
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center">
          <Card className="w-full rounded-[30px] border-white/80 bg-white/88">
            <CardContent className="p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-secondary)]">
                Login Dummy
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[color:var(--color-muted)] p-1.5">
                  <Image
                    src="/branding/logo.jpg"
                    alt="spectra logo"
                    width={48}
                    height={48}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-muted-foreground)]">
                    spectra
                  </p>
                  <p className="text-sm text-[color:var(--color-muted-foreground)]">
                    Akses dashboard utama
                  </p>
                </div>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-ibm-plex-sans)] text-3xl font-semibold text-[color:var(--color-foreground)]">
                Masuk ke dashboard.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted-foreground)]">
                Gunakan kredensial apa saja untuk melihat rancangan awal spectra.
              </p>

              <form className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="admin.bp4d@subangkab.go.id" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Masukkan password" />
                </div>

                <Link href="/dashboard" className="block">
                  <Button className="w-full" size="lg">
                    Login ke Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </form>

              <div className="mt-6 rounded-[24px] bg-[color:var(--color-muted)]/70 p-4">
                <p className="text-sm font-medium text-[color:var(--color-foreground)]">
                  Akses cepat
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted-foreground)]">
                  Tampilan awal ini dibuat simple agar fokus langsung ke login dan akses dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
