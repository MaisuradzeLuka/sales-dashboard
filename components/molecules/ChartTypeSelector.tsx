"use client";

import type { ChartType } from "@/lib/types";
import { Button } from "../atoms/Button";

type ChartTypeSelectorProps = {
  value: ChartType;
  onChange: (type: ChartType) => void;
};

const options: { type: ChartType; label: string }[] = [
  { type: "bar", label: "Bar" },
  { type: "line", label: "Line" },
  { type: "pie", label: "Pie" },
];

export const ChartTypeSelector = ({
  value,
  onChange,
}: ChartTypeSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Chart type">
      {options.map(({ type, label }) => (
        <Button
          key={type}
          variant="outline"
          active={value === type}
          onClick={() => onChange(type)}
          className="cursor-pointer"
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
