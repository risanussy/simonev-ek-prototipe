export type ProgramStatus = "On Track" | "Warning" | "Kritis" | "Belum Input";

export interface OpdItem {
  id: string;
  name: string;
  head: string;
  email: string;
  programCount: number;
  dataStatus: "Lengkap" | "Perlu Update" | "Belum Lengkap";
  budgetRealization: number;
}

export interface ProgramItem {
  code: string;
  name: string;
  opd: string;
  year: number;
  targetBudget: number;
  realizedBudget: number;
  physicalProgress: number;
  status: ProgramStatus;
  updatedAt: string;
}

export interface IndicatorItem {
  name: string;
  unit: string;
  baseline: string;
  target: string;
  realization: string;
  achievement: number;
  opd: string;
  status: ProgramStatus;
}

export interface ValidationItem {
  program: string;
  opd: string;
  progress: number;
  budgetRealization: number;
  submittedAt: string;
  validationStatus: "Menunggu" | "Perlu Revisi" | "Disetujui";
}

export interface ReportItem {
  opd: string;
  totalPrograms: number;
  completedPrograms: number;
  warningPrograms: number;
  criticalPrograms: number;
  averageAchievement: number;
}

export const opdList: OpdItem[] = [
  {
    id: "opd-01",
    name: "BP4D Kabupaten Subang",
    head: "Dr. Hendra Permana",
    email: "bp4d@subangkab.go.id",
    programCount: 4,
    dataStatus: "Lengkap",
    budgetRealization: 86,
  },
  {
    id: "opd-02",
    name: "Dinas Pertanian",
    head: "Ir. Rina Kurniasih",
    email: "distan@subangkab.go.id",
    programCount: 3,
    dataStatus: "Lengkap",
    budgetRealization: 78,
  },
  {
    id: "opd-03",
    name: "Dinas Koperasi, UMKM, Perdagangan dan Perindustrian",
    head: "Taufik Hidayat, S.E.",
    email: "diskumdagin@subangkab.go.id",
    programCount: 5,
    dataStatus: "Perlu Update",
    budgetRealization: 71,
  },
  {
    id: "opd-04",
    name: "Dinas Ketahanan Pangan",
    head: "Dra. Nani Rosita",
    email: "dkp@subangkab.go.id",
    programCount: 2,
    dataStatus: "Lengkap",
    budgetRealization: 81,
  },
  {
    id: "opd-05",
    name: "Dinas Kesehatan",
    head: "dr. Maria Fitriani",
    email: "dinkes@subangkab.go.id",
    programCount: 2,
    dataStatus: "Belum Lengkap",
    budgetRealization: 63,
  },
  {
    id: "opd-06",
    name: "Dinas Pendidikan dan Kebudayaan",
    head: "Asep Nugraha, M.Pd.",
    email: "disdikbud@subangkab.go.id",
    programCount: 2,
    dataStatus: "Perlu Update",
    budgetRealization: 67,
  },
  {
    id: "opd-07",
    name: "Dinas Pekerjaan Umum",
    head: "Ir. Bayu Santoso",
    email: "dpu@subangkab.go.id",
    programCount: 3,
    dataStatus: "Lengkap",
    budgetRealization: 74,
  },
  {
    id: "opd-08",
    name: "Badan Pendapatan Daerah",
    head: "Yuli Astuti, S.AP.",
    email: "bapenda@subangkab.go.id",
    programCount: 2,
    dataStatus: "Lengkap",
    budgetRealization: 88,
  },
  {
    id: "opd-09",
    name: "BPS Kabupaten Subang",
    head: "Agus Wijaya, S.Stat.",
    email: "bps3206@bps.go.id",
    programCount: 1,
    dataStatus: "Lengkap",
    budgetRealization: 92,
  },
];

export const programList: ProgramItem[] = [
  {
    code: "PRG-01",
    name: "Penguatan Ketahanan Pangan Daerah",
    opd: "Dinas Ketahanan Pangan",
    year: 2026,
    targetBudget: 7200000000,
    realizedBudget: 5750000000,
    physicalProgress: 82,
    status: "On Track",
    updatedAt: "16 Jun 2026",
  },
  {
    code: "PRG-02",
    name: "Peningkatan Daya Saing UMKM",
    opd: "Dinas Koperasi, UMKM, Perdagangan dan Perindustrian",
    year: 2026,
    targetBudget: 6400000000,
    realizedBudget: 4310000000,
    physicalProgress: 69,
    status: "Warning",
    updatedAt: "15 Jun 2026",
  },
  {
    code: "PRG-03",
    name: "Pengendalian Inflasi Daerah",
    opd: "Badan Pendapatan Daerah",
    year: 2026,
    targetBudget: 2800000000,
    realizedBudget: 2360000000,
    physicalProgress: 84,
    status: "On Track",
    updatedAt: "16 Jun 2026",
  },
  {
    code: "PRG-04",
    name: "Pengembangan Kawasan Ekonomi Lokal",
    opd: "BP4D Kabupaten Subang",
    year: 2026,
    targetBudget: 8300000000,
    realizedBudget: 4880000000,
    physicalProgress: 57,
    status: "Warning",
    updatedAt: "14 Jun 2026",
  },
  {
    code: "PRG-05",
    name: "Peningkatan Akses Pangan dan Gizi",
    opd: "Dinas Kesehatan",
    year: 2026,
    targetBudget: 5100000000,
    realizedBudget: 2390000000,
    physicalProgress: 45,
    status: "Kritis",
    updatedAt: "12 Jun 2026",
  },
  {
    code: "PRG-06",
    name: "Penguatan Data Statistik Pembangunan",
    opd: "BPS Kabupaten Subang",
    year: 2026,
    targetBudget: 1900000000,
    realizedBudget: 1750000000,
    physicalProgress: 91,
    status: "On Track",
    updatedAt: "16 Jun 2026",
  },
  {
    code: "PRG-07",
    name: "Peningkatan Investasi Daerah",
    opd: "BP4D Kabupaten Subang",
    year: 2026,
    targetBudget: 4600000000,
    realizedBudget: 2180000000,
    physicalProgress: 52,
    status: "Warning",
    updatedAt: "13 Jun 2026",
  },
  {
    code: "PRG-08",
    name: "Digitalisasi Pelaporan Program Ekonomi",
    opd: "BP4D Kabupaten Subang",
    year: 2026,
    targetBudget: 2200000000,
    realizedBudget: 0,
    physicalProgress: 0,
    status: "Belum Input",
    updatedAt: "11 Jun 2026",
  },
];

export const indicatorList: IndicatorItem[] = [
  {
    name: "Persentase realisasi program ekonomi",
    unit: "%",
    baseline: "58",
    target: "90",
    realization: "76",
    achievement: 84,
    opd: "BP4D Kabupaten Subang",
    status: "On Track",
  },
  {
    name: "Persentase capaian indikator ketahanan pangan",
    unit: "%",
    baseline: "61",
    target: "92",
    realization: "80",
    achievement: 87,
    opd: "Dinas Ketahanan Pangan",
    status: "On Track",
  },
  {
    name: "Jumlah UMKM naik kelas",
    unit: "Unit",
    baseline: "320",
    target: "500",
    realization: "338",
    achievement: 68,
    opd: "Dinas Koperasi, UMKM, Perdagangan dan Perindustrian",
    status: "Warning",
  },
  {
    name: "Persentase penyerapan anggaran",
    unit: "%",
    baseline: "54",
    target: "95",
    realization: "72",
    achievement: 76,
    opd: "Badan Pendapatan Daerah",
    status: "Warning",
  },
  {
    name: "Tingkat inflasi daerah",
    unit: "%",
    baseline: "4,2",
    target: "< 3,0",
    realization: "3,4",
    achievement: 62,
    opd: "BPS Kabupaten Subang",
    status: "Warning",
  },
  {
    name: "Persentase OPD yang mengirim laporan tepat waktu",
    unit: "%",
    baseline: "48",
    target: "100",
    realization: "67",
    achievement: 67,
    opd: "BP4D Kabupaten Subang",
    status: "Warning",
  },
  {
    name: "Persentase data tervalidasi BP4D",
    unit: "%",
    baseline: "52",
    target: "100",
    realization: "41",
    achievement: 41,
    opd: "BP4D Kabupaten Subang",
    status: "Kritis",
  },
];

export const validationQueue: ValidationItem[] = [
  {
    program: "Peningkatan Daya Saing UMKM",
    opd: "Dinas Koperasi, UMKM, Perdagangan dan Perindustrian",
    progress: 69,
    budgetRealization: 4310000000,
    submittedAt: "16 Jun 2026",
    validationStatus: "Menunggu",
  },
  {
    program: "Peningkatan Akses Pangan dan Gizi",
    opd: "Dinas Kesehatan",
    progress: 45,
    budgetRealization: 2390000000,
    submittedAt: "15 Jun 2026",
    validationStatus: "Perlu Revisi",
  },
  {
    program: "Penguatan Ketahanan Pangan Daerah",
    opd: "Dinas Ketahanan Pangan",
    progress: 82,
    budgetRealization: 5750000000,
    submittedAt: "15 Jun 2026",
    validationStatus: "Menunggu",
  },
  {
    program: "Penguatan Data Statistik Pembangunan",
    opd: "BPS Kabupaten Subang",
    progress: 91,
    budgetRealization: 1750000000,
    submittedAt: "14 Jun 2026",
    validationStatus: "Disetujui",
  },
];

export const reportItems: ReportItem[] = [
  {
    opd: "BP4D Kabupaten Subang",
    totalPrograms: 4,
    completedPrograms: 2,
    warningPrograms: 1,
    criticalPrograms: 1,
    averageAchievement: 72,
  },
  {
    opd: "Dinas Pertanian",
    totalPrograms: 3,
    completedPrograms: 2,
    warningPrograms: 1,
    criticalPrograms: 0,
    averageAchievement: 79,
  },
  {
    opd: "Dinas Koperasi, UMKM, Perdagangan dan Perindustrian",
    totalPrograms: 5,
    completedPrograms: 2,
    warningPrograms: 2,
    criticalPrograms: 1,
    averageAchievement: 68,
  },
  {
    opd: "Dinas Kesehatan",
    totalPrograms: 2,
    completedPrograms: 0,
    warningPrograms: 1,
    criticalPrograms: 1,
    averageAchievement: 57,
  },
];

export const monthlyProgress = [
  { month: "Jan", value: 34 },
  { month: "Feb", value: 42 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 56 },
  { month: "Mei", value: 63 },
  { month: "Jun", value: 71 },
  { month: "Jul", value: 76 },
  { month: "Agu", value: 81 },
];

export const budgetByOpd = opdList.map((opd) => ({
  name: opd.name.replace("Kabupaten Subang", "Kab. Subang").replace("Dinas ", ""),
  value: opd.budgetRealization,
}));

export const programStatusBreakdown = [
  { name: "On Track", value: programList.filter((item) => item.status === "On Track").length },
  { name: "Warning", value: programList.filter((item) => item.status === "Warning").length },
  { name: "Kritis", value: programList.filter((item) => item.status === "Kritis").length },
  {
    name: "Belum Input",
    value: programList.filter((item) => item.status === "Belum Input").length,
  },
];

const totalPhysicalProgress =
  programList.reduce((total, item) => total + item.physicalProgress, 0) / programList.length;

const totalBudgetRealization =
  programList.reduce((total, item) => total + (item.realizedBudget / item.targetBudget) * 100, 0) /
  programList.length;

export const dashboardStats = [
  {
    title: "Total Program",
    value: `${programList.length}`,
    helper: "Aktif pada tahun berjalan",
  },
  {
    title: "Total Kegiatan",
    value: "27",
    helper: "Terpantau lintas OPD",
  },
  {
    title: "Total OPD",
    value: `${opdList.length}`,
    helper: "Pelaksana utama",
  },
  {
    title: "Rata-rata Progres Fisik",
    value: `${Math.round(totalPhysicalProgress)}%`,
    helper: "Update sampai minggu ini",
  },
  {
    title: "Rata-rata Realisasi Anggaran",
    value: `${Math.round(totalBudgetRealization)}%`,
    helper: "Akumulasi seluruh program",
  },
  {
    title: "Indikator Tercapai",
    value: `${indicatorList.filter((item) => item.status === "On Track").length}`,
    helper: "Hijau dan stabil",
  },
  {
    title: "Indikator Warning",
    value: `${indicatorList.filter((item) => item.status === "Warning").length}`,
    helper: "Perlu tindak lanjut",
  },
  {
    title: "Indikator Kritis",
    value: `${indicatorList.filter((item) => item.status === "Kritis").length}`,
    helper: "Butuh perhatian BP4D",
  },
];

export const dashboardHighlights = [
  {
    label: "Pelaporan OPD",
    value: "73%",
    detail: "7 dari 9 OPD sudah mengirim update minggu ini",
  },
  {
    label: "Data tervalidasi",
    value: "41%",
    detail: "Masih ada 6 berkas yang menunggu telaah BP4D",
  },
  {
    label: "Program prioritas",
    value: "3",
    detail: "Perlu intervensi cepat pada status warning dan kritis",
  },
];

export const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Master OPD", href: "/opd" },
  { label: "Program", href: "/program" },
  { label: "Indikator Kinerja", href: "/indikator" },
  { label: "Input Realisasi", href: "/input-realisasi" },
  { label: "Validasi Data", href: "/validasi" },
  { label: "Laporan", href: "/laporan" },
  { label: "Pengaturan", href: "/pengaturan" },
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
