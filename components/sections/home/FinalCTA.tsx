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
    <section className="bg-background px-6 py-20 text-foreground transition-colors duration-300 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl bg-primary px-7 py-16 text-white transition-colors duration-300 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-px w-1/2 bg-accent/30"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.title}
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">
              {t.description}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-accent
                px-7 py-3.5
                text-sm font-semibold
                text-primary
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-accent-hover
              "
            >
              {t.button}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}