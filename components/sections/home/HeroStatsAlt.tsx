"use client";

import type { Locale } from "@/lib/i18n/config";

type HeroStatsAltProps = {
  locale: Locale;
};

const content = {
  en: {
    eyebrow: "RESEARCH AT A GLANCE",
    title: "Built around your",
    highlightedTitle: "research journey.",
    description:
      "From the first idea to the final outcome, we focus on making academic research clearer, more structured, and easier to move forward.",
    stats: [
      {
        value: "8+",
        title: "Research Support",
        subtitle: "Areas",
        icon: "research",
        visual: "wave",
      },
      {
        value: "10+",
        title: "Academic",
        subtitle: "Subjects",
        icon: "subjects",
        visual: "bars",
      },
      {
        value: "100%",
        title: "Research-Focused",
        subtitle: "Approach",
        icon: "target",
        visual: "line",
      },
      {
        value: "1",
        title: "Clearer Path",
        subtitle: "Forward",
        icon: "result",
        visual: "gold",
      },
    ],
  },

  ne: {
    eyebrow: "अनुसन्धानको एक झलक",
    title: "तपाईंको",
    highlightedTitle: "अनुसन्धान यात्रामा केन्द्रित।",
    description:
      "पहिलो विचारदेखि अन्तिम नतिजासम्म, हामी अनुसन्धानलाई अझ स्पष्ट, व्यवस्थित र अगाडि बढाउन सहज बनाउन केन्द्रित छौँ।",
    stats: [
      {
        value: "8+",
        title: "अनुसन्धान सहयोगका",
        subtitle: "क्षेत्रहरू",
        icon: "research",
        visual: "wave",
      },
      {
        value: "10+",
        title: "शैक्षिक",
        subtitle: "विषयहरू",
        icon: "subjects",
        visual: "bars",
      },
      {
        value: "100%",
        title: "अनुसन्धान-केन्द्रित",
        subtitle: "दृष्टिकोण",
        icon: "target",
        visual: "line",
      },
      {
        value: "1",
        title: "स्पष्ट",
        subtitle: "मार्ग",
        icon: "result",
        visual: "gold",
      },
    ],
  },
} as const;

function ResearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z"
      />
    </svg>
  );
}

function SubjectsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 3 8 4-8 4-8-4 8-4Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 12 8 4 8-4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 17 8 4 8-4"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 12 6.5-6.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 5.5h2.5V8"
      />
    </svg>
  );
}

function ResultIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v14"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7 12 5 5 5-5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 21h14"
      />
    </svg>
  );
}

function StatIcon({ type }: { type: string }) {
  if (type === "subjects") {
    return <SubjectsIcon />;
  }

  if (type === "target") {
    return <TargetIcon />;
  }

  if (type === "result") {
    return <ResultIcon />;
  }

  return <ResearchIcon />;
}

function WaveVisual() {
  return (
    <svg
      viewBox="0 0 220 55"
      fill="none"
      className="h-14 w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave-fill" x1="0" y1="0" x2="220" y2="0">
          <stop offset="0%" stopColor="#B100E8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 43C28 29 48 30 72 37C97 45 117 47 141 37C165 27 186 28 220 38V55H0Z"
        fill="url(#wave-fill)"
      />

      <path
        d="M0 43C28 29 48 30 72 37C97 45 117 47 141 37C165 27 186 28 220 38"
        stroke="#B100E8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BarsVisual() {
  return (
    <div
      className="flex h-14 items-end justify-end gap-2"
      aria-hidden="true"
    >
      {[10, 16, 23, 34, 45, 55].map((height, index) => (
        <span
          key={index}
          className="
            w-3.5 rounded-t-md
            bg-gradient-to-t from-[#7B2CBF]/20 to-[#8B2FC9]/75
            transition-all duration-500
            group-hover:from-[#7B2CBF]/35
            group-hover:to-[#B100E8]
          "
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}

function LineVisual() {
  return (
    <svg
      viewBox="0 0 220 55"
      fill="none"
      className="h-14 w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="line-fill" x1="0" y1="0" x2="220" y2="0">
          <stop offset="0%" stopColor="#7B2CBF" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#B100E8" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <path
        d="M0 44C30 35 48 39 71 41C97 44 111 42 132 31C155 19 174 8 220 7V55H0Z"
        fill="url(#line-fill)"
      />

      <path
        d="M0 44C30 35 48 39 71 41C97 44 111 42 132 31C155 19 174 8 220 7"
        stroke="#B100E8"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <circle cx="220" cy="7" r="4.5" fill="#B100E8" />
    </svg>
  );
}

function GoldLineVisual() {
  return (
    <svg
      viewBox="0 0 220 55"
      fill="none"
      className="h-14 w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gold-fill" x1="0" y1="0" x2="220" y2="0">
          <stop offset="0%" stopColor="#F5C400" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#F5C400" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <path
        d="M0 44C30 36 52 41 76 40C103 39 119 33 139 28C161 22 181 27 197 18C207 12 214 10 220 7V55H0Z"
        fill="url(#gold-fill)"
      />

      <path
        d="M0 44C30 36 52 41 76 40C103 39 119 33 139 28C161 22 181 27 197 18C207 12 214 10 220 7"
        stroke="#F5C400"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <circle cx="220" cy="7" r="4.5" fill="#F5C400" />
    </svg>
  );
}

function StatVisual({ type }: { type: string }) {
  if (type === "bars") {
    return <BarsVisual />;
  }

  if (type === "line") {
    return <LineVisual />;
  }

  if (type === "gold") {
    return <GoldLineVisual />;
  }

  return <WaveVisual />;
}

export default function HeroStatsAlt({
  locale,
}: HeroStatsAltProps) {
  const t = content[locale];

  return (
    <section
      className="
        relative overflow-hidden
        bg-background
        text-foreground
        transition-colors duration-300
      "
    >
      {/* Background glow - top left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 -top-32
          h-[30rem] w-[30rem]
          rounded-full
          bg-[#B100E8]/8
          blur-[110px]
        "
      />

      {/* Background glow - top right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-20
          h-[28rem] w-[28rem]
          rounded-full
          bg-[#7B2CBF]/10
          blur-[120px]
        "
      />

      {/* Background glow - bottom left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-40 -left-20
          h-[22rem] w-[22rem]
          rounded-full
          bg-[#8B2FC9]/6
          blur-[100px]
        "
      />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-10 top-8
          h-32 w-32
          rounded-full
          border border-purple-bright/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-10 top-20
          h-16 w-16
          rounded-full
          bg-purple-bright/5
          blur-xl
        "
      />

      {/* Decorative dots */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-8 left-0
          h-24 w-24
          opacity-40
        "
      >
        <div
          className="
            h-full w-full
            bg-[radial-gradient(circle,#B100E8_1.5px,transparent_1.5px)]
            [background-size:14px_14px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_2.22fr] lg:items-center lg:gap-12">
          {/* Intro */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-[#7B2CBF] to-[#D100D1]" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B2FC9]">
                {t.eyebrow}
              </p>
            </div>

            <h2
              className="
                mt-5
                max-w-lg
                text-4xl font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-foreground
                sm:text-5xl
              "
            >
              {t.title}
              <br />
              <span className="bg-gradient-to-r from-[#7B2CBF] via-[#B100E8] to-[#D100D1] bg-clip-text text-transparent">
                {t.highlightedTitle}
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              {t.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {t.stats.map((stat) => (
              <article
                key={stat.value + stat.title}
                className="
                  group relative overflow-hidden
                  rounded-[1.5rem]
                  border border-[#7B2CBF]/12
                  bg-surface-elevated
                  p-6
                  shadow-[0_12px_35px_rgba(90,24,154,0.06)]
                  transition-all duration-500
                  hover:-translate-y-1.5
                  hover:border-[#B100E8]/30
                  hover:shadow-[0_20px_50px_rgba(123,44,191,0.12)]
                "
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -right-12 -top-12
                    h-28 w-28
                    rounded-full
                    bg-purple-bright/0
                    blur-3xl
                    transition-all duration-500
                    group-hover:bg-purple-bright/10
                  "
                />

                <div className="relative z-10">
                  {/* Icon + arrow */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex h-11 w-11 items-center justify-center
                        rounded-xl
                        border border-purple-bright/10
                        bg-purple-bright/8
                        text-purple-brand
                        transition-all duration-300
                        group-hover:scale-105
                        group-hover:border-purple-bright/20
                        group-hover:bg-purple-bright/12
                      "
                    >
                      <StatIcon type={stat.icon} />
                    </div>

                    <span
                      className="
                        flex h-8 w-8 items-center justify-center
                        rounded-full
                        border border-purple-bright/10
                        text-sm text-purple-brand/70
                        transition-all duration-300
                        group-hover:border-purple-bright/30
                        group-hover:bg-purple-bright/5
                        group-hover:text-purple-brand
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    >
                      ↗
                    </span>
                  </div>

                  {/* Number */}
                  <p
                    className="
                      mt-7
                      text-5xl font-extrabold
                      leading-none
                      tracking-[-0.045em]
                      bg-gradient-to-r
                      from-[#5A189A]
                      via-[#7B2CBF]
                      to-[#B100E8]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {stat.value}
                  </p>

                  {/* Label */}
                  <div className="mt-3 min-h-[3.5rem]">
                    <p className="text-sm font-semibold leading-5 text-foreground">
                      {stat.title}
                    </p>

                    <p className="text-sm font-semibold leading-5 text-foreground">
                      {stat.subtitle}
                    </p>
                  </div>

                  {/* Mini visual */}
                  <div className="mt-5">
                    <StatVisual type={stat.visual} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}