import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "READY TO MOVE FORWARD?",
    title: "Let's make your research journey clearer.",
    description:
      "Whether you are starting a new research project or working through an existing one, we're here to help you move forward with greater clarity.",
    button: "Start a Conversation",
  },

  ne: {
    eyebrow: "अगाडि बढ्न तयार हुनुहुन्छ?",
    title: "तपाईंको अनुसन्धान यात्रालाई अझ स्पष्ट बनाऔँ।",
    description:
      "तपाईं नयाँ अनुसन्धान परियोजना सुरु गर्दै हुनुहुन्छ वा भइरहेको परियोजनामा काम गर्दै हुनुहुन्छ भने, अझ स्पष्टताका साथ अगाडि बढ्न हामी सहयोग गर्न तयार छौँ।",
    button: "कुरा सुरु गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default function FinalCTA({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="bg-[#0B1F3A] dark:bg-[#D9A900]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900] dark:text-[#0B1F3A]">
            {t.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white dark:text-[#071426] sm:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 dark:text-[#071426]/70">
            {t.description}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-9 inline-flex rounded-full bg-[#D9A900] px-7 py-3.5 font-semibold text-[#071426] transition hover:bg-[#f0c21a] dark:bg-[#0B1F3A] dark:text-white dark:hover:bg-[#102d54]"
          >
            {t.button}
          </Link>
        </div>
      </div>
    </section>
  );
}