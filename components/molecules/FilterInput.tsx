"use client";

import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

type FilterInputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "number" | "text";
};

export const FilterInput = ({
  label = "Sales threshold (max)",
  value,
  onChange,
  placeholder = "e.g. 80",
  type = "number",
}: FilterInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="sales-threshold">{label}</Label>
      <Input
        id="sales-threshold"
        type={type}
        min={type === "number" ? 0 : undefined}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sales threshold"
      />
    </div>
  );
};
