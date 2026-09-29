import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-accent text-primary shadow-[var(--shadow-sm)] hover:-translate-y-1 hover:bg-accent-hover hover:shadow-[var(--shadow-md)]",

    secondary:
      "border border-border bg-surface-elevated text-foreground shadow-[var(--shadow-sm)] hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[var(--shadow-md)]",

    dark:
      "bg-primary text-white shadow-[var(--shadow-sm)] hover:-translate-y-1 hover:bg-primary-soft hover:shadow-[var(--shadow-md)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>

      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}