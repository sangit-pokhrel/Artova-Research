import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "ARTOVA RESEARCH",
    title: "Turn your research idea into academic work that matters.",
    description:
      "Professional research support for students and researchers — from proposal development and literature review to data analysis and thesis guidance.",
    primaryCta: "Explore Our Services",
    secondaryCta: "Talk to Us",
    trust: "Academic • Research • Data • Guidance",
  },

  ne: {
    eyebrow: "आर्टोभा रिसर्च",
    title: "तपाईंको अनुसन्धानको विचारलाई प्रभावकारी शैक्षिक कार्यमा रूपान्तरण गर्नुहोस्।",
    description:
      "प्रस्ताव निर्माण, साहित्य समीक्षा, डेटा विश्लेषण तथा थेसिस मार्गदर्शनदेखि अनुसन्धानका विभिन्न चरणमा विद्यार्थी तथा अनुसन्धानकर्ताहरूका लागि व्यावसायिक सहयोग।",
    primaryCta: "हाम्रा सेवाहरू हेर्नुहोस्",
    secondaryCta: "हामीसँग कुरा गर्नुहोस्",
    trust: "शैक्षिक • अनुसन्धान • डेटा • मार्गदर्शन",
  },
} satisfies Record<Locale, object>;

export default function Hero({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#071426]">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#D9A900]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900]">
            {t.eyebrow}
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-[#0B1F3A] dark:text-white sm:text-6xl lg:text-7xl">
            {t.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70 dark:text-white/70 sm:text-xl">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/services`}
              className="rounded-full bg-[#0B1F3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#102d54] dark:bg-[#D9A900] dark:text-[#071426] dark:hover:bg-[#f0c21a]"
            >
              {t.primaryCta}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-[#0B1F3A]/20 px-7 py-3.5 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#071426]"
            >
              {t.secondaryCta}
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-[#0B1F3A]/50 dark:text-white/40">
            {t.trust}
          </p>
        </div>
      </div>
    </section>
  );
}