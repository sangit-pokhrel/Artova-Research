"use client";

import { useState } from "react";

import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "STUDENT EXPERIENCES",
    title: "Support that makes the research journey clearer.",
    description:
      "Thoughtful guidance and structured support can make a meaningful difference throughout an academic project.",

    testimonials: [
      {
        number: "01",
        quote:
          "The guidance helped me understand my research process more clearly and approach my thesis with greater confidence.",
        name: "Student",
        role: "Thesis Support",
      },
      {
        number: "02",
        quote:
          "The research support made complex parts of my project much easier to understand and organize.",
        name: "Researcher",
        role: "Research Support",
      },
      {
        number: "03",
        quote:
          "The structured approach helped me move from an initial idea to a much clearer research direction.",
        name: "Student",
        role: "Research Guidance",
      },
    ],
  },

  ne: {
    eyebrow: "विद्यार्थी अनुभव",
    title: "अनुसन्धान यात्रालाई अझ स्पष्ट बनाउने सहयोग।",
    description:
      "शैक्षिक परियोजनाका विभिन्न चरणमा उचित मार्गदर्शन तथा व्यवस्थित सहयोगले महत्वपूर्ण फरक पार्न सक्छ।",

    testimonials: [
      {
        number: "०१",
        quote:
          "मार्गदर्शनले मेरो अनुसन्धान प्रक्रियालाई अझ स्पष्ट रूपमा बुझ्न र थेसिसमा आत्मविश्वासका साथ अगाडि बढ्न सहयोग गर्‍यो।",
        name: "विद्यार्थी",
        role: "थेसिस सहयोग",
      },
      {
        number: "०२",
        quote:
          "अनुसन्धान सहयोगले मेरो परियोजनाका जटिल पक्षहरूलाई बुझ्न र व्यवस्थित गर्न निकै सहज बनायो।",
        name: "अनुसन्धानकर्ता",
        role: "अनुसन्धान सहयोग",
      },
      {
        number: "०३",
        quote:
          "व्यवस्थित प्रक्रियाले प्रारम्भिक विचारबाट स्पष्ट अनुसन्धान दिशातर्फ अघि बढ्न सहयोग गर्‍यो।",
        name: "विद्यार्थी",
        role: "अनुसन्धान मार्गदर्शन",
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
    <section className="-mt-2 overflow-hidden bg-surface text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-8">
        {/* =====================================================
            HEADER
            ===================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.eyebrow}
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-xl
                font-[var(--font-jakarta)]
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-foreground
                sm:text-5xl
              "
            >
              {t.title}
            </h2>
          </div>

          <p
            className="
              max-w-2xl
              text-base
              leading-8
              text-muted
              lg:justify-self-end
              lg:text-lg
            "
          >
            {t.description}
          </p>
        </div>

        {/* =====================================================
            TESTIMONIAL AREA
            ===================================================== */}
        <div className="relative mt-10">
          {/* Large opening quotation mark */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-3
              -top-16
              z-0
              select-none
              font-serif
              text-[9rem]
              font-bold
              leading-none
              text-accent/[0.08]
              sm:-left-6
              sm:-top-20
              sm:text-[11rem]
            "
          >
            “
          </span>

          {/* Large closing quotation mark */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              -right-2
              z-0
              select-none
              font-serif
              text-[9rem]
              font-bold
              leading-none
              text-accent/[0.08]
              sm:-right-5
              sm:-bottom-24
              sm:text-[11rem]
            "
          >
            ”
          </span>

          {/* Timeline */}
          <div className="relative z-10 hidden h-px bg-border md:block">
            <div
              className="
                absolute
                left-0
                top-1/2
                h-1.5
                w-1.5
                -translate-y-1/2
                rounded-full
                bg-accent
              "
            />

            <div
              className="
                absolute
                right-0
                top-1/2
                h-1.5
                w-1.5
                -translate-y-1/2
                rounded-full
                bg-border-strong
              "
            />
          </div>

          {/* =================================================
              TESTIMONIALS
              ================================================= */}
          <div className="relative z-10 grid md:grid-cols-3">
            {t.testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={testimonial.quote}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(index)}
                  onBlur={() => setActiveIndex(null)}
                  className="
                    group
                    relative
                    text-left
                    outline-none
                    md:px-6
                    md:first:pl-0
                    md:last:pr-0
                  "
                >
                  {/* Timeline point */}
                  <div
                    className={`
                      absolute
                      -top-[4px]
                      left-1/2
                      hidden
                      h-2
                      w-2
                      -translate-x-1/2
                      rounded-full
                      transition-all
                      duration-300
                      md:block
                      ${
                        isActive
                          ? "h-3 w-3 bg-accent shadow-[0_0_0_5px_var(--accent-soft)]"
                          : "bg-border-strong"
                      }
                    `}
                  />

                  <div
                    className={`
                      relative
                      py-8
                      transition-all
                      duration-300
                      md:pt-10
                      ${
                        isActive
                          ? "md:-translate-y-2"
                          : "md:translate-y-0"
                      }
                    `}
                  >
                    {/* Small decorative closing quote */}
                    <span
                      aria-hidden="true"
                      className={`
                        pointer-events-none
                        absolute
                        right-3
                        top-7
                        select-none
                        font-serif
                        text-5xl
                        leading-none
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "text-accent/25"
                            : "text-accent/[0.07]"
                        }
                      `}
                    >
                      ”
                    </span>

                    {/* Number */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                          font-[var(--font-jakarta)]
                          text-xs
                          font-bold
                          tracking-[0.18em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-accent"
                              : "text-muted"
                          }
                        `}
                      >
                        {testimonial.number}
                      </span>

                      <span
                        className={`
                          h-px
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-12 bg-accent"
                              : "w-7 bg-border"
                          }
                        `}
                      />
                    </div>

                    {/* Quote */}
                    <blockquote
                      className={`
                        relative
                        mt-6
                        max-w-md
                        font-[var(--font-jakarta)]
                        text-lg
                        font-medium
                        leading-8
                        transition-all
                        duration-300
                        ${
                          activeIndex !== null && !isActive
                            ? "text-foreground/40"
                            : "text-foreground/80"
                        }
                        ${
                          isActive
                            ? "text-foreground"
                            : ""
                        }
                      `}
                    >
                      “{testimonial.quote}”
                    </blockquote>

                    {/* Attribution */}
                    <div className="mt-7">
                      <p
                        className={`
                          text-sm
                          font-bold
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-accent"
                              : "text-foreground"
                          }
                        `}
                      >
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-xs text-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Active bottom indicator */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      left-6
                      right-6
                      h-0.5
                      rounded-full
                      bg-accent
                      transition-all
                      duration-300
                      md:left-6
                      md:right-6
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM BRAND LINE
            ===================================================== */}
        <div className="relative z-10 mt-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
            Artova Research
          </span>

          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}