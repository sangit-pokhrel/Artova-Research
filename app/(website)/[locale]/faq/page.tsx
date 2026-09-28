import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about Artova Research services and academic support.",
};

export default function FAQPage() {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          FAQ
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#0B1F3A]">
          Frequently asked questions.
        </h1>
      </div>
    </section>
  );
}