import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "RESOURCES",
    title: "Useful resources to help you move forward with your research.",
    intro:
      "Explore practical academic resources designed to help you understand research concepts, organize your work, and approach your academic journey with greater clarity.",

    resources: [
      {
        number: "01",
        title: "Research Guides",
        description:
          "Practical guidance on research planning, topic development, research questions, objectives, and academic structure.",
      },
      {
        number: "02",
        title: "Academic Writing",
        description:
          "Learn about academic writing structure, clarity, organization, citations, referencing, and presenting research effectively.",
      },
      {
        number: "03",
        title: "Research Methodology",
        description:
          "Understand research designs, qualitative and quantitative approaches, sampling, data collection, and research methods.",
      },
      {
        number: "04",
        title: "Literature Review",
        description:
          "Resources to help you search for academic literature, organize sources, identify research gaps, and develop literature reviews.",
      },
      {
        number: "05",
        title: "Data Analysis",
        description:
          "Guidance on understanding research data, selecting analytical approaches, interpreting results, and presenting findings.",
      },
      {
        number: "06",
        title: "Research Tips",
        description:
          "Simple and practical tips for managing your research process, improving productivity, and avoiding common academic challenges.",
      },
    ],

    insightsLabel: "RESEARCH INSIGHTS",
    blogTitle: "Practical research knowledge, coming soon.",
    blogDescription:
      "We are building a collection of articles and practical research insights. More resources will be added here as the platform grows.",

    ctaLabel: "NEED SOMETHING SPECIFIC?",
    ctaTitle: "Looking for a particular resource?",
    ctaDescription:
      "If you cannot find the resource you need, contact us and tell us what you are working on.",
    ctaButton: "Contact Us",
  },

  ne: {
    eyebrow: "स्रोत सामग्री",
    title: "तपाईंको अनुसन्धानलाई अगाडि बढाउन उपयोगी स्रोतहरू।",
    intro:
      "अनुसन्धानका अवधारणाहरू बुझ्न, आफ्नो काम व्यवस्थित गर्न तथा शैक्षिक यात्रालाई अझ स्पष्ट रूपमा अगाडि बढाउन सहयोग गर्ने व्यावहारिक स्रोतहरू हेर्नुहोस्।",

    resources: [
      {
        number: "०१",
        title: "अनुसन्धान मार्गदर्शन",
        description:
          "अनुसन्धान योजना, विषय विकास, अनुसन्धान प्रश्न, उद्देश्य तथा शैक्षिक संरचनासम्बन्धी व्यावहारिक मार्गदर्शन।",
      },
      {
        number: "०२",
        title: "शैक्षिक लेखन",
        description:
          "शैक्षिक लेखनको संरचना, स्पष्टता, संगठन, उद्धरण, सन्दर्भ तथा अनुसन्धान प्रभावकारी रूपमा प्रस्तुत गर्ने तरिकाबारे जानकारी।",
      },
      {
        number: "०३",
        title: "अनुसन्धान विधि",
        description:
          "अनुसन्धान डिजाइन, गुणात्मक तथा परिमाणात्मक विधि, नमुना छनोट, डेटा सङ्कलन तथा अनुसन्धान विधिहरू बुझ्न सहयोग।",
      },
      {
        number: "०४",
        title: "साहित्य समीक्षा",
        description:
          "शैक्षिक साहित्य खोज्ने, स्रोतहरू व्यवस्थित गर्ने, अनुसन्धानका खाली स्थान पहिचान गर्ने तथा साहित्य समीक्षा विकास गर्ने स्रोतहरू।",
      },
      {
        number: "०५",
        title: "डेटा विश्लेषण",
        description:
          "अनुसन्धान डेटा बुझ्ने, उपयुक्त विश्लेषण विधि छनोट गर्ने, परिणाम व्याख्या गर्ने तथा निष्कर्ष प्रस्तुत गर्ने मार्गदर्शन।",
      },
      {
        number: "०६",
        title: "अनुसन्धान सुझावहरू",
        description:
          "अनुसन्धान प्रक्रिया व्यवस्थापन, उत्पादकता सुधार तथा सामान्य शैक्षिक चुनौतीहरूबाट बच्न सहयोग गर्ने व्यावहारिक सुझावहरू।",
      },
    ],

    insightsLabel: "अनुसन्धान सामग्री",
    blogTitle: "व्यावहारिक अनुसन्धान सामग्री चाँडै आउँदैछ।",
    blogDescription:
      "हामी व्यावहारिक अनुसन्धान सामग्री तथा लेखहरूको संग्रह तयार गर्दैछौँ। प्लेटफर्म विस्तार हुँदै जाँदा थप स्रोतहरू यहाँ थपिनेछन्।",

    ctaLabel: "तपाईंलाई कुनै विशेष स्रोत चाहिन्छ?",
    ctaTitle: "तपाईंलाई आवश्यक स्रोत भेटिएन?",
    ctaDescription:
      "तपाईंलाई आवश्यक स्रोत यहाँ भेटिएन भने हामीलाई सम्पर्क गर्नुहोस् र तपाईंले गरिरहेको कामबारे जानकारी दिनुहोस्।",
    ctaButton: "सम्पर्क गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default async function ResourcesPage({
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

      {/* Resources */}
      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.resources.map((resource, index) => (
              <article
                key={resource.number}
                className={`
                  group relative overflow-hidden
                  rounded-3xl p-8
                  transition duration-300
                  hover:-translate-y-1
                  sm:p-9
                  ${
                    index === 0
                      ? "bg-primary text-white shadow-[var(--shadow-lg)]"
                      : "theme-card"
                  }
                `}
              >
                <span
                  aria-hidden="true"
                  className={`
                    absolute -right-3 -top-7
                    text-[8rem]
                    font-bold
                    leading-none
                    ${
                      index === 0
                        ? "text-white/[0.04]"
                        : "text-foreground/[0.035]"
                    }
                  `}
                >
                  {resource.number}
                </span>

                <div className="relative">
                  <span className="text-sm font-bold text-accent">
                    {resource.number}
                  </span>

                  <h2 className="mt-10 text-2xl font-bold leading-tight">
                    {resource.title}
                  </h2>

                  <p
                    className={`
                      mt-4 leading-7
                      ${index === 0 ? "text-white/60" : "text-muted"}
                    `}
                  >
                    {resource.description}
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-9 bg-accent transition-all duration-300 group-hover:w-16" />

                    <span
                      className={`
                        text-xs font-semibold uppercase tracking-wider
                        ${index === 0 ? "text-white/40" : "theme-soft-text"}
                      `}
                    >
                      Coming soon
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
            {t.insightsLabel}
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.blogTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            {t.blogDescription}
          </p>
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

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {t.ctaTitle}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
                {t.ctaDescription}
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
                {t.ctaButton}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}