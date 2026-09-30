import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n/config";
import { images } from "@/lib/images";

type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  const isNepali = locale === "ne";

  const featureCards = [
    {
      number: "01",
      title: isNepali ? "Research Planning" : "Research Planning",
      text: isNepali
        ? "तपाईंको research journey लाई structured बनाउनुहोस्।"
        : "Build a clear structure for your research journey.",
      position: "left" as const,
    },
    {
      number: "02",
      title: isNepali ? "Academic Support" : "Academic Support",
      text: isNepali
        ? "तपाईंको academic work का विभिन्न चरणमा सहयोग।"
        : "Practical support across different academic stages.",
      position: "center" as const,
    },
    {
      number: "03",
      title: isNepali ? "Research Guidance" : "Research Guidance",
      text: isNepali
        ? "Research process लाई अझ स्पष्ट र व्यवस्थित बनाउनुहोस्।"
        : "Make your research process clearer and more structured.",
      position: "right" as const,
    },
  ];

  return (
    <section className="relative -mt-[80px] overflow-hidden bg-transparent">
      {/* HERO IMAGE */}
      <div className="relative min-h-[590px] w-full sm:min-h-[640px]">
        <Image
          src={images.hero.research}
          alt="Academic research workspace"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/35 to-transparent" />

        <div
          aria-hidden="true"
          className="
            absolute -left-32 top-20
            h-80 w-80
            rounded-full
            bg-accent/10
            blur-3xl
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative z-10 mx-auto flex
            min-h-[590px] max-w-7xl
            items-center
            px-6 pb-32 pt-[208px]
            sm:min-h-[640px]
            sm:px-8 sm:pt-[208px]
            lg:px-10
          "
        >
          <div className="max-w-3xl">
            <h1
              className="
                font-[var(--font-jakarta)]
                text-4xl font-extrabold
                leading-[1.05]
                tracking-tight text-white
                sm:text-5xl lg:text-6xl
              "
            >
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

            <p
              className="
                mt-7 max-w-2xl
                text-base leading-8
                text-white/75
                sm:text-lg
              "
            >
              {isNepali
                ? "प्रस्तावदेखि thesis र research analysis सम्म, तपाईंको academic journey लाई structured र practical support प्रदान गर्छौं।"
                : "From proposals and theses to research analysis, get structured and practical support throughout your academic journey."}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={`/${locale}/contact`}>
                {isNepali ? "सहयोग लिनुहोस्" : "Get Research Support"}
              </Button>

              <Link
                href={`/${locale}/services`}
                className="
                  group inline-flex items-center
                  justify-center gap-3
                  rounded-full
                  border border-white/25
                  bg-white/10
                  px-7 py-3.5
                  text-sm font-bold text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-accent/60
                  hover:bg-white/15
                "
              >
                {isNepali ? "सेवाहरू हेर्नुहोस्" : "Explore Services"}

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* THREE FEATURE CARDS */}
      <div
        className="
          relative z-20 mx-auto -mt-16
          max-w-6xl px-6 pb-16
          sm:px-8 lg:px-10
        "
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.number}
              className="
                group relative min-h-[250px]
                overflow-hidden
                rounded-[1.75rem]
                border border-border
                bg-surface-elevated
                px-7 py-7
                text-foreground
                shadow-[var(--shadow-md)]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-accent/40
                hover:shadow-[var(--shadow-lg)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute bottom-0 right-0
                  h-64 w-64
                  rounded-full
                  bg-accent-soft
                  blur-3xl
                "
              />

              <div className="relative z-20 flex items-center">
                <span className="text-sm font-bold text-accent">
                  {card.number}
                </span>

                <span
                  className="
                    ml-[30%]
                    h-px w-16
                    bg-accent/40
                    transition-all duration-300
                    group-hover:w-24
                  "
                />
              </div>

              <div className="relative z-20 mt-9 max-w-[58%]">
                <h2 className="text-xl font-bold leading-tight text-foreground">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {card.text}
                </p>
              </div>

              <div
                className="
                  pointer-events-none
                  absolute right-0 top-8
                  h-[72%] w-[48%]
                  overflow-hidden
                "
              >
                <div
                  className={`
                    absolute inset-0
                    bg-[url('/images/hero/hero-feature-illustrations.png')]
                    bg-no-repeat
                    bg-[length:300%_auto]
                    transition-transform duration-500
                    group-hover:scale-105
                    ${
                      card.position === "left"
                        ? "bg-[position:0%_50%]"
                        : card.position === "center"
                          ? "bg-[position:50%_50%]"
                          : "bg-[position:100%_50%]"
                    }
                  `}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}