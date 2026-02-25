"use client";

import type { ChartType } from "@/lib/types";
import { FilterInput } from "../molecules/FilterInput";
import { ChartTypeSelector } from "../molecules/ChartTypeSelector";

type SalesFiltersProps = {
  threshold: string;
  onThresholdChange: (v: string) => void;
  chartType: ChartType;
  onChartTypeChange: (t: ChartType) => void;
};

export const SalesFilters = ({
  threshold,
  onThresholdChange,
  chartType,
  onChartTypeChange,
}: SalesFiltersProps) => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
      <div className="min-w-[180px]">
        <FilterInput value={threshold} onChange={onThresholdChange} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Chart type
        </span>

        <ChartTypeSelector value={chartType} onChange={onChartTypeChange} />
      </div>
    </div>
  );
};
