import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  CheckCircle2,
  Compass,
  Search,
} from "lucide-react";

import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";

import { images } from "@/lib/images";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type FAQPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const faqContent = {
  en: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",

    title: "Questions before you begin?",

    intro:
      "Find clear answers to common questions about our research support, academic services, process, and communication.",

    faqs: [
      {
        question: "What kind of research support do you provide?",
        answer:
          "We provide support across different stages of academic research, including research planning, proposal development, methodology, literature review, data analysis, academic writing, and research guidance.",
      },
      {
        question: "Can you help me with my thesis or dissertation?",
        answer:
          "Yes. We provide structured guidance for thesis and dissertation work, including research planning, methodology, literature review, analysis, academic writing, review, and refinement.",
      },
      {
        question: "Do you provide help with research methodology?",
        answer:
          "Yes. We can help you understand and structure your research methodology, including research design, data collection approaches, sampling, variables, and suitable analytical methods.",
      },
      {
        question: "Can you help with data analysis?",
        answer:
          "Yes. We provide support with data preparation, statistical analysis, interpretation, and presenting findings in a clear academic format. The specific approach depends on your research question and dataset.",
      },
      {
        question: "Do you provide literature review support?",
        answer:
          "Yes. We can help with literature search strategies, organizing relevant studies, identifying themes, comparing findings, and developing a structured literature review.",
      },
      {
        question: "Can you help me choose a research topic?",
        answer:
          "Yes. We can help you explore possible research directions based on your subject area, interests, academic requirements, and the type of research you want to conduct.",
      },
      {
        question: "How does the research support process work?",
        answer:
          "The process starts by understanding your requirements and research problem. We then help define the direction, plan the methodology, work through the evidence, analyze and interpret findings, and review the final work.",
      },
      {
        question: "Can I contact you before deciding on a service?",
        answer:
          "Yes. You can contact us with your research requirements, questions, or project details. We can discuss what kind of support may be appropriate before you decide how to proceed.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply contact us and share your research topic, academic level, requirements, and any relevant deadlines. We will review the information and discuss the next steps with you.",
      },
    ],

    processEyebrow: "HOW WE SUPPORT YOUR RESEARCH",

    processTitle: "A clear process from idea to academic work.",

    processDescription:
      "Our approach is designed to keep your research organized, understandable, and focused at every stage.",

    process: [
      {
        number: "01",
        title: "Understand",
        description:
          "We begin by understanding your research problem, academic requirements, and objectives.",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "We help establish a clear research direction and structure before detailed work begins.",
      },
      {
        number: "03",
        title: "Develop",
        description:
          "We work through methodology, evidence, analysis, and academic presentation.",
      },
      {
        number: "04",
        title: "Review",
        description:
          "We review and refine the work so that the research remains clear, structured, and consistent.",
      },
    ],

    ctaEyebrow: "STILL HAVE QUESTIONS?",

    ctaTitle: "Let's discuss your research requirements.",

    ctaDescription:
      "Tell us what you are working on and what kind of support you need. We can discuss your requirements and help you understand the next step.",

    ctaButton: "Contact Us",

    ctaSecondary: "Explore Our Services",
  },

  ne: {
    eyebrow: "बारम्बार सोधिने प्रश्नहरू",

    title: "सुरु गर्नुअघि केही प्रश्न छन्?",

    intro:
      "हाम्रो अनुसन्धान सहयोग, शैक्षिक सेवाहरू, प्रक्रिया र सम्पर्कसम्बन्धी सामान्य प्रश्नहरूको स्पष्ट उत्तर यहाँ पाउनुहोस्।",

    faqs: [
      {
        question: "तपाईंहरूले कस्तो अनुसन्धान सहयोग प्रदान गर्नुहुन्छ?",
        answer:
          "हामी अनुसन्धान योजना, प्रस्ताव विकास, अनुसन्धान विधि, साहित्य समीक्षा, डाटा विश्लेषण, शैक्षिक लेखन र अनुसन्धान मार्गदर्शन लगायत अनुसन्धानका विभिन्न चरणमा सहयोग प्रदान गर्छौं।",
      },
      {
        question: "के तपाईं मेरो thesis वा dissertation मा सहयोग गर्न सक्नुहुन्छ?",
        answer:
          "हो। हामी thesis तथा dissertation को अनुसन्धान योजना, methodology, literature review, analysis, academic writing, review र refinement लगायतका चरणमा संरचित मार्गदर्शन प्रदान गर्छौं।",
      },
      {
        question: "के तपाईं अनुसन्धान methodology मा सहयोग गर्नुहुन्छ?",
        answer:
          "हो। हामी research design, data collection, sampling, variables तथा उपयुक्त analysis methods लगायत अनुसन्धान methodology लाई बुझ्न र व्यवस्थित गर्न सहयोग गर्छौं।",
      },
      {
        question: "के तपाईं data analysis मा सहयोग गर्न सक्नुहुन्छ?",
        answer:
          "हो। हामी data preparation, statistical analysis, interpretation तथा findings लाई स्पष्ट academic format मा प्रस्तुत गर्न सहयोग गर्छौं। उपयुक्त विधि तपाईंको research question र dataset मा निर्भर हुन्छ।",
      },
      {
        question: "के तपाईं literature review मा सहयोग गर्नुहुन्छ?",
        answer:
          "हो। हामी literature search strategy, relevant studies को organization, themes पहिचान, findings comparison तथा structured literature review तयार गर्न सहयोग गर्छौं।",
      },
      {
        question: "के तपाईं research topic छनोट गर्न सहयोग गर्न सक्नुहुन्छ?",
        answer:
          "हो। तपाईंको subject area, रुचि, academic requirements र अनुसन्धानको प्रकारलाई आधार बनाएर सम्भावित research directions खोज्न सहयोग गर्न सक्छौं।",
      },
      {
        question: "अनुसन्धान सहयोगको प्रक्रिया कसरी अगाडि बढ्छ?",
        answer:
          "पहिले हामी तपाईंको research problem र requirements बुझ्छौं। त्यसपछि research direction, methodology, evidence, analysis तथा interpretation हुँदै अन्तिम कामको review र refinement मा सहयोग गर्छौं।",
      },
      {
        question: "सेवा छनोट गर्नुअघि के म तपाईंहरूलाई सम्पर्क गर्न सक्छु?",
        answer:
          "अवश्य। तपाईं आफ्नो research requirements, प्रश्न वा project details सहित हामीलाई सम्पर्क गर्न सक्नुहुन्छ। सेवा छनोट गर्नुअघि आवश्यक सहयोगबारे छलफल गर्न सकिन्छ।",
      },
      {
        question: "म कसरी सुरु गर्न सक्छु?",
        answer:
          "हामीलाई सम्पर्क गरी आफ्नो research topic, academic level, requirements र आवश्यक deadline साझा गर्नुहोस्। हामी जानकारी समीक्षा गरी तपाईंलाई अर्को चरणबारे जानकारी दिनेछौं।",
      },
    ],

    processEyebrow: "हामी तपाईंको अनुसन्धानमा कसरी सहयोग गर्छौं",

    processTitle: "विचारदेखि शैक्षिक कामसम्म स्पष्ट प्रक्रिया।",

    processDescription:
      "हाम्रो प्रक्रिया तपाईंको अनुसन्धानलाई प्रत्येक चरणमा व्यवस्थित, बुझ्न सजिलो र केन्द्रित राख्न तयार गरिएको छ।",

    process: [
      {
        number: "०१",
        title: "बुझ्ने",
        description:
          "हामी तपाईंको research problem, academic requirements र objectives बुझेर सुरु गर्छौं।",
      },
      {
        number: "०२",
        title: "योजना बनाउने",
        description:
          "विस्तृत काम सुरु गर्नुअघि स्पष्ट research direction र structure तयार गर्न सहयोग गर्छौं।",
      },
      {
        number: "०३",
        title: "विकास गर्ने",
        description:
          "Methodology, evidence, analysis तथा academic presentation मा व्यवस्थित रूपमा काम गर्छौं।",
      },
      {
        number: "०४",
        title: "समीक्षा गर्ने",
        description:
          "अनुसन्धान स्पष्ट, व्यवस्थित र consistent रहोस् भनेर कामको review तथा refinement गर्छौं।",
      },
    ],

    ctaEyebrow: "अझै प्रश्नहरू छन्?",

    ctaTitle: "तपाईंको अनुसन्धान आवश्यकताबारे छलफल गरौं।",

    ctaDescription:
      "तपाईं केमा काम गर्दै हुनुहुन्छ र कस्तो सहयोग आवश्यक छ भन्ने जानकारी दिनुहोस्। हामी तपाईंका requirements बारे छलफल गरी अर्को चरण बुझ्न सहयोग गर्नेछौं।",

    ctaButton: "सम्पर्क गर्नुहोस्",

    ctaSecondary: "हाम्रा सेवाहरू हेर्नुहोस्",
  },
} as const;

const processIcons = [
  Search,
  Compass,
  BookOpen,
  CheckCircle2,
] as const;

export default async function FAQPage({
  params,
}: FAQPageProps) {
  const { locale: routeLocale } = await params;

  if (!isValidLocale(routeLocale)) {
    notFound();
  }

  const locale = routeLocale as Locale;
  const content = faqContent[locale];

  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
          ========================================================= */}

      <section className="relative px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Text */}
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-purple-brand to-purple-bright" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-brand dark:text-purple-bright">
                  {content.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                {content.intro}
              </p>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-purple-brand/15 via-purple-bright/10 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-purple-brand/15 bg-surface-elevated p-2 shadow-[0_25px_70px_rgba(123,44,191,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={images.howItWorks.reviewAndRefine}
                    alt="Research support and review"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/70 via-purple-brand/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="max-w-sm">
                      <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                        Artova Research
                      </span>

                      <p className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                        Clear research. Structured thinking. Meaningful
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
          ========================================================= */}

      <section className="border-y border-border bg-surface-muted px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-purple-brand to-purple-bright" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-brand dark:text-purple-bright">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Answers to common research questions.
            </h2>
          </div>

          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      {/* =========================================================
          PROCESS
          ========================================================= */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-purple-brand to-purple-bright" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-brand dark:text-purple-bright">
                {content.processEyebrow}
              </span>

              <span className="h-px w-10 bg-gradient-to-r from-purple-bright to-purple-brand" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {content.processTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {content.processDescription}
            </p>
          </div>

          {/* Process cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((item, index) => {
              const Icon = processIcons[index];

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-purple-brand/15
                    bg-surface-elevated
                    p-6
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-2
                    hover:border-purple-bright/40
                    hover:shadow-[0_20px_50px_rgba(123,44,191,0.12)]
                    sm:p-7
                  "
                >
                  {/* Large background number */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      right-5
                      top-2
                      text-6xl
                      font-bold
                      leading-none
                      text-purple-brand/5
                      transition-colors
                      duration-300
                      group-hover:text-purple-brand/10
                    "
                  >
                    {item.number}
                  </span>

                  <div className="relative">
                    {/* Icon */}
                    <ResearchIconContainer
                      className="
                        mb-7
                        border-purple-brand/15
                        bg-purple-brand/10
                        text-purple-brand
                        transition-all
                        duration-300
                        group-hover:border-purple-bright/25
                        group-hover:bg-purple-brand
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </ResearchIconContainer>

                    {/* Step number */}
                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-purple-brand
                        dark:text-purple-bright
                      "
                    >
                      {item.number}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                        mt-3
                        text-xl
                        font-semibold
                        tracking-tight
                        text-foreground
                        transition-colors
                        duration-300
                        group-hover:text-purple-brand
                        dark:group-hover:text-purple-bright
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-muted
                        sm:text-base
                      "
                    >
                      {item.description}
                    </p>

                    {/* Purple line */}
                    <div
                      className="
                        mt-7
                        h-px
                        w-10
                        bg-gradient-to-r
                        from-purple-brand
                        to-purple-bright
                        transition-all
                        duration-300
                        group-hover:w-20
                      "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
          ========================================================= */}

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-purple-brand/15 bg-surface-elevated shadow-[0_25px_70px_rgba(123,44,191,0.10)]">
            <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
              {/* Image */}
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
                <Image
                  src={images.services.cta}
                  alt="Research planning"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/80 via-purple-brand/45 to-transparent" />

                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    Research Support
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-purple-brand to-purple-bright" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-brand dark:text-purple-bright">
                    {content.ctaEyebrow}
                  </span>
                </div>

                <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {content.ctaTitle}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                  {content.ctaDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button href={`/${locale}/contact`}>
                    {content.ctaButton}
                  </Button>

                  <Link
                    href={`/${locale}/services`}
                    className="
                      inline-flex
                      items-center
                      font-semibold
                      text-purple-brand
                      transition-colors
                      hover:text-purple-bright
                      dark:text-purple-bright
                    "
                  >
                    {content.ctaSecondary}

                    <span className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}