import Image from "next/image";

import Button from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "READY TO MOVE FORWARD?",
    title: "Let's make your research journey clearer.",
    description:
      "Whether you are starting a new research project or working through an existing one, we're here to help you move forward with greater clarity.",
    button: "Start a Conversation",
  },

  ne: {
    eyebrow: "अगाडि बढ्न तयार हुनुहुन्छ?",
    title: "तपाईंको अनुसन्धान यात्रालाई अझ स्पष्ट बनाऔँ।",
    description:
      "तपाईं नयाँ अनुसन्धान परियोजना सुरु गर्दै हुनुहुन्छ वा भइरहेको परियोजनामा काम गर्दै हुनुहुन्छ भने, अझ स्पष्टताका साथ अगाडि बढ्न हामी सहयोग गर्न तयार छौँ।",
    button: "कुरा सुरु गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default function FinalCTA({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="-mt-2 overflow-hidden bg-background px-6 py-10 text-foreground transition-colors duration-300 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-border
            bg-surface
            shadow-[var(--shadow-md)]
            transition-all
            duration-300
            sm:rounded-[2.5rem]
          "
        >
          {/* =================================================
              BACKGROUND DECORATION
              ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-96
              w-96
              rounded-full
              bg-accent-soft
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-1/3
              h-72
              w-72
              rounded-full
              bg-accent-soft
              opacity-50
              blur-3xl
            "
          />

          {/* =================================================
              MAIN CONTENT
              ================================================= */}

          <div
            className="
              relative
              grid
              min-h-[520px]
              items-center
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* =================================================
                IMAGE WINDOW
                ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[390px]
                items-center
                justify-center
                px-4
                pt-8
                sm:min-h-[460px]
                sm:px-8
                lg:min-h-[560px]
                lg:justify-start
                lg:px-8
                lg:py-10
              "
            >
              {/* Purple glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  top-1/2
                  h-[420px]
                  w-[320px]
                  -translate-y-1/2
                  rounded-full
                  bg-accent/15
                  blur-3xl
                "
              />

              {/* =================================================
                  TILTED IMAGE WINDOW
                  ================================================= */}

              <div
                className="
                  relative
                  z-10
                  h-[390px]
                  w-[275px]
                  rotate-[5deg]
                  rounded-[2rem]
                  border
                  border-accent/30
                  bg-accent-soft
                  p-2
                  shadow-[var(--shadow-lg)]
                  transition-transform
                  duration-500
                  hover:rotate-[2deg]
                  sm:h-[460px]
                  sm:w-[325px]
                  lg:h-[530px]
                  lg:w-[370px]
                "
              >
                {/* Full image */}

                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[1.5rem]
                    bg-surface-elevated
                  "
                >
                  <Image
                    src="/images/make-journey-clear.png"
                    alt="Research journey"
                    fill
                    className="object-contain object-center"
                    sizes="370px"
                  />

                  {/* Very subtle overlay */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-primary/10
                      via-transparent
                      to-transparent
                    "
                  />
                </div>

                {/* Window corner accent */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-2
                    -right-2
                    h-14
                    w-14
                    rounded-br-[1.5rem]
                    border-b-2
                    border-r-2
                    border-accent
                  "
                />
              </div>

              {/* =================================================
                  FLOATING IMAGE LABEL
                  ================================================= */}

              <div
                className="
                  absolute
                  bottom-8
                  left-4
                  z-20
                  rounded-full
                  border
                  border-border
                  bg-surface-elevated/95
                  px-4
                  py-2.5
                  shadow-[var(--shadow-sm)]
                  backdrop-blur-md
                  sm:bottom-10
                  sm:left-8
                  lg:bottom-10
                  lg:left-4
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-accent
                  "
                >
                  Research • Ideas • Impact
                </span>
              </div>
            </div>

            {/* =================================================
                TEXT CONTENT
                ================================================= */}

            <div
              className="
                relative
                z-10
                px-7
                pb-12
                sm:px-12
                sm:pb-14
                lg:px-10
                lg:py-16
                lg:pr-20
              "
            >
              {/* Decorative quotation */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-16
                  select-none
                  font-serif
                  text-[9rem]
                  font-bold
                  leading-none
                  text-accent/[0.07]
                  sm:text-[11rem]
                  lg:-right-6
                  lg:-top-20
                "
              >
                ”
              </span>

              {/* Eyebrow */}

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  {t.eyebrow}
                </p>
              </div>

              {/* Title */}

              <h2
                className="
                  mt-5
                  max-w-2xl
                  font-[var(--font-jakarta)]
                  text-4xl
                  font-extrabold
                  leading-[1.05]
                  tracking-tight
                  text-foreground
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {t.title}
              </h2>

              {/* Description */}

              <p
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-8
                  text-muted
                  sm:text-lg
                "
              >
                {t.description}
              </p>

              {/* =================================================
                  CTA BUTTON
                  Same button as "View All Services"
                  ================================================= */}

              <Button
                href={`/${locale}/contact`}
                className="mt-9"
              >
                {t.button}
              </Button>

              {/* Bottom brand line */}

              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-16 bg-accent/40" />

                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-soft">
                  Artova Research
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}