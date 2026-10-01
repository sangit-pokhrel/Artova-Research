import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/ui/Button";
import ResearchIcon from "@/components/ui/ResearchIcon";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";
import type { Locale } from "@/lib/i18n/config";
import { images } from "@/lib/images";

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
        icon: "guidance" as const,
        image: images.howItWorks.shareYourRequirements,
      },
      {
        number: "02",
        title: "Define the Research Direction",
        description:
          "Clarify research questions, objectives, scope, variables, concepts, and the overall direction of the study.",
        icon: "project" as const,
        image: images.howItWorks.planTheResearch,
      },
      {
        number: "03",
        title: "Develop the Methodology",
        description:
          "Identify appropriate research designs, methods, sampling strategies, data collection techniques, and analytical approaches.",
        icon: "methodology" as const,
        image: images.hero.aboutHero,
      },
      {
        number: "04",
        title: "Work with Evidence",
        description:
          "Organize relevant literature and research data while maintaining a structured and evidence-based approach.",
        icon: "literature" as const,
        image: images.services.literatureReview,
      },
      {
        number: "05",
        title: "Analyze & Interpret",
        description:
          "Support the analysis and interpretation of findings so that the results are connected clearly to the research objectives.",
        icon: "data" as const,
        image: images.services.dataAnalysis,
      },
      {
        number: "06",
        title: "Review & Refine",
        description:
          "Review the structure, academic presentation, clarity, consistency, and overall quality of the research work.",
        icon: "writing" as const,
        image: images.services.proposalSupport,
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
        icon: "guidance" as const,
      },
      {
        number: "02",
        title: "Evidence",
        description:
          "Academic arguments should be supported by relevant and credible evidence.",
        icon: "research" as const,
      },
      {
        number: "03",
        title: "Consistency",
        description:
          "Research questions, objectives, methodology, analysis, and conclusions should work together logically.",
        icon: "project" as const,
      },
      {
        number: "04",
        title: "Integrity",
        description:
          "Responsible research practices and academic integrity should remain central throughout the research process.",
        icon: "education" as const,
      },
    ],

    visualEyebrow: "RESEARCH WITH DIRECTION",
    visualTitle: "Clearer steps. Better structure. More confidence.",
    visualDescription:
      "A structured research process helps keep your work focused, organized, and connected from the initial idea through to the final academic outcome.",
    visualImageAlt: "Working through research",

    ctaLabel: "HAVE A RESEARCH IDEA?",
    ctaTitle: "Let's discuss your research requirements.",
    ctaDescription:
      "Share your topic or research requirements with us and start a conversation about your project.",
    ctaButton: "Start a Conversation",
    ctaImageAlt: "Research guidance and support",
    ctaBadge: "Research • Guidance • Support",
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
        icon: "guidance" as const,
        image: images.howItWorks.shareYourRequirements,
      },
      {
        number: "०२",
        title: "अनुसन्धानको दिशा निर्धारण गर्ने",
        description:
          "अनुसन्धान प्रश्न, उद्देश्य, क्षेत्र, चर, अवधारणा तथा अध्ययनको समग्र दिशालाई स्पष्ट बनाउने।",
        icon: "project" as const,
        image: images.howItWorks.planTheResearch,
      },
      {
        number: "०३",
        title: "अनुसन्धान विधि विकास गर्ने",
        description:
          "उपयुक्त अनुसन्धान डिजाइन, विधि, नमुना छनोट, डेटा सङ्कलन तथा विश्लेषणका उपायहरू पहिचान गर्ने।",
        icon: "methodology" as const,
        image: images.hero.aboutHero,
      },
      {
        number: "०४",
        title: "प्रमाणसँग काम गर्ने",
        description:
          "सम्बन्धित साहित्य तथा अनुसन्धान डेटा व्यवस्थित गर्दै प्रमाणमा आधारित अनुसन्धान दृष्टिकोण अपनाउने।",
        icon: "literature" as const,
        image: images.services.literatureReview,
      },
      {
        number: "०५",
        title: "विश्लेषण तथा व्याख्या गर्ने",
        description:
          "अनुसन्धानका उद्देश्यसँग सम्बन्धित हुने गरी निष्कर्षहरूको विश्लेषण तथा व्याख्या गर्न सहयोग गर्ने।",
        icon: "data" as const,
        image: images.services.dataAnalysis,
      },
      {
        number: "०६",
        title: "समीक्षा तथा परिष्करण गर्ने",
        description:
          "अनुसन्धानको संरचना, शैक्षिक प्रस्तुति, स्पष्टता, एकरूपता तथा समग्र गुणस्तरको समीक्षा गर्ने।",
        icon: "writing" as const,
        image: images.services.proposalSupport,
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
        icon: "guidance" as const,
      },
      {
        number: "०२",
        title: "प्रमाण",
        description:
          "शैक्षिक तर्कहरू सम्बन्धित तथा विश्वसनीय प्रमाणद्वारा समर्थित हुनुपर्छ।",
        icon: "research" as const,
      },
      {
        number: "०३",
        title: "एकरूपता",
        description:
          "अनुसन्धान प्रश्न, उद्देश्य, विधि, विश्लेषण तथा निष्कर्षहरू तार्किक रूपमा एकअर्कासँग सम्बन्धित हुनुपर्छ।",
        icon: "project" as const,
      },
      {
        number: "०४",
        title: "इमानदारी",
        description:
          "जिम्मेवार अनुसन्धान अभ्यास तथा शैक्षिक इमानदारी अनुसन्धान प्रक्रियाभरि महत्वपूर्ण रहनुपर्छ।",
        icon: "education" as const,
      },
    ],

    visualEyebrow: "दिशासहितको अनुसन्धान",
    visualTitle: "स्पष्ट चरण। राम्रो संरचना। थप आत्मविश्वास।",
    visualDescription:
      "व्यवस्थित अनुसन्धान प्रक्रियाले प्रारम्भिक विचारदेखि अन्तिम शैक्षिक परिणामसम्म तपाईंको कामलाई केन्द्रित, व्यवस्थित र स्पष्ट राख्न सहयोग गर्छ।",
    visualImageAlt: "अनुसन्धानमा काम गर्दै",

    ctaLabel: "तपाईंसँग अनुसन्धानको विचार छ?",
    ctaTitle: "तपाईंको अनुसन्धान आवश्यकताबारे छलफल गरौँ।",
    ctaDescription:
      "आफ्नो विषय वा अनुसन्धान आवश्यकताबारे हामीलाई जानकारी दिनुहोस् र आफ्नो परियोजनाबारे छलफल सुरु गर्नुहोस्।",
    ctaButton: "छलफल सुरु गर्नुहोस्",
    ctaImageAlt: "अनुसन्धान मार्गदर्शन तथा सहयोग",
    ctaBadge: "अनुसन्धान • मार्गदर्शन • सहयोग",
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
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-background text-foreground transition-colors duration-300">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-purple-bright/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-interactive/8 blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH APPROACH
      ========================================================= */}
      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
          {/* Section heading */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.processLabel}
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.processTitle}
            </h2>
          </div>

          {/* Process cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {t.steps.map((step) => (
              <article
                key={step.number}
                className="
                  group relative overflow-hidden
                  rounded-3xl
                  border border-border
                  bg-surface-elevated
                  shadow-[var(--shadow-sm)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-purple-bright/40
                  hover:shadow-[var(--shadow-lg)]
                "
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#17033F]/80
                      via-[#17033F]/20
                      to-transparent
                    "
                  />

                  {/* Number */}
                  <div className="absolute left-5 top-5">
                    <span
                      className="
                        inline-flex h-12 min-w-12
                        items-center justify-center
                        rounded-full
                        border border-white/25
                        bg-black/20
                        px-3
                        text-sm font-bold
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Image action */}
                  <div
                    className="
                      absolute bottom-5 right-5
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      bg-purple-bright
                      text-white
                      shadow-[0_10px_25px_rgba(177,0,232,0.28)]
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:bg-purple-electric
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="text-lg leading-none"
                    >
                      ↗
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <ResearchIconContainer variant="card">
                      <ResearchIcon name={step.icon} />
                    </ResearchIconContainer>

                    <span
                      className="
                        mt-1
                        text-sm font-semibold
                        text-purple-brand
                        opacity-0
                        transition-all duration-300
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-lg text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-muted">
                    {step.description}
                  </p>

                  <div
                    className="
                      mt-7
                      h-px w-10
                      bg-accent
                      transition-all duration-300
                      group-hover:w-20
                    "
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}
      <section className="border-y border-border bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.principlesLabel}
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.principlesTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.principles.map((principle) => (
              <article
                key={principle.number}
                className="
                  group
                  relative overflow-hidden
                  rounded-3xl
                  border border-border
                  bg-surface-elevated
                  p-7
                  shadow-[var(--shadow-sm)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-bright/40
                  hover:shadow-[var(--shadow-lg)]
                "
              >
                {/* Background number */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute -right-2 -top-5
                    text-[7rem]
                    font-extrabold
                    leading-none
                    text-foreground/4
                    transition-colors duration-300
                    group-hover:text-purple-bright/8
                  "
                >
                  {principle.number}
                </span>

                <div className="relative">
                  <ResearchIconContainer variant="card">
                    <ResearchIcon name={principle.icon} />
                  </ResearchIconContainer>

                  <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {principle.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-foreground">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {principle.description}
                  </p>

                  <div
                    className="
                      mt-7
                      h-px w-8
                      bg-accent
                      transition-all duration-300
                      group-hover:w-14
                    "
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH VISUAL
      ========================================================= */}
      <section className="bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lg)] sm:min-h-[480px]">
            <Image
              src={images.howItWorks.workThroughResearch}
              alt={t.visualImageAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 1280px"
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#17033F]/90
                via-[#17033F]/60
                to-[#17033F]/15
              "
            />

            <div className="relative flex min-h-[420px] items-center p-8 sm:min-h-[480px] sm:p-12 lg:p-16">
              <div className="max-w-2xl text-white">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D100D1]" />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E58BFF]">
                    {t.visualEyebrow}
                  </p>
                </div>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {t.visualTitle}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                  {t.visualDescription}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#D100D1]" />
                  <span className="text-sm font-semibold text-white/80">
                    {locale === "en"
                      ? "Structured • Focused • Research-driven"
                      : "व्यवस्थित • केन्द्रित • अनुसन्धानमा आधारित"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-background px-6 pb-14 text-foreground transition-colors duration-300 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid overflow-hidden
              rounded-[2rem]
              border border-border
              bg-surface-elevated
              shadow-[var(--shadow-lg)]
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* CTA Image */}
            <div className="relative min-h-[320px] lg:min-h-[430px]">
              <Image
                src={images.whyChooseUs.researchFocus}
                alt={t.ctaImageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#17033F]/80
                  via-[#17033F]/20
                  to-transparent
                "
              />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-black/20
                    px-4 py-2
                    text-xs font-semibold
                    text-white
                    backdrop-blur-md
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-[#D100D1]" />
                  {t.ctaBadge}
                </div>
              </div>
            </div>

            {/* CTA Content */}
            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    {t.ctaLabel}
                  </p>
                </div>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {t.ctaTitle}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  {t.ctaDescription}
                </p>

                <div className="mt-8">
                  <Button href={`/${locale}/contact`}>
                    {t.ctaButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}