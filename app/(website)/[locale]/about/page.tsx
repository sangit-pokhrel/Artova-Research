import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "ABOUT ARTOVA RESEARCH",
    title: "Helping students and researchers move forward with clarity.",
    intro:
      "Artova Research provides academic and research support for students and researchers working on projects, proposals, theses, dissertations, and other academic work.",

    missionLabel: "OUR MISSION",
    missionTitle: "Making the research journey more structured and manageable.",
    mission:
      "Our mission is to provide practical academic guidance and research-focused support that helps students and researchers understand their requirements, organize their work, and move forward with greater clarity.",

    approachLabel: "OUR APPROACH",
    approachTitle: "Every research project deserves a thoughtful approach.",
    approach:
      "Research projects have different academic contexts, requirements, and challenges. We focus on understanding those requirements and providing structured support throughout the relevant stages of the research process.",

    valuesLabel: "WHAT WE VALUE",
    values: [
      {
        number: "01",
        title: "Clarity",
        description:
          "Making complex academic and research requirements easier to understand.",
      },
      {
        number: "02",
        title: "Academic Quality",
        description:
          "Following structured academic practices and maintaining attention to research quality.",
      },
      {
        number: "03",
        title: "Practical Support",
        description:
          "Providing guidance that can be applied directly to your research work.",
      },
      {
        number: "04",
        title: "Responsible Research",
        description:
          "Encouraging proper research practices, academic integrity, and responsible use of information.",
      },
    ],

    ctaLabel: "READY TO MOVE FORWARD?",
    ctaTitle: "Let's work through your research requirements.",
    ctaButton: "Start a Conversation",
  },

  ne: {
    eyebrow: "आर्टोभा रिसर्चको बारेमा",
    title:
      "विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई स्पष्टताका साथ अगाडि बढ्न सहयोग।",
    intro:
      "आर्टोभा रिसर्चले परियोजना, प्रस्ताव, थेसिस, डिसर्टेसन तथा अन्य शैक्षिक कार्यमा संलग्न विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई शैक्षिक तथा अनुसन्धान सहयोग प्रदान गर्दछ।",

    missionLabel: "हाम्रो उद्देश्य",
    missionTitle:
      "अनुसन्धान यात्रालाई अझ व्यवस्थित र व्यवस्थापन गर्न सहज बनाउने।",
    mission:
      "विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई आफ्ना आवश्यकताहरू बुझ्न, कार्यलाई व्यवस्थित गर्न तथा अझ स्पष्टताका साथ अगाडि बढ्न व्यावहारिक शैक्षिक मार्गदर्शन तथा अनुसन्धान केन्द्रित सहयोग प्रदान गर्नु हाम्रो उद्देश्य हो।",

    approachLabel: "हाम्रो दृष्टिकोण",
    approachTitle:
      "प्रत्येक अनुसन्धान परियोजनालाई विचारपूर्वक अघि बढाउन आवश्यक हुन्छ।",
    approach:
      "अनुसन्धान परियोजनाहरूका शैक्षिक सन्दर्भ, आवश्यकता तथा चुनौतीहरू फरक हुन्छन्। हामी ती आवश्यकताहरू बुझेर अनुसन्धान प्रक्रियाका सम्बन्धित चरणहरूमा व्यवस्थित सहयोग प्रदान गर्न केन्द्रित हुन्छौँ।",

    valuesLabel: "हाम्रा मूल्यहरू",
    values: [
      {
        number: "०१",
        title: "स्पष्टता",
        description:
          "जटिल शैक्षिक तथा अनुसन्धान आवश्यकताहरूलाई बुझ्न सहज बनाउने।",
      },
      {
        number: "०२",
        title: "शैक्षिक गुणस्तर",
        description:
          "व्यवस्थित शैक्षिक अभ्यासहरू पालना गर्दै अनुसन्धानको गुणस्तरमा ध्यान दिने।",
      },
      {
        number: "०३",
        title: "व्यावहारिक सहयोग",
        description:
          "तपाईंको अनुसन्धान कार्यमा प्रत्यक्ष रूपमा प्रयोग गर्न सकिने मार्गदर्शन प्रदान गर्ने।",
      },
      {
        number: "०४",
        title: "जिम्मेवार अनुसन्धान",
        description:
          "उचित अनुसन्धान अभ्यास, शैक्षिक इमानदारी तथा सूचनाको जिम्मेवार प्रयोगलाई प्रोत्साहन गर्ने।",
      },
    ],

    ctaLabel: "अगाडि बढ्न तयार हुनुहुन्छ?",
    ctaTitle: "तपाईंको अनुसन्धान आवश्यकतामा सँगै काम गरौँ।",
    ctaButton: "कुरा सुरु गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default async function AboutPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "ne") {
    notFound();
  }

  const t = content[locale];

  return (
    <>
      {/* Hero */}
      <section className="bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-primary p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {t.missionLabel}
              </p>

              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                {t.missionTitle}
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/60">
                {t.mission}
              </p>
            </article>

            <article className="theme-card rounded-3xl p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {t.approachLabel}
              </p>

              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                {t.approachTitle}
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-muted">
                {t.approach}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.valuesLabel}
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((value) => (
              <article
                key={value.number}
                className="
                  theme-card
                  group rounded-3xl
                  p-7
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-accent
                "
              >
                <span className="text-sm font-bold text-accent">
                  {value.number}
                </span>

                <h2 className="mt-10 text-xl font-bold text-foreground">
                  {value.title}
                </h2>

                <p className="mt-3 leading-7 text-muted">
                  {value.description}
                </p>

                <div className="mt-7 h-px w-8 bg-accent transition-all duration-300 group-hover:w-14" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 pb-24 text-foreground transition-colors duration-300 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-4xl bg-primary px-7 py-16 text-center text-white sm:px-12 sm:py-20 lg:px-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
                {t.ctaLabel}
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                {t.ctaTitle}
              </h2>

              <a
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
                {t.ctaButton}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}