import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/ui/Button";
import ResearchIcon from "@/components/ui/ResearchIcon";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";
import type { Locale } from "@/lib/i18n/config";
import { images } from "@/lib/images";

type ResourcesPageProps = {
  params: Promise<{ locale: Locale }>;
};

const content = {
  en: {
    hero: {
      eyebrow: "RESOURCES",
      title: "Useful resources to help you move forward with your research.",
      intro:
        "Explore practical academic resources designed to help you understand research concepts, organize your work, and approach your academic journey with greater clarity.",
      primaryButton: "Start a Conversation",
      secondaryButton: "Explore Research",
    },

    resourcesLabel: "RESEARCH RESOURCES",
    resourcesTitle: "Practical knowledge for every stage of your research.",

    resources: [
      {
        number: "01",
        title: "Research Guides",
        description:
          "Practical guidance on research planning, topic development, research questions, objectives, and academic structure.",
        image: images.howItWorks.shareYourRequirements,
        icon: "guidance" as const,
      },
      {
        number: "02",
        title: "Academic Writing",
        description:
          "Learn about academic writing structure, clarity, organization, citations, referencing, and presenting research effectively.",
        image: images.services.thesisAndDissertation,
        icon: "education" as const,
      },
      {
        number: "03",
        title: "Research Methodology",
        description:
          "Understand research designs, qualitative and quantitative approaches, sampling, data collection, and research methods.",
        image: images.testimonials.researcherResearchSupport,
        icon: "research" as const,
      },
      {
        number: "04",
        title: "Literature Review",
        description:
          "Resources to help you search for academic literature, organize sources, identify research gaps, and develop literature reviews.",
        image: images.services.literatureReview,
        icon: "research" as const,
      },
      {
        number: "05",
        title: "Data Analysis",
        description:
          "Guidance on understanding research data, selecting analytical approaches, interpreting results, and presenting findings.",
        image: images.services.dataAnalysis,
        icon: "project" as const,
      },
      {
        number: "06",
        title: "Research Tips",
        description:
          "Simple and practical tips for managing your research process, improving productivity, and avoiding common academic challenges.",
        image: images.howItWorks.reviewAndRefine,
        icon: "guidance" as const,
      },
    ],

    insightsLabel: "RESEARCH INSIGHTS",
    blogTitle: "Practical research knowledge, coming soon.",
    blogDescription:
      "We are building a collection of articles and practical research insights. More resources will be added here as the platform grows.",

    cta: {
      eyebrow: "NEED SOMETHING SPECIFIC?",
      title: "Looking for a particular resource?",
      description:
        "If you cannot find the resource you need, contact us and tell us what you are working on.",
      button: "Contact Us",
      imageAlt: "Research resources and academic planning",
      badge: "Research • Resources • Guidance",
    },
  },

  ne: {
    hero: {
      eyebrow: "स्रोत सामग्री",
      title: "तपाईंको अनुसन्धानलाई अगाडि बढाउन उपयोगी स्रोतहरू।",
      intro:
        "अनुसन्धानका अवधारणाहरू बुझ्न, आफ्नो काम व्यवस्थित गर्न तथा शैक्षिक यात्रालाई अझ स्पष्ट रूपमा अगाडि बढाउन सहयोग गर्ने व्यावहारिक स्रोतहरू हेर्नुहोस्।",
      primaryButton: "कुराकानी सुरु गर्नुहोस्",
      secondaryButton: "अनुसन्धान हेर्नुहोस्",
    },

    resourcesLabel: "अनुसन्धान स्रोतहरू",
    resourcesTitle:
      "तपाईंको अनुसन्धानका हरेक चरणका लागि व्यावहारिक ज्ञान।",

    resources: [
      {
        number: "०१",
        title: "अनुसन्धान मार्गदर्शन",
        description:
          "अनुसन्धान योजना, विषय विकास, अनुसन्धान प्रश्न, उद्देश्य तथा शैक्षिक संरचनासम्बन्धी व्यावहारिक मार्गदर्शन।",
        image: images.howItWorks.shareYourRequirements,
        icon: "guidance" as const,
      },
      {
        number: "०२",
        title: "शैक्षिक लेखन",
        description:
          "शैक्षिक लेखनको संरचना, स्पष्टता, संगठन, उद्धरण, सन्दर्भ तथा अनुसन्धान प्रभावकारी रूपमा प्रस्तुत गर्ने तरिकाबारे जानकारी।",
        image: images.services.academicWriting,
        icon: "education" as const,
      },
      {
        number: "०३",
        title: "अनुसन्धान विधि",
        description:
          "अनुसन्धान डिजाइन, गुणात्मक तथा परिमाणात्मक विधि, नमुना छनोट, डेटा सङ्कलन तथा अनुसन्धान विधिहरू बुझ्न सहयोग।",
        image: images.services.methodology,
        icon: "research" as const,
      },
      {
        number: "०४",
        title: "साहित्य समीक्षा",
        description:
          "शैक्षिक साहित्य खोज्ने, स्रोतहरू व्यवस्थित गर्ने, अनुसन्धानका खाली स्थान पहिचान गर्ने तथा साहित्य समीक्षा विकास गर्ने स्रोतहरू।",
        image: images.services.literatureReview,
        icon: "research" as const,
      },
      {
        number: "०५",
        title: "डेटा विश्लेषण",
        description:
          "अनुसन्धान डेटा बुझ्ने, उपयुक्त विश्लेषण विधि छनोट गर्ने, परिणाम व्याख्या गर्ने तथा निष्कर्ष प्रस्तुत गर्ने मार्गदर्शन।",
        image: images.services.dataAnalysis,
        icon: "project" as const,
      },
      {
        number: "०६",
        title: "अनुसन्धान सुझावहरू",
        description:
          "अनुसन्धान प्रक्रिया व्यवस्थापन, उत्पादकता सुधार तथा सामान्य शैक्षिक चुनौतीहरूबाट बच्न सहयोग गर्ने व्यावहारिक सुझावहरू।",
        image: images.howItWorks.reviewAndRefine,
        icon: "guidance" as const,
      },
    ],

    insightsLabel: "अनुसन्धान सामग्री",
    blogTitle: "व्यावहारिक अनुसन्धान सामग्री चाँडै आउँदैछ।",
    blogDescription:
      "हामी व्यावहारिक अनुसन्धान सामग्री तथा लेखहरूको संग्रह तयार गर्दैछौँ। प्लेटफर्म विस्तार हुँदै जाँदा थप स्रोतहरू यहाँ थपिनेछन्।",

    cta: {
      eyebrow: "तपाईंलाई कुनै विशेष स्रोत चाहिन्छ?",
      title: "तपाईंलाई आवश्यक स्रोत भेटिएन?",
      description:
        "तपाईंलाई आवश्यक स्रोत यहाँ भेटिएन भने हामीलाई सम्पर्क गर्नुहोस् र तपाईंले गरिरहेको कामबारे जानकारी दिनुहोस्।",
      button: "सम्पर्क गर्नुहोस्",
      imageAlt: "अनुसन्धान स्रोत तथा शैक्षिक योजना",
      badge: "अनुसन्धान • स्रोत • मार्गदर्शन",
    },
  },
} satisfies Record<Locale, object>;

export default async function ResourcesPage({
  params,
}: ResourcesPageProps) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "ne") {
    notFound();
  }

  const t = content[locale];

  return (
    <div className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-border bg-background">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-purple-bright/10
            blur-[100px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-purple-electric/10
            blur-[110px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Hero Content */}

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-12
                    bg-gradient-to-r
                    from-purple-brand
                    to-purple-electric
                  "
                />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-purple-interactive
                  "
                >
                  {t.hero.eyebrow}
                </span>
              </div>

              <h1
                className="
                  max-w-3xl
                  font-[var(--font-jakarta)]
                  text-4xl
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {t.hero.title}
              </h1>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-muted
                  sm:text-lg
                "
              >
                {t.hero.intro}
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-start
                  gap-4
                  sm:flex-row
                  sm:items-center
                "
              >
                <Button
                  href={`/${locale}/contact`}
                  className="w-fit px-5 py-2.5 text-sm sm:px-6 sm:py-3"
                >
                  {t.hero.primaryButton}
                </Button>

                <Link
                  href={`/${locale}/research`}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    px-1
                    py-1
                    text-sm
                    font-bold
                    text-purple-brand
                    transition-colors
                    hover:text-purple-bright
                  "
                >
                  {t.hero.secondaryButton}

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}

            <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-5
                  rounded-[2.5rem]
                  bg-gradient-to-br
                  from-purple-bright/20
                  via-purple-interactive/10
                  to-purple-electric/20
                  blur-2xl
                "
              />

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-border
                  bg-surface-elevated
                  p-3
                  shadow-[var(--shadow-lg)]
                "
              >
                <div
                  className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    rounded-[1.5rem]
                  "
                >
                  <Image
                    src={images.hero.research}
                    alt="Research resources and academic support"
                    fill
                    priority
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    sizes="(max-width: 1024px) 90vw, 600px"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#21045F]/70
                      via-[#21045F]/10
                      to-transparent
                    "
                  />

                  <div className="absolute bottom-5 left-5">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/15
                        bg-[#17033F]/65
                        px-4
                        py-3
                        backdrop-blur-md
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-purple-bright
                        "
                      >
                        Artova Research
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        Ideas · Insights · Impact
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
          RESOURCE CARDS
      ========================================================= */}

      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Heading */}

          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-12
                  bg-gradient-to-r
                  from-purple-brand
                  to-purple-electric
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-purple-interactive
                "
              >
                {t.resourcesLabel}
              </span>
            </div>

            <h2
              className="
                max-w-4xl
                font-[var(--font-jakarta)]
                text-3xl
                font-extrabold
                leading-[1.1]
                tracking-[-0.04em]
                text-foreground
                sm:text-4xl
                lg:text-5xl
              "
            >
              {t.resourcesTitle}
            </h2>
          </div>

          {/* Cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.resources.map((resource) => (
              <article
                key={resource.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-purple-brand/15
                  bg-surface-elevated
                  shadow-[var(--shadow-sm)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-purple-bright/35
                  hover:shadow-[0_25px_65px_rgba(90,24,154,0.16)]
                "
              >
                {/* Image */}

                <div className="relative h-56 overflow-hidden sm:h-60">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#21045F]/90
                      via-[#21045F]/25
                      to-transparent
                    "
                  />

                  {/* Icon */}

                  <div className="absolute left-6 top-6">
                    <ResearchIconContainer variant="card">
                      <ResearchIcon name={resource.icon} />
                    </ResearchIconContainer>
                  </div>

                  {/* Number */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -right-3
                      -top-7
                      font-[var(--font-jakarta)]
                      text-[8rem]
                      font-extrabold
                      leading-none
                      tracking-[-0.08em]
                      text-white/10
                    "
                  >
                    {resource.number}
                  </span>

                  {/* Coming soon */}

                  <div className="absolute bottom-5 left-6">
                    <span
                      className="
                        rounded-full
                        border
                        border-white/15
                        bg-[#17033F]/55
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      Coming soon
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div className="p-7 sm:p-8">
                  <span className="text-sm font-bold text-purple-bright">
                    {resource.number}
                  </span>

                  <h3
                    className="
                      mt-4
                      font-[var(--font-jakarta)]
                      text-2xl
                      font-extrabold
                      leading-tight
                      tracking-[-0.025em]
                      text-foreground
                    "
                  >
                    {resource.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-muted
                    "
                  >
                    {resource.description}
                  </p>

                  <div className="mt-7">
                    <div
                      className="
                        h-1
                        w-10
                        rounded-full
                        bg-gradient-to-r
                        from-purple-brand
                        to-purple-electric
                        transition-all
                        duration-300
                        group-hover:w-16
                      "
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH INSIGHTS
      ========================================================= */}

      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-purple-brand/15
              bg-[#FBF9FD]
              px-7
              py-16
              text-center
              shadow-[0_15px_55px_rgba(90,24,154,0.06)]
              dark:bg-[var(--surface)]
              sm:px-12
              sm:py-20
              lg:px-20
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-purple-bright/10
                blur-[90px]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-24
                h-72
                w-72
                rounded-full
                bg-purple-electric/10
                blur-[90px]
              "
            />

            <div className="relative mx-auto max-w-3xl">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-10
                    bg-gradient-to-r
                    from-purple-brand
                    to-purple-electric
                  "
                />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-purple-bright
                  "
                >
                  {t.insightsLabel}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-10
                    bg-gradient-to-r
                    from-purple-electric
                    to-purple-brand
                  "
                />
              </div>

              <h2
                className="
                  font-[var(--font-jakarta)]
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {t.blogTitle}
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-muted
                  sm:text-lg
                "
              >
                {t.blogDescription}
              </p>

              <div
                className="
                  mx-auto
                  mt-8
                  h-1
                  w-12
                  rounded-full
                  bg-gradient-to-r
                  from-purple-brand
                  to-purple-electric
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-background pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div
            className="
              grid
              overflow-hidden
              rounded-[2rem]
              border
              border-purple-brand/15
              bg-white
              shadow-[0_20px_70px_rgba(90,24,154,0.10)]
              dark:bg-[var(--surface)]
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* CTA Image */}

            <div
              className="
                group
                relative
                min-h-[300px]
                overflow-hidden
                lg:min-h-[430px]
              "
            >
              <Image
                src={images.services.cta}
                alt={t.cta.imageAlt}
                fill
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#21045F]/70
                  via-[#21045F]/15
                  to-transparent
                "
              />

              <div className="absolute bottom-7 left-7">
                <div
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-[#17033F]/45
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    backdrop-blur-md
                  "
                >
                  {t.cta.badge}
                </div>
              </div>
            </div>

            {/* CTA Content */}

            <div
              className="
                relative
                flex
                items-center
                p-8
                sm:p-10
                lg:p-14
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-64
                  w-64
                  rounded-full
                  bg-purple-bright/10
                  blur-[80px]
                "
              />

              <div className="relative max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      w-12
                      bg-gradient-to-r
                      from-purple-brand
                      to-purple-electric
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-purple-bright
                    "
                  >
                    {t.cta.eyebrow}
                  </span>
                </div>

                <h2
                  className="
                    font-[var(--font-jakarta)]
                    text-3xl
                    font-extrabold
                    leading-[1.08]
                    tracking-[-0.04em]
                    text-foreground
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {t.cta.title}
                </h2>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-base
                    leading-8
                    text-muted
                  "
                >
                  {t.cta.description}
                </p>

                <div className="mt-8">
                  <Button href={`/${locale}/contact`}>
                    {t.cta.button}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}