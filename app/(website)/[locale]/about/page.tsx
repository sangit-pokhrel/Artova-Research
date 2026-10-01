import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import ResearchIcon from "@/components/ui/ResearchIcon";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";
import type { Locale } from "@/lib/i18n/config";
import { images } from "@/lib/images";

type AboutPageProps = {
  params: Promise<{ locale: Locale }>;
};

const content = {
  en: {
    hero: {
      eyebrow: "ABOUT ARTOVA RESEARCH",
      title: "Helping students and researchers move forward with clarity.",
      description:
        "Artova Research provides academic and research support for students and researchers working on projects, proposals, theses, dissertations, and other academic work.",
      primaryButton: "Start a Conversation",
      secondaryButton: "Explore Our Services",
      imageLabel: "",
      imageDescription: "Clear direction at every stage",
    },

    mission: {
      number: "01",
      label: "OUR MISSION",
      title: "Making the research journey more structured and manageable.",
      description:
        "Our mission is to provide practical academic guidance and research-focused support that helps students and researchers understand their requirements, organize their work, and move forward with greater clarity.",
      imageAlt: "Sharing research requirements",
    },

    approach: {
      number: "02",
      label: "OUR APPROACH",
      title: "Every research project deserves a thoughtful approach.",
      description:
        "Research projects have different academic contexts, requirements, and challenges. We focus on understanding those requirements and providing structured support throughout the relevant stages of the research process.",
      imageAlt: "Planning research",
    },

    values: {
      label: "WHAT WE VALUE",
      title: "Principles that guide our research support.",
      description:
        "Our approach is built around clarity, academic quality, practical guidance, and responsible research practices.",
      items: [
        {
          number: "01",
          title: "Clarity",
          description:
            "Making complex academic and research requirements easier to understand.",
          icon: "guidance" as const,
        },
        {
          number: "02",
          title: "Academic Quality",
          description:
            "Following structured academic practices and maintaining attention to research quality.",
          icon: "education" as const,
        },
        {
          number: "03",
          title: "Practical Support",
          description:
            "Providing guidance that can be applied directly to your research work.",
          icon: "project" as const,
        },
        {
          number: "04",
          title: "Responsible Research",
          description:
            "Encouraging proper research practices, academic integrity, and responsible use of information.",
          icon: "research" as const,
        },
      ],
    },

    visual: {
      eyebrow: "RESEARCH WITH DIRECTION",
      title: "Clearer steps. Better structure. More confidence.",
      imageAlt: "Working through research",
    },

    cta: {
      eyebrow: "READY TO MOVE FORWARD?",
      title: "Let's work through your research requirements.",
      description:
        "Tell us where you are in your research journey and what kind of support you need.",
      button: "Start a Conversation",
      imageAlt: "Research guidance and support",
      badge: "Research • Guidance • Support",
    },
  },

  ne: {
    hero: {
      eyebrow: "आर्टोभा रिसर्चको बारेमा",
      title:
        "विद्यार्थी र अनुसन्धानकर्ताहरूलाई स्पष्टताका साथ अगाडि बढ्न सहयोग गर्दै।",
      description:
        "आर्टोभा रिसर्चले प्रोजेक्ट, प्रस्ताव, थेसिस, डिसर्टेसन तथा अन्य शैक्षिक कार्यमा संलग्न विद्यार्थी र अनुसन्धानकर्ताहरूलाई शैक्षिक तथा अनुसन्धान सहयोग प्रदान गर्दछ।",
      primaryButton: "कुराकानी सुरु गर्नुहोस्",
      secondaryButton: "हाम्रा सेवाहरू हेर्नुहोस्",
      imageLabel: "अनुसन्धान केन्द्रित सहयोग",
      imageDescription: "हरेक चरणमा स्पष्ट दिशा",
    },

    mission: {
      number: "०१",
      label: "हाम्रो उद्देश्य",
      title: "अनुसन्धान यात्रालाई व्यवस्थित र सहज बनाउने।",
      description:
        "हाम्रो उद्देश्य विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई आफ्ना आवश्यकताहरू बुझ्न, काम व्यवस्थित गर्न र अझ स्पष्टताका साथ अगाडि बढ्न व्यावहारिक शैक्षिक मार्गदर्शन तथा अनुसन्धान केन्द्रित सहयोग प्रदान गर्नु हो।",
      imageAlt: "अनुसन्धान आवश्यकताहरू साझा गर्दै",
    },

    approach: {
      number: "०२",
      label: "हाम्रो दृष्टिकोण",
      title: "हरेक अनुसन्धान परियोजनाले सोचपूर्ण दृष्टिकोण पाउनुपर्छ।",
      description:
        "हरेक अनुसन्धान परियोजनाको शैक्षिक सन्दर्भ, आवश्यकता र चुनौती फरक हुन्छ। हामी ती आवश्यकताहरू बुझेर अनुसन्धान प्रक्रियाका सम्बन्धित चरणहरूमा व्यवस्थित सहयोग प्रदान गर्न केन्द्रित हुन्छौँ।",
      imageAlt: "अनुसन्धान योजना बनाउँदै",
    },

    values: {
      label: "हामी केलाई महत्व दिन्छौँ",
      title: "हाम्रो अनुसन्धान सहयोगलाई मार्गदर्शन गर्ने सिद्धान्तहरू।",
      description:
        "हाम्रो दृष्टिकोण स्पष्टता, शैक्षिक गुणस्तर, व्यावहारिक मार्गदर्शन र जिम्मेवार अनुसन्धान अभ्यासमा आधारित छ.",
      items: [
        {
          number: "०१",
          title: "स्पष्टता",
          description:
            "जटिल शैक्षिक तथा अनुसन्धान आवश्यकताहरूलाई बुझ्न सहज बनाउने।",
          icon: "guidance" as const,
        },
        {
          number: "०२",
          title: "शैक्षिक गुणस्तर",
          description:
            "व्यवस्थित शैक्षिक अभ्यासहरू पालना गर्दै अनुसन्धानको गुणस्तरमा ध्यान दिने।",
          icon: "education" as const,
        },
        {
          number: "०३",
          title: "व्यावहारिक सहयोग",
          description:
            "तपाईंको अनुसन्धान कार्यमा प्रत्यक्ष रूपमा प्रयोग गर्न सकिने मार्गदर्शन प्रदान गर्ने।",
          icon: "project" as const,
        },
        {
          number: "०४",
          title: "जिम्मेवार अनुसन्धान",
          description:
            "उचित अनुसन्धान अभ्यास, शैक्षिक इमानदारी र सूचनाको जिम्मेवार प्रयोगलाई प्रोत्साहन गर्ने।",
          icon: "research" as const,
        },
      ],
    },

    visual: {
      eyebrow: "दिशासहितको अनुसन्धान",
      title: "स्पष्ट चरण। राम्रो संरचना। अझ बढी आत्मविश्वास।",
      imageAlt: "अनुसन्धानमा अगाडि बढ्दै",
    },

    cta: {
      eyebrow: "अगाडि बढ्न तयार हुनुहुन्छ?",
      title: "तपाईंको अनुसन्धान आवश्यकतामा सँगै काम गरौँ।",
      description:
        "तपाईं अनुसन्धान यात्राको कुन चरणमा हुनुहुन्छ र कस्तो सहयोग आवश्यक छ हामीलाई बताउनुहोस्।",
      button: "कुराकानी सुरु गर्नुहोस्",
      imageAlt: "अनुसन्धान मार्गदर्शन र सहयोग",
      badge: "अनुसन्धान • मार्गदर्शन • सहयोग",
    },
  },
} satisfies Record<Locale, object>;

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-border bg-background">

        {/* Background glow */}

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

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

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
                  text-muted-foreground
                  sm:text-lg
                "
              >
                {t.hero.description}
              </p>


              <div className="mt-9 flex flex-wrap items-center gap-5">

                <Button href={`/${locale}/contact`}>
                  {t.hero.primaryButton}
                </Button>


                <Link
                  href={`/${locale}/services`}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
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

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

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
                    src={images.whyChooseUs.clearGuidance}
                    alt="Research guidance and academic support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 520px"
                    priority
                  />


                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#17033F]/70
                      via-transparent
                      to-transparent
                    "
                  />


                   

                </div>

              </div>


              {/* Floating Artova accent */}

              <div
  className="
    absolute
    -bottom-5
    -left-2
    rounded-2xl
    border
    border-purple-bright/20
    bg-surface-elevated/95
    px-4
    py-3
    shadow-[var(--shadow-md)]
    backdrop-blur-md
    sm:-left-5
    sm:px-5
    sm:py-4
  "
>
  <p
    className="
      text-[10px]
      font-bold
      uppercase
      tracking-[0.2em]
      text-accent
    "
  >
    Artova Research
  </p>

  <p className="mt-1 text-sm font-bold text-foreground">
    Ideas · Insights · Impact
  </p>
</div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MISSION + APPROACH
      ========================================================= */}

      <section className="bg-background py-14 sm:py-16 lg:py-20">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-5 lg:grid-cols-2">

            {/* =====================================================
                MISSION
            ===================================================== */}

            <article
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-[#7B2CBF]/15
                bg-[#FBF9FD]
                shadow-[0_15px_50px_rgba(90,24,154,0.07)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_65px_rgba(90,24,154,0.12)]
                dark:bg-[var(--surface)]
              "
            >

              <div className="relative h-64 overflow-hidden sm:h-72">

                <Image
                  src={images.howItWorks.shareYourRequirements}
                  alt={t.mission.imageAlt}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#21045F]/55
                    via-[#21045F]/5
                    to-transparent
                  "
                />

                <div className="absolute left-6 top-6">

                  <ResearchIconContainer variant="card">
                    <ResearchIcon name="guidance" />
                  </ResearchIconContainer>

                </div>

                <div
                  className="
                    absolute
                    bottom-5
                    right-6
                    font-[var(--font-jakarta)]
                    text-6xl
                    font-extrabold
                    tracking-[-0.06em]
                    text-white/25
                  "
                >
                  {t.mission.number}
                </div>

              </div>


              <div className="p-8 sm:p-10">

                <div className="flex items-center gap-3">

                  <span
                    className="
                      h-px
                      w-10
                      bg-gradient-to-r
                      from-[#7B2CBF]
                      to-[#D100D1]
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#8B2FC9]
                    "
                  >
                    {t.mission.label}
                  </span>

                </div>


                <h2
                  className="
                    mt-6
                    font-[var(--font-jakarta)]
                    text-3xl
                    font-extrabold
                    leading-[1.12]
                    tracking-[-0.035em]
                    text-[var(--foreground)]
                    sm:text-4xl
                  "
                >
                  {t.mission.title}
                </h2>


                <p
                  className="
                    mt-5
                    text-base
                    leading-8
                    text-[var(--muted-foreground)]
                  "
                >
                  {t.mission.description}
                </p>


                <div
                  className="
                    mt-8
                    h-1
                    w-14
                    rounded-full
                    bg-gradient-to-r
                    from-[#7B2CBF]
                    to-[#D100D1]
                  "
                />

              </div>

            </article>


            {/* =====================================================
                APPROACH
            ===================================================== */}

            <article
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-[#7B2CBF]/15
                bg-[#FBF9FD]
                shadow-[0_15px_50px_rgba(90,24,154,0.07)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_65px_rgba(90,24,154,0.12)]
                dark:bg-[var(--surface)]
              "
            >

              <div className="relative h-64 overflow-hidden sm:h-72">

                <Image
                  src={images.howItWorks.planTheResearch}
                  alt={t.approach.imageAlt}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#21045F]/55
                    via-[#21045F]/5
                    to-transparent
                  "
                />

                <div className="absolute left-6 top-6">

                  <ResearchIconContainer variant="card">
                    <ResearchIcon name="research" />
                  </ResearchIconContainer>

                </div>

                <div
                  className="
                    absolute
                    bottom-5
                    right-6
                    font-[var(--font-jakarta)]
                    text-6xl
                    font-extrabold
                    tracking-[-0.06em]
                    text-white/25
                  "
                >
                  {t.approach.number}
                </div>

              </div>


              <div className="p-8 sm:p-10">

                <div className="flex items-center gap-3">

                  <span
                    className="
                      h-px
                      w-10
                      bg-gradient-to-r
                      from-[#B100E8]
                      to-[#D100D1]
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#B100E8]
                    "
                  >
                    {t.approach.label}
                  </span>

                </div>


                <h2
                  className="
                    mt-6
                    font-[var(--font-jakarta)]
                    text-3xl
                    font-extrabold
                    leading-[1.12]
                    tracking-[-0.035em]
                    text-[var(--foreground)]
                    sm:text-4xl
                  "
                >
                  {t.approach.title}
                </h2>


                <p
                  className="
                    mt-5
                    text-base
                    leading-8
                    text-[var(--muted-foreground)]
                  "
                >
                  {t.approach.description}
                </p>


                <div
                  className="
                    mt-8
                    h-1
                    w-14
                    rounded-full
                    bg-gradient-to-r
                    from-[#B100E8]
                    to-[#D100D1]
                  "
                />

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================================
          VALUES
      ========================================================= */}

      <section
        className="
          border-y
          border-[var(--border)]
          bg-[#FBF9FD]
          py-20
          sm:py-24
          lg:py-28
          dark:bg-[var(--background)]
        "
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span
                className="
                  h-px
                  w-12
                  bg-gradient-to-r
                  from-[#7B2CBF]
                  to-[#D100D1]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#B100E8]
                "
              >
                {t.values.label}
              </span>

            </div>


            <h2
              className="
                font-[var(--font-jakarta)]
                text-3xl
                font-extrabold
                leading-[1.1]
                tracking-[-0.04em]
                text-[var(--foreground)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              {t.values.title}
            </h2>


            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-[var(--muted-foreground)]
              "
            >
              {t.values.description}
            </p>

          </div>


          <div
            className="
              mt-10
              overflow-hidden
              rounded-[2rem]
              border
              border-[#7B2CBF]/15
              bg-white
              shadow-[0_15px_55px_rgba(90,24,154,0.06)]
              dark:bg-[var(--surface)]
            "
          >

            <div className="grid md:grid-cols-2 lg:grid-cols-4">

              {t.values.items.map((value, index) => (
                <article
                  key={value.title}
                  className={`
                    group
                    relative
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-[#FBF7FE]
                    dark:hover:bg-white/[0.03]
                    sm:p-8
                    lg:p-9
                    ${
                      index !== 0
                        ? "border-t border-[#7B2CBF]/10 md:border-l md:border-t-0"
                        : ""
                    }
                  `}
                >

                  <div className="flex items-start justify-between gap-4">

                    <ResearchIconContainer>
                      <ResearchIcon name={value.icon} />
                    </ResearchIconContainer>


                    <span
                      className="
                        font-[var(--font-jakarta)]
                        text-4xl
                        font-extrabold
                        tracking-[-0.05em]
                        text-[#7B2CBF]/10
                        transition-colors
                        duration-300
                        group-hover:text-[#B100E8]/20
                      "
                    >
                      {value.number}
                    </span>

                  </div>


                  <h3
                    className="
                      mt-8
                      font-[var(--font-jakarta)]
                      text-xl
                      font-extrabold
                      tracking-[-0.025em]
                      text-[var(--foreground)]
                    "
                  >
                    {value.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-[var(--muted-foreground)]
                    "
                  >
                    {value.description}
                  </p>


                  <div
                    className="
                      mt-8
                      h-1
                      w-10
                      rounded-full
                      bg-gradient-to-r
                      from-[#7B2CBF]
                      to-[#D100D1]
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RESEARCH VISUAL
      ========================================================= */}

      <section className="bg-background py-14 sm:py-16">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[#7B2CBF]/15
            "
          >

            <Image
              src={images.howItWorks.workThroughResearch}
              alt={t.visual.imageAlt}
              width={1600}
              height={700}
              className="
                h-[300px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
                sm:h-[380px]
                lg:h-[430px]
              "
            />


            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#16042F]/90
                via-[#260654]/65
                to-transparent
              "
            />


            <div
              className="
                absolute
                inset-y-0
                left-0
                flex
                max-w-2xl
                items-center
                px-7
                sm:px-10
                lg:px-14
              "
            >

              <div>

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#D100D1]
                  "
                >
                  {t.visual.eyebrow}
                </span>


                <h2
                  className="
                    mt-4
                    font-[var(--font-jakarta)]
                    text-3xl
                    font-extrabold
                    leading-tight
                    tracking-[-0.035em]
                    text-white
                    sm:text-4xl
                  "
                >
                  {t.visual.title}
                </h2>

              </div>

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
              border-[#7B2CBF]/15
              bg-white
              shadow-[0_20px_70px_rgba(90,24,154,0.10)]
              dark:bg-[var(--surface)]
              lg:grid-cols-[0.85fr_1.15fr]
            "
          >

            {/* CTA Image */}

            <div
              className="
                relative
                min-h-[320px]
                overflow-hidden
                lg:min-h-[430px]
              "
            >

              <Image
                src={images.whyChooseUs.researchGuidanceSupport}
                alt={t.cta.imageAlt}
                fill
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-105
                "
                sizes="(max-width: 1024px) 100vw, 42vw"
              />


              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#21045F]/65
                  via-[#21045F]/10
                  to-transparent
                "
              />


              <div className="absolute bottom-7 left-7">

                <div
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
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
                  bg-[#B100E8]/8
                  blur-[80px]
                "
              />


              <div className="relative max-w-2xl">

                <div className="mb-5 flex items-center gap-3">

                  <span
                    className="
                      h-px
                      w-12
                      bg-gradient-to-r
                      from-[#7B2CBF]
                      to-[#D100D1]
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#B100E8]
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
                    text-[var(--foreground)]
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
                    text-[var(--muted-foreground)]
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