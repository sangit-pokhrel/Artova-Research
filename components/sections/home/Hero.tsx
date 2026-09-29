import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  const isNepali = locale === "ne";

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Hero Image */}
      <div className="relative min-h-[590px] w-full sm:min-h-[640px]">
        <Image
          src="/images/hero-research.png"
          alt="Academic research workspace"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/50" />

        {/* Left-to-right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/65 to-primary/20" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent" />

        {/* Decorative purple glow */}
        <div
          aria-hidden="true"
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-32 sm:min-h-[640px] sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-primary/45 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(139,44,245,0.8)]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {isNepali ? "अनुसन्धान सहयोग" : "Research Support"}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-[var(--font-jakarta)] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {isNepali ? (
                <>
                  तपाईंको अनुसन्धानलाई
                  <span className="block text-accent">
                    स्पष्ट र प्रभावकारी
                  </span>
                  बनाउनुहोस्।
                </>
              ) : (
                <>
                  Turn Your Research
                  <span className="block text-accent">
                    Into Meaningful Work.
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {isNepali
                ? "प्रस्तावदेखि thesis र research analysis सम्म, तपाईंको academic journey लाई structured र practical support प्रदान गर्छौं।"
                : "From proposals and theses to research analysis, get structured and practical support throughout your academic journey."}
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-bold text-primary shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hover hover:shadow-[var(--shadow-lg)]"
              >
                {isNepali ? "सहयोग लिनुहोस्" : "Get Research Support"}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href={`/${locale}/services`}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-white/15"
              >
                {isNepali ? "सेवाहरू हेर्नुहोस्" : "Explore Services"}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating information cards */}
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-6 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              number: "01",
              title: isNepali ? "Research Planning" : "Research Planning",
              text: isNepali
                ? "तपाईंको research journey लाई structured बनाउनुहोस्।"
                : "Build a clear structure for your research journey.",
            },
            {
              number: "02",
              title: isNepali ? "Academic Support" : "Academic Support",
              text: isNepali
                ? "तपाईंको academic work का विभिन्न चरणमा सहयोग।"
                : "Practical support across different academic stages.",
            },
            {
              number: "03",
              title: isNepali ? "Research Guidance" : "Research Guidance",
              text: isNepali
                ? "Research process लाई अझ स्पष्ट र व्यवस्थित बनाउनुहोस्।"
                : "Make your research process clearer and more structured.",
            },
          ].map((card) => (
            <div
              key={card.number}
              className="group rounded-2xl border border-white/10 bg-surface-elevated/95 p-6 shadow-[var(--shadow-lg)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold text-accent">
                  {card.number}
                </span>

                <span className="h-px w-10 bg-accent/40 transition-all duration-300 group-hover:w-16" />
              </div>

              <h2 className="text-lg font-bold text-foreground">
                {card.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}