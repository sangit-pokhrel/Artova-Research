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
    <section className="bg-white dark:bg-[#071426]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900]">
            {t.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] dark:text-white sm:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#0B1F3A]/65 dark:text-white/65">
            {t.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.testimonials.map((testimonial) => (
            <article
              key={testimonial.quote}
              className="rounded-2xl border border-[#0B1F3A]/10 bg-[#F7F8FA] p-8 dark:border-white/10 dark:bg-[#0B1F3A]"
            >
              <div className="text-3xl text-[#D9A900]">“</div>

              <blockquote className="mt-4 text-lg leading-8 text-[#0B1F3A]/80 dark:text-white/80">
                {testimonial.quote}
              </blockquote>

              <div className="mt-8 border-t border-[#0B1F3A]/10 pt-5 dark:border-white/10">
                <p className="font-semibold text-[#0B1F3A] dark:text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-[#0B1F3A]/50 dark:text-white/50">
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