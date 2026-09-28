import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "WHAT WE DO",
    title: "Research support built around your needs.",
    description:
      "From the first research idea to the final academic document, we provide focused support throughout your research journey.",
    services: [
      {
        number: "01",
        title: "Proposal Support",
        description:
          "Develop clear, structured and academically sound research proposals.",
      },
      {
        number: "02",
        title: "Thesis & Dissertation",
        description:
          "Guidance and support throughout your thesis or dissertation journey.",
      },
      {
        number: "03",
        title: "Data Analysis",
        description:
          "Turn your research data into meaningful findings and clear results.",
      },
      {
        number: "04",
        title: "Literature Review",
        description:
          "Organize, evaluate and synthesize relevant academic literature.",
      },
    ],
    button: "View All Services",
  },

  ne: {
    eyebrow: "हामी के गर्छौँ",
    title: "तपाईंको आवश्यकताअनुसार अनुसन्धान सहयोग।",
    description:
      "अनुसन्धानको प्रारम्भिक विचारदेखि अन्तिम शैक्षिक दस्तावेजसम्म तपाईंको अनुसन्धान यात्राका विभिन्न चरणमा केन्द्रित सहयोग।",
    services: [
      {
        number: "०१",
        title: "प्रस्ताव सहयोग",
        description:
          "स्पष्ट, व्यवस्थित र शैक्षिक रूपमा बलियो अनुसन्धान प्रस्ताव तयार गर्न सहयोग।",
      },
      {
        number: "०२",
        title: "थेसिस तथा डिसर्टेसन",
        description:
          "थेसिस वा डिसर्टेसनको सम्पूर्ण यात्रामा आवश्यक मार्गदर्शन तथा सहयोग।",
      },
      {
        number: "०३",
        title: "डेटा विश्लेषण",
        description:
          "अनुसन्धानका डेटालाई अर्थपूर्ण निष्कर्ष तथा स्पष्ट परिणाममा रूपान्तरण गर्न सहयोग।",
      },
      {
        number: "०४",
        title: "साहित्य समीक्षा",
        description:
          "सम्बन्धित शैक्षिक साहित्यलाई व्यवस्थित, मूल्याङ्कन तथा संश्लेषण गर्न सहयोग।",
      },
    ],
    button: "सबै सेवाहरू हेर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default function ServicesPreview({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <section className="bg-[#F7F8FA] dark:bg-[#0B1F3A]">
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

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#0B1F3A]/10 bg-[#0B1F3A]/10 sm:grid-cols-2 dark:border-white/10 dark:bg-white/10">
          {t.services.map((service) => (
            <article
              key={service.number}
              className="bg-white p-8 dark:bg-[#071426] sm:p-10"
            >
              <span className="text-sm font-bold text-[#D9A900]">
                {service.number}
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-[#0B1F3A] dark:text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-[#0B1F3A]/65 dark:text-white/60">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={`/${locale}/services`}
            className="inline-flex rounded-full bg-[#0B1F3A] px-6 py-3 font-semibold text-white transition hover:bg-[#102d54] dark:bg-[#D9A900] dark:text-[#071426]"
          >
            {t.button}
          </Link>
        </div>
      </div>
    </section>
  );
}