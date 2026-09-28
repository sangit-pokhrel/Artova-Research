import type { Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const content = {
  en: {
    eyebrow: "ABOUT ARTOVA RESEARCH",
    title: "Helping students and researchers move forward with clarity.",
    intro:
      "Artova Research provides academic and research support for students and researchers working on projects, proposals, theses, dissertations, and other academic work.",

    missionTitle: "Our Mission",
    mission:
      "Our mission is to make the research journey more structured, understandable, and manageable by providing practical academic guidance and research-focused support.",

    approachTitle: "Our Approach",
    approach:
      "Every research project has different requirements. We focus on understanding the academic context, identifying the research needs, and providing structured support throughout the process.",

    valuesTitle: "What We Value",

    values: [
      {
        title: "Clarity",
        description:
          "Making complex academic and research requirements easier to understand.",
      },
      {
        title: "Academic Quality",
        description:
          "Following structured academic practices and maintaining attention to research quality.",
      },
      {
        title: "Practical Support",
        description:
          "Providing guidance that can be applied directly to your research work.",
      },
      {
        title: "Responsible Research",
        description:
          "Encouraging proper research practices, academic integrity, and responsible use of information.",
      },
    ],
  },

  ne: {
    eyebrow: "आर्टोभा रिसर्चको बारेमा",
    title: "विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई स्पष्टताका साथ अगाडि बढ्न सहयोग।",
    intro:
      "आर्टोभा रिसर्चले परियोजना, प्रस्ताव, थेसिस, डिसर्टेसन तथा अन्य शैक्षिक कार्यमा संलग्न विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई शैक्षिक तथा अनुसन्धान सहयोग प्रदान गर्दछ।",

    missionTitle: "हाम्रो उद्देश्य",
    mission:
      "व्यावहारिक शैक्षिक मार्गदर्शन तथा अनुसन्धान केन्द्रित सहयोगमार्फत अनुसन्धान यात्रालाई अझ व्यवस्थित, बुझ्न सजिलो तथा व्यवस्थापन गर्न सहज बनाउनु हाम्रो उद्देश्य हो।",

    approachTitle: "हाम्रो दृष्टिकोण",
    approach:
      "प्रत्येक अनुसन्धान परियोजनाका आवश्यकताहरू फरक हुन्छन्। हामी शैक्षिक सन्दर्भ बुझ्ने, अनुसन्धानका आवश्यकताहरू पहिचान गर्ने तथा सम्पूर्ण प्रक्रियामा व्यवस्थित सहयोग प्रदान गर्ने कुरामा केन्द्रित हुन्छौँ।",

    valuesTitle: "हाम्रा मूल्यहरू",

    values: [
      {
        title: "स्पष्टता",
        description:
          "जटिल शैक्षिक तथा अनुसन्धान आवश्यकताहरूलाई बुझ्न सहज बनाउने।",
      },
      {
        title: "शैक्षिक गुणस्तर",
        description:
          "व्यवस्थित शैक्षिक अभ्यासहरू पालना गर्दै अनुसन्धानको गुणस्तरमा ध्यान दिने।",
      },
      {
        title: "व्यावहारिक सहयोग",
        description:
          "तपाईंको अनुसन्धान कार्यमा प्रत्यक्ष रूपमा प्रयोग गर्न सकिने मार्गदर्शन प्रदान गर्ने।",
      },
      {
        title: "जिम्मेवार अनुसन्धान",
        description:
          "उचित अनुसन्धान अभ्यास, शैक्षिक इमानदारी तथा सूचनाको जिम्मेवार प्रयोगलाई प्रोत्साहन गर्ने।",
      },
    ],
  },
} satisfies Record<Locale, object>;

export default async function AboutPage({
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
      <section className="bg-white dark:bg-[#071426]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900]">
              {t.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-[#0B1F3A] dark:text-white sm:text-6xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#0B1F3A]/65 dark:text-white/65">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] dark:bg-[#0B1F3A]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A900]">
                {t.missionTitle}
              </p>

              <p className="mt-5 text-2xl font-semibold leading-9 text-[#0B1F3A] dark:text-white">
                {t.mission}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A900]">
                {t.approachTitle}
              </p>

              <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/65 dark:text-white/65">
                {t.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#071426]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A900]">
              {t.valuesTitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-[#0B1F3A]/10 p-7 dark:border-white/10"
              >
                <h2 className="text-xl font-semibold text-[#0B1F3A] dark:text-white">
                  {value.title}
                </h2>

                <p className="mt-3 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}