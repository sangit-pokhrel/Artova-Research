import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore research guidance, academic support, and research resources from Artova Research.",
};

export default function ResearchPage() {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          Research
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#0B1F3A]">
          From research questions to meaningful results.
        </h1>
      </div>
    </section>
  );
}