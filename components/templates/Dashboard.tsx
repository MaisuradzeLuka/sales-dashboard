"use client";

import { useEffect, useState } from "react";
import type { SalesDataPoint } from "@/lib/types";
import { getMockSalesForYear } from "@/lib/mock-sales";
import { Card } from "../atoms/Card";
import { YearSelector } from "../organisms/YearSelector";
import { SalesChart } from "../organisms/SalesChart";

export function DashboardTemplate() {
  const [year, setYear] = useState(2024);
  const [data, setData] = useState<SalesDataPoint[]>([]);

  useEffect(() => {
    setData(getMockSalesForYear(year));
  }, [year]);

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
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-4">
              Sales {year}
            </h2>

            <SalesChart data={data} />
          </Card>
        </div>
      </div>
    </div>
  );
}
