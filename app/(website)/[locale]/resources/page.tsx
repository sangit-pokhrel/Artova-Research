import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access research guides, academic resources, articles, and useful materials from Artova Research.",
};

export default function ResourcesPage() {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          Resources
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#0B1F3A]">
          Resources for your academic journey.
        </h1>
      </div>
    </section>
  );
}