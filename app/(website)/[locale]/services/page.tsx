import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Artova Research services for academic projects, thesis support, research, data analysis, and academic writing.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          Our Services
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#0B1F3A]">
          Research support when you need it.
        </h1>
      </div>
    </section>
  );
}