import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subjects",
  description:
    "Explore the academic subjects and research areas supported by Artova Research.",
};

export default function SubjectsPage() {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          Subjects
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#0B1F3A]">
          Academic areas we support.
        </h1>
      </div>
    </section>
  );
}