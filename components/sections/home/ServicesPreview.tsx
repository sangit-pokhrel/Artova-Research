import Link from "next/link";

import ResearchIcon from "@/components/ui/ResearchIcon";
import type { ResearchIconName } from "@/components/ui/ResearchIcon";
import type { Locale } from "@/lib/i18n/config";

const content: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    services: {
      number: string;
      title: string;
      description: string;
      icon: ResearchIconName;
    }[];
    button: string;
  }
> = {
  en: {
    eyebrow: "WHAT WE DO",
    title: "Research support built around your needs.",
    description:
      "From the first research idea to the final academic document, we provide focused support throughout your research journey.",
    services: [
      {
        number: "01",
        title: "Proposal Support",
        description:
          "Develop clear, structured and academically sound research proposals.",
        icon: "proposal",
      },
      {
        number: "02",
        title: "Thesis & Dissertation",
        description:
          "Guidance and support throughout your thesis or dissertation journey.",
        icon: "thesis",
      },
      {
        number: "03",
        title: "Data Analysis",
        description:
          "Turn your research data into meaningful findings and clear results.",
        icon: "data",
      },
      {
        number: "04",
        title: "Literature Review",
        description:
          "Organize, evaluate and synthesize relevant academic literature.",
        icon: "literature",
      },
    ],
    button: "View All Services",
  },

  ne: {
    eyebrow: "हामी के गर्छौँ",
    title: "तपाईंको आवश्यकताअनुसार अनुसन्धान सहयोग।",
    description:
      "अनुसन्धानको प्रारम्भिक विचारदेखि अन्तिम शैक्षिक दस्तावेजसम्म तपाईंको अनुसन्धान यात्राका विभिन्न चरणमा केन्द्रित सहयोग।",
    services: [
      {
        number: "०१",
        title: "प्रस्ताव सहयोग",
        description:
          "स्पष्ट, व्यवस्थित र शैक्षिक रूपमा बलियो अनुसन्धान प्रस्ताव तयार गर्न सहयोग।",
        icon: "proposal",
      },
      {
        number: "०२",
        title: "थेसिस तथा डिसर्टेसन",
        description:
          "थेसिस वा डिसर्टेसनको सम्पूर्ण यात्रामा आवश्यक मार्गदर्शन तथा सहयोग।",
        icon: "thesis",
      },
      {
        number: "०३",
        title: "डेटा विश्लेषण",
        description:
          "अनुसन्धानका डेटालाई अर्थपूर्ण निष्कर्ष तथा स्पष्ट परिणाममा रूपान्तरण गर्न सहयोग।",
        icon: "data",
      },
      {
        number: "०४",
        title: "साहित्य समीक्षा",
        description:
          "सम्बन्धित शैक्षिक साहित्यलाई व्यवस्थित, मूल्याङ्कन तथा संश्लेषण गर्न सहयोग।",
        icon: "literature",
      },
    ],
    button: "सबै सेवाहरू हेर्नुहोस्",
  },
};

export default function ServicesPreview({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
      />

      {/* Decorative vertical line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-px bg-border"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 max-w-xl font-[var(--font-jakarta)] text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              {t.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted lg:justify-self-end lg:text-lg">
            {t.description}
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.services.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={service.number}
                className={`
                  group relative overflow-hidden
                  rounded-[2rem]
                  border p-7
                  transition-all duration-500
                  sm:p-9
                  ${
                    isFeatured
                      ? `
                        border-primary
                        bg-primary
                        text-white
                        shadow-[var(--shadow-lg)]
                      `
                      : `
                        border-border
                        bg-surface
                        text-foreground
                        shadow-[var(--shadow-sm)]
                        hover:-translate-y-2
                        hover:border-accent
                        hover:shadow-[var(--shadow-md)]
                      `
                  }
                `}
              >
                {/* Large Background Number */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute -right-3 -top-8
                    select-none
                    text-[9rem]
                    font-extrabold
                    leading-none
                    transition-all duration-500
                    group-hover:scale-110
                    ${
                      isFeatured
                        ? "text-white/[0.035]"
                        : "text-foreground/[0.035]"
                    }
                  `}
                >
                  {service.number}
                </span>

                {/* Icon + Number */}
                <div className="relative flex items-start justify-between">
                  <div
                    className={`
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      transition-all duration-300
                      group-hover:-translate-y-1
                      ${
                        isFeatured
                          ? `
                            bg-accent
                            text-primary
                            shadow-[var(--shadow-sm)]
                          `
                          : `
                            bg-primary
                            text-accent
                            shadow-[var(--shadow-sm)]
                          `
                      }
                    `}
                  >
                    <ResearchIcon
                      name={service.icon}
                      className="h-7 w-7"
                    />
                  </div>

                  <span className="text-sm font-bold text-accent">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-12">
                  <h3 className="max-w-md font-[var(--font-jakarta)] text-2xl font-bold leading-tight sm:text-3xl">
                    {service.title}
                  </h3>

                  <p
                    className={`
                      mt-4 max-w-lg
                      text-sm leading-7
                      sm:text-base
                      ${
                        isFeatured
                          ? "text-white/65"
                          : "text-muted"
                      }
                    `}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Bottom Decoration */}
                <div className="relative mt-8 flex items-center justify-between">
                  <span className="h-px w-12 bg-accent transition-all duration-500 group-hover:w-24" />

                  <span
                    className={`
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border
                      text-lg
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:border-accent
                      group-hover:bg-accent
                      group-hover:text-primary
                      ${
                        isFeatured
                          ? "border-white/15 text-white/60"
                          : "border-border text-soft"
                      }
                    `}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:justify-start">
          <Link
            href={`/${locale}/services`}
            className="
              group inline-flex items-center gap-3
              rounded-full
              bg-primary
              px-7 py-4
              text-sm font-bold
              text-white
              shadow-[var(--shadow-md)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-primary-soft
              hover:shadow-[var(--shadow-lg)]
            "
          >
            {t.button}

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}