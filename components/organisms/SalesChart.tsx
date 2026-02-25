"use client";

import { ResponsiveContainer } from "recharts";
import type { SalesDataPoint } from "@/lib/types";
import BarChartComponent from "../molecules/BarChartComponent";

type SalesChartProps = {
  data: SalesDataPoint[];
};

export function SalesChart({ data }: SalesChartProps) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChartComponent data={data} />
    </ResponsiveContainer>
  );
}
