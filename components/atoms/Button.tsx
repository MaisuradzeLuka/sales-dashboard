import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  active?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
  secondary: "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 focus:ring-zinc-400",
  outline:
    "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500",
};

export const Button = ({
  variant = "primary",
  active,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const v = variants[variant];
  const activeClass =
    variant === "outline" && active ? "bg-emerald-100 border-emerald-700" : "";
  return (
    <button
      type="button"
      className={`${base} ${v} ${activeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};
