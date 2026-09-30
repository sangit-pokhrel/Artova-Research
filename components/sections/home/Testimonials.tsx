"use client";

import Image from "next/image";
import { useState } from "react";

import type { Locale } from "@/lib/i18n/config";
import { images } from "@/lib/images";

const content = {
  en: {
    eyebrow: "RESEARCH VOICES",
    title: "Real experiences. Clearer research.",
    description:
      "Thoughtful guidance and structured support can help students and researchers move through their academic work with greater clarity and confidence.",

    supportLabel: "Research support in practice",
    supportText:
      "From early ideas to final academic work, we focus on making each stage more structured and understandable.",

    reviewsLabel: "Research feedback",
    trustpilot: "Trustpilot",

    testimonials: [
      {
        // number: "01",
        quote:
          "The guidance helped me understand my research process more clearly and approach my thesis with greater confidence.",
        name: "Student",
        role: "Thesis Support",
      },
      {
        // number: "02",
        quote:
          "The research support made complex parts of my project much easier to understand and organize.",
        name: "Researcher",
        role: "Research Support",
      },
      {
        // number: "03",
        quote:
          "The structured approach helped me move from an initial idea to a much clearer research direction.",
        name: "Student",
        role: "Research Guidance",
      },
      {
        // number: "04",
        quote:
          "The support helped me bring different parts of my academic work together in a more organized way.",
        name: "Researcher",
        role: "Academic Project Support",
      },
    ],
  },

  ne: {
    eyebrow: "अनुसन्धानका अनुभव",
    title: "वास्तविक अनुभव। अझ स्पष्ट अनुसन्धान।",
    description:
      "उचित मार्गदर्शन र व्यवस्थित सहयोगले विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई आफ्नो शैक्षिक कार्य अझ स्पष्ट र आत्मविश्वासका साथ अघि बढाउन सहयोग गर्न सक्छ।",

    supportLabel: "व्यवहारमा अनुसन्धान सहयोग",
    supportText:
      "प्रारम्भिक विचारदेखि अन्तिम शैक्षिक कार्यसम्म, प्रत्येक चरणलाई अझ व्यवस्थित र बुझ्न सजिलो बनाउने हाम्रो उद्देश्य हो।",

    reviewsLabel: "अनुसन्धान प्रतिक्रिया",
    trustpilot: "Trustpilot",

    testimonials: [
      {
        // number: "०१",
        quote:
          "मार्गदर्शनले मेरो अनुसन्धान प्रक्रियालाई अझ स्पष्ट रूपमा बुझ्न र थेसिसमा आत्मविश्वासका साथ अगाडि बढ्न सहयोग गर्‍यो।",
        name: "विद्यार्थी",
        role: "थेसिस सहयोग",
      },
      {
        // number: "०२",
        quote:
          "अनुसन्धान सहयोगले मेरो परियोजनाका जटिल पक्षहरूलाई बुझ्न र व्यवस्थित गर्न निकै सहज बनायो।",
        name: "अनुसन्धानकर्ता",
        role: "अनुसन्धान सहयोग",
      },
      {
        // number: "०३",
        quote:
          "व्यवस्थित प्रक्रियाले प्रारम्भिक विचारबाट स्पष्ट अनुसन्धान दिशातर्फ अघि बढ्न सहयोग गर्‍यो।",
        name: "विद्यार्थी",
        role: "अनुसन्धान मार्गदर्शन",
      },
      {
        // number: "०४",
        quote:
          "सहयोगले मेरो शैक्षिक कार्यका विभिन्न पक्षहरूलाई अझ व्यवस्थित रूपमा एकसाथ अघि बढाउन सहयोग गर्‍यो।",
        name: "अनुसन्धानकर्ता",
        role: "शैक्षिक परियोजना सहयोग",
      },
    ],
  },
} satisfies Record<Locale, object>;

export default function Testimonials({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-muted/30 text-foreground transition-colors duration-300">
      {/* =========================================================
          BACKGROUND EFFECTS
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-80
          w-80
          rounded-full
          bg-purple-brand/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-purple-bright/10
          blur-3xl
        "
      />

      {/* =========================================================
          MAIN
          ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-28
        "
      >
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
              ===================================================== */}

          <div>
            {/* Eyebrow */}

            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-purple-bright" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-purple-brand
                  dark:text-purple-bright
                "
              >
                {t.eyebrow}
              </p>
            </div>

            {/* Main heading */}

            <h2
              className="
                mt-5
                max-w-lg
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-foreground
                sm:text-5xl
                lg:text-[3.15rem]
                xl:text-[3.4rem]
              "
            >
              {t.title}
            </h2>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                text-muted-foreground
                sm:text-[17px]
              "
            >
              {t.description}
            </p>

            {/* =================================================
                RESEARCH SUPPORT HIGHLIGHT
                ================================================= */}

            <div
              className="
                group
                relative
                mt-8
                max-w-md
                overflow-hidden
                rounded-2xl
                border
                border-purple-bright/20
                bg-background
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-bright/40
                hover:shadow-[0_16px_40px_rgba(123,44,191,0.12)]
              "
            >
              {/* Small glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  bg-purple-bright/10
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:bg-purple-bright/20
                "
              />

              <div className="relative z-10 flex gap-4">
                {/* Icon */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-[#7B2CBF]
                    via-[#B100E8]
                    to-[#D100D1]
                    text-white
                    shadow-[0_8px_20px_rgba(177,0,232,0.22)]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 19V5M4 19H20M8 16V12M12 16V8M16 16V10M20 16V4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground">
                    {t.supportLabel}
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    {t.supportText}
                  </p>
                </div>
              </div>
            </div>

            {/* Small visual line */}

            <div className="mt-8 flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-purple-bright" />
              <span className="h-px w-12 bg-purple-bright/40" />
              <span className="h-1 w-1 rounded-full bg-purple-bright/40" />
              <span className="h-px w-20 bg-border" />
            </div>
          </div>

          {/* =====================================================
              TESTIMONIAL CARDS
              ===================================================== */}

          <div className="grid gap-4 sm:grid-cols-2">
            {t.testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={`${testimonial.name}-${index}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`
  group
  relative
  flex
  min-h-[245px]
  flex-col
  justify-between
  overflow-hidden
  rounded-2xl
  border
  border-border/80
  bg-background
  p-5
  shadow-[0_8px_25px_rgba(15,23,42,0.06)]
  transition-all
  duration-300
  sm:min-h-[255px]
  sm:p-6

  opacity-100

  hover:-translate-y-1.5
  hover:border-purple-bright/40
  hover:shadow-[0_16px_35px_rgba(123,44,191,0.12)]
`}
                >
                  {/* Card glow */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-24
                      w-24
                      rounded-full
                      bg-purple-bright/0
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-purple-bright/15
                    "
                  />

                  {/* =================================================
                      TOP
                      ================================================= */}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      {/* Stars */}

                      <div
                        className="flex items-center gap-0.5"
                        aria-label="Review"
                      >
                        <span className="text-[15px] text-purple-bright">
                          ★
                        </span>
                        <span className="text-[15px] text-purple-bright">
                          ★
                        </span>
                        <span className="text-[15px] text-purple-bright">
                          ★
                        </span>
                        <span className="text-[15px] text-purple-bright">
                          ★
                        </span>
                        <span className="text-[15px] text-purple-bright">
                          ★
                        </span>
                      </div>

                      {/* Trustpilot logo */}

                      <Image
                        src={images.testimonials.trustpilotLogo}
                        alt="Trustpilot"
                        width={90}
                        height={24}
                        className="
                          h-auto
                          w-[78px]
                          object-contain
                          opacity-80
                          transition-all
                          duration-300
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    {/* Quote */}

                    <blockquote
                      className="
                        mt-5
                        text-[14px]
                        leading-6
                        text-foreground
                        sm:text-[15px]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          mr-1
                          font-serif
                          text-xl
                          leading-none
                          text-purple-bright
                        "
                      >
                        “
                      </span>

                      {testimonial.quote}

                      <span
                        aria-hidden="true"
                        className="
                          ml-1
                          font-serif
                          text-xl
                          leading-none
                          text-purple-bright
                        "
                      >
                        ”
                      </span>
                    </blockquote>
                  </div>

                  {/* =================================================
                      BOTTOM
                      ================================================= */}

                  <div
                    className="
                      relative
                      z-10
                      mt-6
                      border-t
                      border-border
                      pt-4
                    "
                  >
                    <div className="flex items-center gap-3">
                      {/* Initial */}

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-purple-bright/10
                          text-xs
                          font-bold
                          text-purple-brand
                          transition-all
                          duration-300
                          group-hover:bg-gradient-to-br
                          group-hover:from-[#7B2CBF]
                          group-hover:to-[#B100E8]
                          group-hover:text-white
                        "
                      >
                        {testimonial.name
                          .split(" ")
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join("")}
                      </div>

                      {/* Name */}

                      <div className="min-w-0">
                        <p
                          className="
                            truncate
                            text-xs
                            font-bold
                            text-foreground
                            transition-colors
                            duration-300
                            group-hover:text-purple-brand
                            dark:group-hover:text-purple-bright
                          "
                        >
                          {testimonial.name}
                        </p>

                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>

                      
                    </div>
                  </div>

                  {/* Bottom accent */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-0.5
                      w-0
                      bg-gradient-to-r
                      from-[#7B2CBF]
                      via-[#B100E8]
                      to-[#D100D1]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM BRAND LINE
            ========================================================= */}

        <div className="mt-14 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-muted-foreground
            "
          >
            Artova Research
          </span>

          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}