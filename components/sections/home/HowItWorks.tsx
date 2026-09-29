import type { Locale } from "@/lib/i18n/config";
import ResearchIcon from "@/components/ui/ResearchIcon";
import type { ResearchIconName } from "@/components/ui/ResearchIcon";

const content: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
      icon: ResearchIconName;
    }[];
    statement: string;
    flow: string;
  }
> = {
  en: {
    eyebrow: "HOW IT WORKS",
    title: "A simple process from idea to outcome.",
    description:
      "A clear and structured approach keeps your research moving forward at every stage.",

    steps: [
      {
        number: "01",
        title: "Share Your Requirements",
        description:
          "Tell us about your academic project, research topic, requirements, and current stage.",
        icon: "guidance",
      },
      {
        number: "02",
        title: "Plan the Research",
        description:
          "We identify the requirements and establish a clear direction for the work.",
        icon: "project",
      },
      {
        number: "03",
        title: "Work Through the Research",
        description:
          "Get structured guidance and support through the relevant research stages.",
        icon: "research",
      },
      {
        number: "04",
        title: "Review & Refine",
        description:
          "Review the work, address requirements, and refine the final academic output.",
        icon: "writing",
      },
    ],

    statement:
      "A structured process helps keep your research focused, organized, and moving forward.",

    flow: "Idea → Research → Outcome",
  },

  ne: {
    eyebrow: "कसरी काम गर्छ?",
    title: "विचारदेखि परिणामसम्मको सरल प्रक्रिया।",
    description:
      "स्पष्ट तथा व्यवस्थित प्रक्रियाले तपाईंको अनुसन्धानलाई प्रत्येक चरणमा अगाडि बढाउन सहयोग गर्छ।",

    steps: [
      {
        number: "०१",
        title: "आफ्नो आवश्यकता बताउनुहोस्",
        description:
          "आफ्नो शैक्षिक परियोजना, अनुसन्धान विषय, आवश्यकताहरू तथा हालको चरणबारे जानकारी दिनुहोस्।",
        icon: "guidance",
      },
      {
        number: "०२",
        title: "अनुसन्धान योजना बनाउनुहोस्",
        description:
          "आवश्यकताहरू पहिचान गरी अनुसन्धान कार्यका लागि स्पष्ट दिशा निर्धारण गरिन्छ।",
        icon: "project",
      },
      {
        number: "०३",
        title: "अनुसन्धानमा अगाडि बढ्नुहोस्",
        description:
          "अनुसन्धानका सम्बन्धित चरणहरूमा व्यवस्थित मार्गदर्शन तथा सहयोग प्राप्त गर्नुहोस्।",
        icon: "research",
      },
      {
        number: "०४",
        title: "समीक्षा तथा सुधार",
        description:
          "कार्यको समीक्षा गरी आवश्यकताहरू सम्बोधन गर्नुहोस् र अन्तिम शैक्षिक कार्यलाई परिष्कृत गर्नुहोस्।",
        icon: "writing",
      },
    ],

    statement:
      "व्यवस्थित प्रक्रियाले तपाईंको अनुसन्धानलाई केन्द्रित, संगठित तथा निरन्तर अगाडि बढाउन सहयोग गर्छ।",

    flow: "विचार → अनुसन्धान → परिणाम",
  },
};

export default function HowItWorks({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-surface text-foreground transition-colors duration-300">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-soft blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        {/* Heading */}
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

        {/* Process cards */}
        <div className="relative mt-14">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-[4.5rem] hidden h-px bg-border lg:block"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, index) => (
              <article
                key={step.number}
                className={`
                  group relative rounded-[1.75rem]
                  border p-7
                  transition-all duration-500
                  hover:-translate-y-2
                  ${
                    index === 0
                      ? `
                        border-primary
                        bg-primary
                        text-white
                        shadow-[var(--shadow-lg)]
                      `
                      : `
                        border-border
                        bg-surface-elevated
                        text-foreground
                        shadow-[var(--shadow-sm)]
                        hover:border-accent
                        hover:shadow-[var(--shadow-md)]
                      `
                  }
                `}
              >
                {/* Number */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-sm font-bold text-accent">
                    {step.number}
                  </span>

                  <span
                    className={`
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border
                      text-xs
                      transition-all duration-300
                      group-hover:scale-105
                      ${
                        index === 0
                          ? `
                            border-white/15
                            text-white/60
                            group-hover:border-accent
                            group-hover:text-accent
                          `
                          : `
                            border-border
                            text-soft
                            group-hover:border-accent
                            group-hover:text-accent
                          `
                      }
                    `}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`
                    relative mt-8
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    transition-all duration-300
                    group-hover:-translate-y-1
                    ${
                      index === 0
                        ? `
                          bg-accent
                          text-primary
                          shadow-[var(--shadow-sm)]
                        `
                        : `
                          bg-primary
                          text-accent
                        `
                    }
                  `}
                >
                  <ResearchIcon
                    name={step.icon}
                    className="h-7 w-7"
                  />
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="font-[var(--font-jakarta)] text-xl font-bold leading-snug">
                    {step.title}
                  </h3>

                  <p
                    className={`
                      mt-4 text-sm leading-7
                      ${
                        index === 0
                          ? "text-white/60"
                          : "text-muted"
                      }
                    `}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-7">
                  <span className="block h-px w-10 bg-accent transition-all duration-500 group-hover:w-20" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-14 border-t border-border pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-muted">
              {t.statement}
            </p>

            <span className="text-sm font-bold tracking-wide text-accent">
              {t.flow}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}