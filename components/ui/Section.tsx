import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  variant?: "default" | "soft" | "primary";
  decoration?: "none" | "grid" | "glow";
  className?: string;
};

export default function Section({
  children,
  variant = "default",
  decoration = "none",
  className = "",
}: SectionProps) {
  const variants = {
    default: "bg-background text-foreground",
    soft: "bg-surface text-foreground",
    primary: "bg-primary text-white",
  };

  return (
    <section
      className={`relative isolate overflow-hidden transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {/* Grid decoration */}
      {decoration === "grid" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 theme-grid opacity-50"
        />
      )}

      {/* Ambient glow */}
      {decoration === "glow" && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
          />
        </>
      )}

      {children}
    </section>
  );
}