import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Artova Research and our approach to academic and research support.",
};

export default function AboutPage() {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          About Artova Research
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#0B1F3A]">
          Supporting better research.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
          Artova Research provides academic and research support designed
          around the needs of students and researchers.
        </p>
      </div>
    </section>
  );
}