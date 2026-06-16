"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  budgetByOpd,
  monthlyProgress,
  programStatusBreakdown,
} from "@/data/dummy";

const pieColors = ["#16805d", "#d59d19", "#cc4f4f", "#94a3b8"];

export function BudgetBarChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={budgetByOpd} margin={{ top: 12, right: 10, left: -16, bottom: 48 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#d9e2ec" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#6b7a8f"
          angle={-18}
          textAnchor="end"
          interval={0}
          height={78}
          fontSize={11}
        />
        <YAxis stroke="#6b7a8f" tickFormatter={(value) => `${value}%`} fontSize={12} />
        <Tooltip formatter={(value: number) => [`${value}%`, "Realisasi"]} />
        <Bar dataKey="value" radius={[12, 12, 0, 0]} fill="#123a68" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ProgressLineChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={monthlyProgress} margin={{ top: 16, right: 10, left: -16, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#d9e2ec" vertical={false} />
        <XAxis dataKey="month" stroke="#6b7a8f" fontSize={12} />
        <YAxis stroke="#6b7a8f" tickFormatter={(value) => `${value}%`} fontSize={12} />
        <Tooltip formatter={(value: number) => [`${value}%`, "Progres"]} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#16805d"
          strokeWidth={4}
          dot={{ r: 4, fill: "#16805d" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function StatusPieChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Tooltip formatter={(value: number) => [`${value} program`, "Jumlah"]} />
        <Pie
          data={programStatusBreakdown}
          dataKey="value"
          nameKey="name"
          innerRadius={72}
          outerRadius={110}
          paddingAngle={4}
        >
          {programStatusBreakdown.map((entry, index) => (
            <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
