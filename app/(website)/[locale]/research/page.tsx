import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "RESEARCH SUPPORT",
    title: "A structured approach to turning research ideas into academic work.",
    intro:
      "Good research requires more than collecting information. It requires a clear question, appropriate methodology, reliable evidence, and a structured way of presenting the findings.",

    processLabel: "OUR RESEARCH APPROACH",
    processTitle: "From research problem to a clearer academic outcome.",

    steps: [
      {
        number: "01",
        title: "Understand the Research Problem",
        description:
          "We begin by understanding your topic, research problem, academic requirements, and expected outcomes.",
      },
      {
        number: "02",
        title: "Define the Research Direction",
        description:
          "Clarify research questions, objectives, scope, variables, concepts, and the overall direction of the study.",
      },
      {
        number: "03",
        title: "Develop the Methodology",
        description:
          "Identify appropriate research designs, methods, sampling strategies, data collection techniques, and analytical approaches.",
      },
      {
        number: "04",
        title: "Work with Evidence",
        description:
          "Organize relevant literature and research data while maintaining a structured and evidence-based approach.",
      },
      {
        number: "05",
        title: "Analyze & Interpret",
        description:
          "Support the analysis and interpretation of findings so that the results are connected clearly to the research objectives.",
      },
      {
        number: "06",
        title: "Review & Refine",
        description:
          "Review the structure, academic presentation, clarity, consistency, and overall quality of the research work.",
      },
    ],

    principlesLabel: "RESEARCH PRINCIPLES",
    principlesTitle: "The principles that guide our research support.",

    principles: [
      {
        number: "01",
        title: "Clarity",
        description:
          "Research should have a clear problem, purpose, direction, and structure.",
      },
      {
        number: "02",
        title: "Evidence",
        description:
          "Academic arguments should be supported by relevant and credible evidence.",
      },
      {
        number: "03",
        title: "Consistency",
        description:
          "Research questions, objectives, methodology, analysis, and conclusions should work together logically.",
      },
      {
        number: "04",
        title: "Integrity",
        description:
          "Responsible research practices and academic integrity should remain central throughout the research process.",
      },
    ],

    ctaLabel: "HAVE A RESEARCH IDEA?",
    ctaTitle: "Let's discuss your research requirements.",
    ctaDescription:
      "Share your topic or research requirements with us and start a conversation about your project.",
    ctaButton: "Start a Conversation",
  },

  ne: {
    eyebrow: "अनुसन्धान सहयोग",
    title:
      "अनुसन्धानका विचारलाई व्यवस्थित शैक्षिक कार्यमा रूपान्तरण गर्ने दृष्टिकोण।",
    intro:
      "राम्रो अनुसन्धानका लागि सूचना सङ्कलन मात्र पर्याप्त हुँदैन। स्पष्ट प्रश्न, उपयुक्त अनुसन्धान विधि, विश्वसनीय प्रमाण तथा निष्कर्ष प्रस्तुत गर्ने व्यवस्थित प्रक्रिया आवश्यक हुन्छ।",

    processLabel: "हाम्रो अनुसन्धान प्रक्रिया",
    processTitle: "अनुसन्धान समस्यादेखि स्पष्ट शैक्षिक परिणामसम्म।",

    steps: [
      {
        number: "०१",
        title: "अनुसन्धान समस्या बुझ्ने",
        description:
          "तपाईंको विषय, अनुसन्धान समस्या, शैक्षिक आवश्यकताहरू तथा अपेक्षित परिणामहरू बुझेर प्रक्रिया सुरु गरिन्छ।",
      },
      {
        number: "०२",
        title: "अनुसन्धानको दिशा निर्धारण गर्ने",
        description:
          "अनुसन्धान प्रश्न, उद्देश्य, क्षेत्र, चर, अवधारणा तथा अध्ययनको समग्र दिशालाई स्पष्ट बनाउने।",
      },
      {
        number: "०३",
        title: "अनुसन्धान विधि विकास गर्ने",
        description:
          "उपयुक्त अनुसन्धान डिजाइन, विधि, नमुना छनोट, डेटा सङ्कलन तथा विश्लेषणका उपायहरू पहिचान गर्ने।",
      },
      {
        number: "०४",
        title: "प्रमाणसँग काम गर्ने",
        description:
          "सम्बन्धित साहित्य तथा अनुसन्धान डेटा व्यवस्थित गर्दै प्रमाणमा आधारित अनुसन्धान दृष्टिकोण अपनाउने।",
      },
      {
        number: "०५",
        title: "विश्लेषण तथा व्याख्या गर्ने",
        description:
          "अनुसन्धानका उद्देश्यसँग सम्बन्धित हुने गरी निष्कर्षहरूको विश्लेषण तथा व्याख्या गर्न सहयोग गर्ने।",
      },
      {
        number: "०६",
        title: "समीक्षा तथा परिष्करण गर्ने",
        description:
          "अनुसन्धानको संरचना, शैक्षिक प्रस्तुति, स्पष्टता, एकरूपता तथा समग्र गुणस्तरको समीक्षा गर्ने।",
      },
    ],

    principlesLabel: "अनुसन्धानका आधारहरू",
    principlesTitle: "हाम्रो अनुसन्धान सहयोगलाई मार्गदर्शन गर्ने आधारहरू।",

    principles: [
      {
        number: "०१",
        title: "स्पष्टता",
        description:
          "अनुसन्धानमा स्पष्ट समस्या, उद्देश्य, दिशा तथा संरचना हुनुपर्छ।",
      },
      {
        number: "०२",
        title: "प्रमाण",
        description:
          "शैक्षिक तर्कहरू सम्बन्धित तथा विश्वसनीय प्रमाणद्वारा समर्थित हुनुपर्छ।",
      },
      {
        number: "०३",
        title: "एकरूपता",
        description:
          "अनुसन्धान प्रश्न, उद्देश्य, विधि, विश्लेषण तथा निष्कर्षहरू तार्किक रूपमा एकअर्कासँग सम्बन्धित हुनुपर्छ।",
      },
      {
        number: "०४",
        title: "इमानदारी",
        description:
          "जिम्मेवार अनुसन्धान अभ्यास तथा शैक्षिक इमानदारी अनुसन्धान प्रक्रियाभरि महत्वपूर्ण रहनुपर्छ।",
      },
    ],

    ctaLabel: "तपाईंसँग अनुसन्धानको विचार छ?",
    ctaTitle: "तपाईंको अनुसन्धान आवश्यकताबारे छलफल गरौँ।",
    ctaDescription:
      "आफ्नो विषय वा अनुसन्धान आवश्यकताबारे हामीलाई जानकारी दिनुहोस् र आफ्नो परियोजनाबारे छलफल सुरु गर्नुहोस्।",
    ctaButton: "छलफल सुरु गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default async function ResearchPage({
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

      {/* Research Process */}
      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.processLabel}
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.processTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {t.steps.map((step, index) => (
              <article
                key={step.number}
                className={`
                  group relative overflow-hidden
                  rounded-3xl p-8
                  transition duration-300
                  hover:-translate-y-1
                  sm:p-10
                  ${
                    index === 0
                      ? `
                        bg-primary
                        text-white
                        shadow-[var(--shadow-lg)]
                      `
                      : `
                        theme-card
                      `
                  }
                `}
              >
                <span
                  aria-hidden="true"
                  className={`
                    absolute -right-3 -top-8
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
                  {step.number}
                </span>

                <div className="relative">
                  <span className="text-sm font-bold text-accent">
                    {step.number}
                  </span>

                  <h3 className="mt-10 max-w-md text-2xl font-bold leading-tight">
                    {step.title}
                  </h3>

                  <p
                    className={`
                      mt-4 max-w-lg leading-7
                      ${
                        index === 0
                          ? "text-white/60"
                          : "text-muted"
                      }
                    `}
                  >
                    {step.description}
                  </p>

                  <div className="mt-7 h-px w-9 bg-accent transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.principlesLabel}
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.principlesTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.principles.map((principle) => (
              <article
                key={principle.number}
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
                  {principle.number}
                </span>

                <h3 className="mt-8 text-xl font-bold text-foreground">
                  {principle.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {principle.description}
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