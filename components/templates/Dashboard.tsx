"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { SalesDataPoint, ChartType } from "@/lib/types";
import { getMockSalesForYear } from "@/lib/mock-sales";
import { Card } from "../atoms/Card";
import { YearSelector } from "../organisms/YearSelector";
import { SalesFilters } from "../organisms/SalesFilters";
import { SalesChart } from "../organisms/SalesChart";
import { ResponsiveContainer } from "recharts";

export const DashboardTemplate = () => {
  const [year, setYear] = useState(2024);
  const [threshold, setThreshold] = useState("");
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [data, setData] = useState<SalesDataPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFromApi = useCallback(async (y: number) => {
    setLoading(true);

    if (error) {
      setError(null);
    }

    try {
      const res = await fetch(`/api/sales?year=${y}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json.data ?? []);
    } catch (e: any) {
      setError(e.message);
      setData(getMockSalesForYear(y));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFromApi(year);
  }, [year, fetchFromApi]);

  const thresholdNum = threshold === "" ? NaN : parseFloat(threshold);

  const filteredData = useMemo(() => {
    if (isNaN(thresholdNum)) return data;
    return data.filter((d) => d.sales <= thresholdNum);
  }, [data, thresholdNum]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Sales Dashboard
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            View sales by year (2022–2024). Data inspired by Kaggle-style retail
            datasets.
          </p>
        </header>

        <div className="space-y-6">
          <Card>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Year
            </h2>
            <YearSelector selectedYear={year} onSelect={setYear} />
          </Card>

          <Card>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Filters & chart type
            </h2>
            <SalesFilters
              threshold={threshold}
              onThresholdChange={setThreshold}
              chartType={chartType}
              onChartTypeChange={setChartType}
            />
          </Card>

          <Card>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Sales {year}
              </h2>
            </div>

            {loading ? (
              <div className="flex h-80 items-center justify-center">
                <p className="text-zinc-500">Loading…</p>
              </div>
            ) : filteredData.length === 0 ? (
              <div className="flex h-80 items-center justify-center">
                <p className="text-zinc-500">
                  No data for the selected threshold.
                </p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={320}>
                <SalesChart data={filteredData} chartType={chartType} />
              </ResponsiveContainer>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
