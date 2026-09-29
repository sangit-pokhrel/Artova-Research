import type { Locale } from "@/lib/i18n/config";
import ResearchIcon from "@/components/ui/ResearchIcon";

const content = {
  en: {
    eyebrow: "WHY CHOOSE US",
    title: "Research support that keeps your work moving.",
    description:
      "We focus on making complex academic work more structured, understandable, and manageable.",
    points: [
      {
        icon: "guidance" as const,
        title: "Clear Guidance",
        description:
          "Understand what needs to be done and how to approach each stage of your research.",
      },
      {
        icon: "research" as const,
        title: "Research Focus",
        description:
          "Keep your academic work aligned with your research objectives and requirements.",
      },
      {
        icon: "project" as const,
        title: "Structured Process",
        description:
          "Work through your research in clear and manageable stages.",
      },
      {
        icon: "writing" as const,
        title: "Academic Quality",
        description:
          "Present your research work in a clear, organized, and academically appropriate way.",
      },
    ],
  },

  ne: {
    eyebrow: "हामीलाई किन रोज्ने?",
    title: "तपाईंको अनुसन्धानलाई अगाडि बढाउने सहयोग।",
    description:
      "जटिल शैक्षिक कार्यलाई अझ व्यवस्थित, बुझ्न सजिलो र व्यवस्थापन गर्न सहज बनाउने हाम्रो मुख्य उद्देश्य हो।",
    points: [
      {
        icon: "guidance" as const,
        title: "स्पष्ट मार्गदर्शन",
        description:
          "अनुसन्धानको प्रत्येक चरणमा के गर्ने र कसरी अगाडि बढ्ने भन्ने स्पष्ट बुझाइ।",
      },
      {
        icon: "research" as const,
        title: "अनुसन्धानमा केन्द्रित",
        description:
          "तपाईंको शैक्षिक कार्यलाई अनुसन्धानका उद्देश्य तथा आवश्यकतासँग जोडेर अगाडि बढाउन सहयोग।",
      },
      {
        icon: "project" as const,
        title: "व्यवस्थित प्रक्रिया",
        description:
          "अनुसन्धानलाई स्पष्ट तथा व्यवस्थापन गर्न सहज चरणहरूमा अगाडि बढाउने प्रक्रिया।",
      },
      {
        icon: "writing" as const,
        title: "शैक्षिक गुणस्तर",
        description:
          "अनुसन्धान कार्यलाई स्पष्ट, व्यवस्थित तथा शैक्षिक रूपमा उपयुक्त तरिकाले प्रस्तुत गर्न सहयोग।",
      },
    ],
  },
} satisfies Record<Locale, object>;

export default function WhyChooseUs({
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

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              {t.eyebrow}
            </p>
          </div>

          <h2 className="mt-5 font-[var(--font-jakarta)] text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {t.description}
          </p>
        </div>

        {/* Points */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.points.map((point, index) => (
            <article
              key={point.title}
              className="
                theme-card
                group relative
                rounded-[1.75rem]
                border p-7
                transition-all duration-300
                hover:-translate-y-2
                hover:border-accent
                hover:shadow-[var(--shadow-md)]
              "
            >
              {/* Number */}
              <span
                aria-hidden="true"
                className="absolute right-6 top-5 text-4xl font-extrabold text-foreground/[0.035]"
              >
                0{index + 1}
              </span>

              {/* Icon */}
              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-primary
                  text-accent
                  shadow-[var(--shadow-sm)]
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:bg-accent
                  group-hover:text-primary
                "
              >
                <ResearchIcon
                  name={point.icon}
                  className="h-7 w-7"
                />
              </div>

              {/* Content */}
              <h3 className="mt-8 font-[var(--font-jakarta)] text-xl font-bold text-foreground">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {point.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-7 h-px w-10 bg-accent transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}