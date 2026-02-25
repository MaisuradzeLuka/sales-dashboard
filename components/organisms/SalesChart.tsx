"use client";

import type { ChartType, SalesDataPoint } from "@/lib/types";
import BarChartComponent from "../molecules/BarChartComponent";
import LineChartComponent from "../molecules/LineChartComponent";
import PieChartComponent from "../molecules/PieChartComponent";

type SalesChartProps = {
  data: SalesDataPoint[];
  chartType: ChartType;
};

export const SalesChart = ({ data, chartType }: SalesChartProps) => {
  switch (chartType) {
    case "bar":
      return <BarChartComponent data={data} />;

    case "line":
      return <LineChartComponent data={data} />;

    case "pie":
      return <PieChartComponent data={data} />;

    default:
      return null;
  }
};
