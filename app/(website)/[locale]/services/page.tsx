import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/ui/Button";
import ResearchIcon from "@/components/ui/ResearchIcon";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";
import { images } from "@/lib/images";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "OUR SERVICES",
    title: "Research support for every stage of your academic journey.",
    intro:
      "From developing your research idea to preparing and refining your final academic work, Artova Research provides structured support across key research stages.",

    exploreMore: "Explore More",

    services: [
      {
        number: "01",
        slug: "research-proposal",
        title: "Research Proposal Support",
        description:
          "Develop a clear research proposal with support for topic selection, research questions, objectives, scope, methodology, and overall structure.",
        icon: "proposal" as const,
        image: images.services.proposalSupport,
      },
      {
        number: "02",
        slug: "thesis-dissertation",
        title: "Thesis & Dissertation Support",
        description:
          "Get structured guidance throughout your thesis or dissertation, from planning and chapter development to review and refinement.",
        icon: "thesis" as const,
        image: images.services.thesisAndDissertation,
      },
      {
        number: "03",
        slug: "literature-review",
        title: "Literature Review",
        description:
          "Identify, organize, evaluate, and synthesize relevant academic literature to establish a strong foundation for your research.",
        icon: "literature" as const,
        image: images.services.literatureReview,
      },
      {
        number: "04",
        slug: "methodology",
        title: "Research Methodology",
        description:
          "Understand and develop appropriate research designs, methods, sampling approaches, data collection techniques, and methodological structures.",
        icon: "methodology" as const,
        image: images.howItWorks.planTheResearch,
      },
      {
        number: "05",
        slug: "data-analysis",
        title: "Data Analysis",
        description:
          "Get support with preparing, analyzing, interpreting, and presenting research data using appropriate analytical approaches.",
        icon: "data" as const,
        image: images.services.dataAnalysis,
      },
      {
        number: "06",
        slug: "academic-writing",
        title: "Academic Writing Support",
        description:
          "Improve the structure, clarity, organization, and academic presentation of your research documents.",
        icon: "writing" as const,
        image: images.howItWorks.reviewAndRefine,
      },
      {
        number: "07",
        slug: "research-guidance",
        title: "Research Guidance",
        description:
          "Receive practical guidance when you are unsure about your research direction, methodology, analysis, or next steps.",
        icon: "guidance" as const,
        image: images.whyChooseUs.researchGuidance,
      },
      {
        number: "08",
        slug: "project-academic-support",
        title: "Project & Academic Support",
        description:
          "Support for academic projects and research-related work across different subjects and academic levels.",
        icon: "project" as const,
        image: images.services.academicSupport,
      },
    ],

    ctaEyebrow: "NEED RESEARCH SUPPORT?",
    ctaTitle: "Let's discuss what your research needs.",
    ctaDescription:
      "Tell us about your project and requirements, and we can discuss how we can support your research journey.",
    ctaButton: "Start a Conversation",
  },

  ne: {
    eyebrow: "हाम्रा सेवाहरू",
    title:
      "तपाईंको शैक्षिक यात्राका प्रत्येक चरणका लागि अनुसन्धान सहयोग।",
    intro:
      "अनुसन्धानको विचार विकास गर्नेदेखि अन्तिम शैक्षिक कार्य तयार तथा परिष्कृत गर्नेसम्म आर्टोभा रिसर्चले अनुसन्धानका महत्वपूर्ण चरणहरूमा व्यवस्थित सहयोग प्रदान गर्दछ।",

    exploreMore: "थप हेर्नुहोस्",

    services: [
      {
        number: "०१",
        slug: "research-proposal",
        title: "अनुसन्धान प्रस्ताव सहयोग",
        description:
          "विषय छनोट, अनुसन्धान प्रश्न, उद्देश्य, क्षेत्र, अनुसन्धान विधि तथा समग्र संरचनामा सहयोगसहित स्पष्ट अनुसन्धान प्रस्ताव तयार गर्न सहयोग।",
        icon: "proposal" as const,
        image: images.services.proposalSupport,
      },
      {
        number: "०२",
        slug: "thesis-dissertation",
        title: "थेसिस तथा डिसर्टेसन सहयोग",
        description:
          "योजना तथा अध्याय विकासदेखि समीक्षा र परिष्करणसम्म थेसिस वा डिसर्टेसनको सम्पूर्ण प्रक्रियामा व्यवस्थित मार्गदर्शन।",
        icon: "thesis" as const,
        image: images.services.thesisAndDissertation,
      },
      {
        number: "०३",
        slug: "literature-review",
        title: "साहित्य समीक्षा",
        description:
          "सम्बन्धित शैक्षिक साहित्य पहिचान, व्यवस्थित, मूल्याङ्कन तथा संश्लेषण गरी अनुसन्धानका लागि बलियो आधार तयार गर्न सहयोग।",
        icon: "literature" as const,
        image: images.services.literatureReview,
      },
      {
        number: "०४",
        slug: "methodology",
        title: "अनुसन्धान विधि",
        description:
          "उपयुक्त अनुसन्धान डिजाइन, विधि, नमुना छनोट, डेटा सङ्कलन प्रविधि तथा अनुसन्धान संरचना बुझ्न र विकास गर्न सहयोग।",
        icon: "methodology" as const,
        image: images.howItWorks.planTheResearch,
      },
      {
        number: "०५",
        slug: "data-analysis",
        title: "डेटा विश्लेषण",
        description:
          "उपयुक्त विश्लेषणात्मक विधिहरू प्रयोग गरी अनुसन्धान डेटा तयार, विश्लेषण, व्याख्या तथा प्रस्तुत गर्न सहयोग।",
        icon: "data" as const,
        image: images.services.dataAnalysis,
      },
      {
        number: "०६",
        slug: "academic-writing",
        title: "शैक्षिक लेखन सहयोग",
        description:
          "अनुसन्धान दस्तावेजको संरचना, स्पष्टता, संगठन तथा शैक्षिक प्रस्तुतिलाई सुधार गर्न सहयोग।",
        icon: "writing" as const,
        image: images.howItWorks.reviewAndRefine,
      },
      {
        number: "०७",
        slug: "research-guidance",
        title: "अनुसन्धान मार्गदर्शन",
        description:
          "अनुसन्धानको दिशा, विधि, विश्लेषण वा आगामी चरणबारे अन्योल हुँदा व्यावहारिक मार्गदर्शन प्राप्त गर्नुहोस्।",
        icon: "guidance" as const,
        image: images.whyChooseUs.researchGuidance,
      },
      {
        number: "०८",
        slug: "project-academic-support",
        title: "परियोजना तथा शैक्षिक सहयोग",
        description:
          "विभिन्न विषय तथा शैक्षिक स्तरका शैक्षिक परियोजना र अनुसन्धानसम्बन्धी कार्यहरूमा सहयोग।",
        icon: "project" as const,
        image: images.services.academicSupport,
      },
    ],

    ctaEyebrow: "अनुसन्धान सहयोग चाहिन्छ?",
    ctaTitle: "तपाईंको अनुसन्धान आवश्यकताबारे छलफल गरौँ।",
    ctaDescription:
      "आफ्नो परियोजना तथा आवश्यकताबारे हामीलाई जानकारी दिनुहोस् र तपाईंको अनुसन्धान यात्रामा कसरी सहयोग गर्न सक्छौँ भन्नेबारे छलफल गरौँ।",
    ctaButton: "कुरा सुरु गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default async function ServicesPage({
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
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-[32rem]
            w-[32rem]
            rounded-full
            bg-purple-bright/10
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-0
            h-80
            w-80
            rounded-full
            bg-purple-interactive/8
            blur-[100px]
          "
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
          SERVICES
      ========================================================= */}

      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {t.services.map((service) => (
              <Link
                key={service.number}
                href={`/${locale}/services/${service.slug}`}
                className="group block"
                aria-label={`${service.title} - ${t.exploreMore}`}
              >
                <article
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-surface-elevated
                    shadow-[var(--shadow-sm)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-purple-bright/40
                    hover:shadow-[var(--shadow-lg)]
                  "
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Image overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#17033F]/80
                        via-[#17033F]/15
                        to-transparent
                      "
                    />

                    {/* Number */}
                    <div className="absolute left-5 top-5">
                      <span
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-white/20
                          bg-black/20
                          px-3
                          py-1.5
                          text-xs
                          font-bold
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* =================================================
                        EXPLORE MORE — appears on card hover
                    ================================================= */}

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-[#5A189A]/35
                        opacity-0
                        backdrop-blur-[2px]
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      <span
                        className="
                          inline-flex
                          translate-y-3
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/30
                          bg-white/15
                          px-5
                          py-2.5
                          text-sm
                          font-bold
                          text-white
                          shadow-lg
                          backdrop-blur-md
                          transition-transform
                          duration-300
                          group-hover:translate-y-0
                        "
                      >
                        {t.exploreMore}

                        <span
                          aria-hidden="true"
                          className="text-base"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <ResearchIconContainer variant="card">
                        <ResearchIcon name={service.icon} />
                      </ResearchIconContainer>

                      <span
                        aria-hidden="true"
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-sm
                          text-muted
                          transition-all
                          duration-300
                          group-hover:border-purple-bright
                          group-hover:bg-purple-bright
                          group-hover:text-white
                          group-hover:shadow-[var(--glow-purple)]
                        "
                      >
                        ↗
                      </span>
                    </div>

                    <h2 className="mt-6 max-w-lg text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-4 max-w-xl leading-7 text-muted">
                      {service.description}
                    </p>

                    <div
                      className="
                        mt-7
                        h-px
                        w-10
                        bg-accent
                        transition-all
                        duration-300
                        group-hover:w-20
                      "
                    />
                  </div>
                </article>
              </Link>
            ))}
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
              grid
              overflow-hidden
              rounded-[2rem]
              border
              border-border
              bg-surface-elevated
              shadow-[var(--shadow-lg)]
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* CTA Image */}
            <div className="relative min-h-[320px] lg:min-h-[430px]">
              <Image
                src={images.services.cta}
                alt="Research guidance and support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#17033F]/80
                  via-[#17033F]/20
                  to-transparent
                "
              />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-md
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-[#D100D1]" />

                  {locale === "en"
                    ? "Research-focused support"
                    : "अनुसन्धान केन्द्रित सहयोग"}
                </div>
              </div>
            </div>

            {/* CTA Content */}
            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    {t.ctaEyebrow}
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