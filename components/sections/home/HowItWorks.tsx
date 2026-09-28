import type { Locale } from "@/lib/i18n/config";

const content = {
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
      },
      {
        number: "02",
        title: "Plan the Research",
        description:
          "We identify the requirements and establish a clear direction for the work.",
      },
      {
        number: "03",
        title: "Work Through the Research",
        description:
          "Get structured guidance and support through the relevant research stages.",
      },
      {
        number: "04",
        title: "Review & Refine",
        description:
          "Review the work, address requirements, and refine the final academic output.",
      },
    ],
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
      },
      {
        number: "०२",
        title: "अनुसन्धान योजना बनाउनुहोस्",
        description:
          "आवश्यकताहरू पहिचान गरी अनुसन्धान कार्यका लागि स्पष्ट दिशा निर्धारण गरिन्छ।",
      },
      {
        number: "०३",
        title: "अनुसन्धानमा अगाडि बढ्नुहोस्",
        description:
          "अनुसन्धानका सम्बन्धित चरणहरूमा व्यवस्थित मार्गदर्शन तथा सहयोग प्राप्त गर्नुहोस्।",
      },
      {
        number: "०४",
        title: "समीक्षा तथा सुधार",
        description:
          "कार्यको समीक्षा गरी आवश्यकताहरू सम्बोधन गर्नुहोस् र अन्तिम शैक्षिक कार्यलाई परिष्कृत गर्नुहोस्।",
      },
    ],
  },
} satisfies Record<Locale, object>;

export default function HowItWorks({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="bg-[#F7F8FA] dark:bg-[#0B1F3A]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900]">
            {t.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] dark:text-white sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B1F3A]/65 dark:text-white/65">
            {t.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-[#0B1F3A]/10 bg-white p-7 dark:border-white/10 dark:bg-[#071426]"
            >
              <span className="text-sm font-bold text-[#D9A900]">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A] dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}