"use client";

import { Button } from "../atoms/Button";

const YEARS = [2022, 2023, 2024];

type YearSelectorProps = {
  selectedYear: number;
  onSelect: (year: number) => void;
};

export const YearSelector = ({ selectedYear, onSelect }: YearSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Select year">
      {YEARS.map((year) => (
        <Button
          key={year}
          variant="outline"
          active={selectedYear === year}
          onClick={() => onSelect(year)}
          className="cursor-pointer"
        >
          {year}
        </Button>
      ))}
    </div>
  );
};
