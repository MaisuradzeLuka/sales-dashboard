import type { SalesDataPoint } from "./types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function seeded(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function generateYearSales(year: number) {
  const r = seeded(year * 12 + 7);
  const base = 80 + (year - 2022) * 15;
  return MONTHS.map((month, i) => ({
    month,
    sales: Math.round(base + r() * 40 + (i < 2 || i > 10 ? -10 : 0)),
    year,
  }));
}

export const MOCK_SALES_2022 = generateYearSales(2022);
export const MOCK_SALES_2023 = generateYearSales(2023);
export const MOCK_SALES_2024 = generateYearSales(2024);

export function getMockSalesByYear() {
  return [
    { year: 2022, data: MOCK_SALES_2022 },
    { year: 2023, data: MOCK_SALES_2023 },
    { year: 2024, data: MOCK_SALES_2024 },
  ];
}

export function getMockSalesForYear(year: number) {
  const map: Record<number, SalesDataPoint[]> = {
    2022: MOCK_SALES_2022,
    2023: MOCK_SALES_2023,
    2024: MOCK_SALES_2024,
  };
  return map[year] ?? [];
}
