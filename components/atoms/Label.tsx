import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ className = "", children, ...props }: LabelProps) => {
  return (
    <label
      className={`block text-sm font-medium text-zinc-700 dark:text-zinc-300 ${className}`.trim()}
      {...props}
    >
      {children}
    </label>
  );
};
