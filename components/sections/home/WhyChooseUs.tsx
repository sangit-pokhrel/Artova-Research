import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "WHY ARTOVA RESEARCH",
    title: "More than support. A structured research journey.",
    description:
      "We combine academic guidance, research knowledge, and practical support to help you move from uncertainty to a clearer research outcome.",

    points: [
      {
        number: "01",
        title: "Academic Guidance",
        description:
          "Understand your research process with clear and practical academic guidance.",
      },
      {
        number: "02",
        title: "Research-Focused Support",
        description:
          "Get support tailored to proposals, literature reviews, methodology, analysis, and academic writing.",
      },
      {
        number: "03",
        title: "Clear Communication",
        description:
          "Work through your research requirements with straightforward communication and organized guidance.",
      },
      {
        number: "04",
        title: "Student-Centered Approach",
        description:
          "Support designed around your academic level, research requirements, and project goals.",
      },
    ],
  },

  ne: {
    eyebrow: "किन आर्टोभा रिसर्च?",
    title: "सहयोग मात्र होइन, व्यवस्थित अनुसन्धान यात्रा।",
    description:
      "शैक्षिक मार्गदर्शन, अनुसन्धान ज्ञान तथा व्यावहारिक सहयोगलाई जोडेर तपाईंलाई अनुसन्धानको अनिश्चितताबाट स्पष्ट परिणामतर्फ अघि बढ्न सहयोग गर्छौँ।",

    points: [
      {
        number: "०१",
        title: "शैक्षिक मार्गदर्शन",
        description:
          "स्पष्ट तथा व्यावहारिक शैक्षिक मार्गदर्शनमार्फत आफ्नो अनुसन्धान प्रक्रिया बुझ्नुहोस्।",
      },
      {
        number: "०२",
        title: "अनुसन्धान केन्द्रित सहयोग",
        description:
          "प्रस्ताव, साहित्य समीक्षा, अनुसन्धान विधि, विश्लेषण तथा शैक्षिक लेखनमा आवश्यक सहयोग प्राप्त गर्नुहोस्।",
      },
      {
        number: "०३",
        title: "स्पष्ट सञ्चार",
        description:
          "तपाईंका अनुसन्धान आवश्यकताहरूलाई सरल सञ्चार तथा व्यवस्थित मार्गदर्शनमार्फत अगाडि बढाउनुहोस्।",
      },
      {
        number: "०४",
        title: "विद्यार्थी केन्द्रित दृष्टिकोण",
        description:
          "तपाईंको शैक्षिक स्तर, अनुसन्धान आवश्यकता तथा परियोजनाको लक्ष्यअनुसार तयार गरिएको सहयोग।",
      },
    ],
  },
} satisfies Record<Locale, object>;

export default function WhyChooseUs({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="bg-white dark:bg-[#071426]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900]">
              {t.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] dark:text-white sm:text-5xl">
              {t.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#0B1F3A]/65 dark:text-white/65">
              {t.description}
            </p>
          </div>

          <div className="grid gap-0 border-t border-[#0B1F3A]/10 dark:border-white/10">
            {t.points.map((point) => (
              <article
                key={point.number}
                className="grid gap-4 border-b border-[#0B1F3A]/10 py-7 sm:grid-cols-[70px_1fr] dark:border-white/10"
              >
                <span className="text-sm font-bold text-[#D9A900]">
                  {point.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-[#0B1F3A] dark:text-white">
                    {point.title}
                  </h3>

                  <p className="mt-2 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                    {point.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}