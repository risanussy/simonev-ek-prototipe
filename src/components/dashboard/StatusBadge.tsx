import { Badge } from "@/components/ui/badge";
import type { ProgramStatus } from "@/data/dummy";

const variantByStatus: Record<ProgramStatus, "success" | "warning" | "danger" | "neutral"> = {
  "On Track": "success",
  Warning: "warning",
  Kritis: "danger",
  "Belum Input": "neutral",
};

export function StatusBadge({ status }: { status: ProgramStatus }) {
  return <Badge variant={variantByStatus[status]}>{status}</Badge>;
}
