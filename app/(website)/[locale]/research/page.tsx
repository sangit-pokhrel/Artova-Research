import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "RESEARCH SUPPORT",
    title: "A structured approach to turning research ideas into academic work.",
    intro:
      "Good research requires more than collecting information. It requires a clear question, appropriate methodology, reliable evidence, and a structured way of presenting the findings.",

    processTitle: "Our Research Approach",

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

    principlesTitle: "Research Principles",

    principles: [
      {
        title: "Clarity",
        description:
          "Research should have a clear problem, purpose, direction, and structure.",
      },
      {
        title: "Evidence",
        description:
          "Academic arguments should be supported by relevant and credible evidence.",
      },
      {
        title: "Consistency",
        description:
          "Research questions, objectives, methodology, analysis, and conclusions should work together logically.",
      },
      {
        title: "Integrity",
        description:
          "Responsible research practices and academic integrity should remain central throughout the research process.",
      },
    ],

    ctaTitle: "Have a research idea?",
    ctaDescription:
      "Share your topic or research requirements with us and start a conversation about your project.",
    ctaButton: "Start a Conversation",
  },

  ne: {
    eyebrow: "अनुसन्धान सहयोग",
    title: "अनुसन्धानका विचारलाई व्यवस्थित शैक्षिक कार्यमा रूपान्तरण गर्ने दृष्टिकोण।",
    intro:
      "राम्रो अनुसन्धानका लागि सूचना सङ्कलन मात्र पर्याप्त हुँदैन। स्पष्ट प्रश्न, उपयुक्त अनुसन्धान विधि, विश्वसनीय प्रमाण तथा निष्कर्ष प्रस्तुत गर्ने व्यवस्थित प्रक्रिया आवश्यक हुन्छ।",

    processTitle: "हाम्रो अनुसन्धान प्रक्रिया",

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

    principlesTitle: "अनुसन्धानका आधारहरू",

    principles: [
      {
        title: "स्पष्टता",
        description:
          "अनुसन्धानमा स्पष्ट समस्या, उद्देश्य, दिशा तथा संरचना हुनुपर्छ।",
      },
      {
        title: "प्रमाण",
        description:
          "शैक्षिक तर्कहरू सम्बन्धित तथा विश्वसनीय प्रमाणद्वारा समर्थित हुनुपर्छ।",
      },
      {
        title: "एकरूपता",
        description:
          "अनुसन्धान प्रश्न, उद्देश्य, विधि, विश्लेषण तथा निष्कर्षहरू तार्किक रूपमा एकअर्कासँग सम्बन्धित हुनुपर्छ।",
      },
      {
        title: "इमानदारी",
        description:
          "जिम्मेवार अनुसन्धान अभ्यास तथा शैक्षिक इमानदारी अनुसन्धान प्रक्रियाभरि महत्वपूर्ण रहनुपर्छ।",
      },
    ],

    ctaTitle: "तपाईंसँग अनुसन्धानको विचार छ?",
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
      <section className="bg-white dark:bg-[#071426]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900]">
              {t.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-[#0B1F3A] dark:text-white sm:text-6xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#0B1F3A]/65 dark:text-white/65">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] dark:bg-[#0B1F3A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A900]">
              {t.processTitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[#0B1F3A]/10 bg-white p-8 dark:border-white/10 dark:bg-[#071426]"
              >
                <span className="text-sm font-bold text-[#D9A900]">
                  {step.number}
                </span>

                <h2 className="mt-5 text-2xl font-semibold text-[#0B1F3A] dark:text-white">
                  {step.title}
                </h2>

                <p className="mt-4 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#071426]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A900]">
              {t.principlesTitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-[#0B1F3A]/10 p-7 dark:border-white/10"
              >
                <h2 className="text-xl font-semibold text-[#0B1F3A] dark:text-white">
                  {principle.title}
                </h2>

                <p className="mt-3 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] dark:bg-[#D9A900]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <h2 className="text-4xl font-bold tracking-tight text-white dark:text-[#071426] sm:text-5xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 dark:text-[#071426]/70">
            {t.ctaDescription}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-9 inline-flex rounded-full bg-[#D9A900] px-7 py-3.5 font-semibold text-[#071426] transition hover:bg-[#f0c21a] dark:bg-[#0B1F3A] dark:text-white dark:hover:bg-[#102d54]"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}