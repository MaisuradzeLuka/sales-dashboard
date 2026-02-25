import { NextResponse } from "next/server";
import { getMockSalesForYear } from "@/lib/mock-sales";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get("year");
  const year = yearParam ? parseInt(yearParam, 10) : new Date().getFullYear();

  if (![2022, 2023, 2024].includes(year)) {
    return NextResponse.json(
      { error: "Year must be 2022, 2023, or 2024" },
      { status: 400 },
    );
  }

  const data = getMockSalesForYear(year);
  return NextResponse.json({ year, data });
}
