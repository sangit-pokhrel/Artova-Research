import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "STUDENT EXPERIENCES",
    title: "Support that makes the research journey clearer.",
    description:
      "Thoughtful guidance and structured support can make a meaningful difference throughout an academic project.",

    testimonials: [
      {
        quote:
          "The guidance helped me understand my research process more clearly and approach my thesis with greater confidence.",
        name: "Student",
        role: "Thesis Support",
      },
      {
        quote:
          "The research support made complex parts of my project much easier to understand and organize.",
        name: "Researcher",
        role: "Research Support",
      },
      {
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
        quote:
          "मार्गदर्शनले मेरो अनुसन्धान प्रक्रियालाई अझ स्पष्ट रूपमा बुझ्न र थेसिसमा आत्मविश्वासका साथ अगाडि बढ्न सहयोग गर्‍यो।",
        name: "विद्यार्थी",
        role: "थेसिस सहयोग",
      },
      {
        quote:
          "अनुसन्धान सहयोगले मेरो परियोजनाका जटिल पक्षहरूलाई बुझ्न र व्यवस्थित गर्न निकै सहज बनायो।",
        name: "अनुसन्धानकर्ता",
        role: "अनुसन्धान सहयोग",
      },
      {
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

  return (
    <section className="bg-surface text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.eyebrow}
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {t.title}
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
            {t.description}
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {t.testimonials.map((testimonial, index) => (
            <article
              key={testimonial.quote}
              className={`
                group relative flex min-h-[360px]
                flex-col justify-between
                overflow-hidden rounded-3xl
                p-8
                transition duration-300
                hover:-translate-y-1
                sm:p-10
                ${
                  index === 0
                    ? "bg-primary text-white shadow-[var(--shadow-lg)]"
                    : "theme-card"
                }
              `}
            >
              {/* Large quotation mark */}
              <span
                aria-hidden="true"
                className={`
                  absolute -right-2 -top-8
                  text-[10rem]
                  font-serif
                  leading-none
                  ${
                    index === 0
                      ? "text-white/[0.05]"
                      : "text-foreground/[0.04]"
                  }
                `}
              >
                “
              </span>

              <div className="relative">
                {/* Small accent */}
                <div className="mb-8 h-1 w-8 rounded-full bg-accent transition-all duration-300 group-hover:w-14" />

                <blockquote
                  className={`
                    text-xl
                    font-medium
                    leading-8
                    ${
                      index === 0
                        ? "text-white/90"
                        : "text-foreground/80"
                    }
                  `}
                >
                  “{testimonial.quote}”
                </blockquote>
              </div>

              {/* Attribution */}
              <div
                className={`
                  relative mt-10
                  border-t pt-6
                  ${
                    index === 0
                      ? "border-white/10"
                      : "border-border"
                  }
                `}
              >
                <p className="font-semibold">
                  {testimonial.name}
                </p>

                <p
                  className={`
                    mt-1 text-sm
                    ${
                      index === 0
                        ? "text-white/45"
                        : "text-muted"
                    }
                  `}
                >
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}