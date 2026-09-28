import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Artova Research for academic guidance, research support, and project assistance.",
};

export default function ContactPage() {
  return (
    <section className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          Contact Us
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#0B1F3A]">
          Let's talk about your research.
        </h1>
      </div>
    </section>
  );
}