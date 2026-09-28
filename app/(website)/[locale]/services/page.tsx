import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "OUR SERVICES",
    title: "Research support for every stage of your academic journey.",
    intro:
      "From developing your research idea to preparing and refining your final academic work, Artova Research provides structured support across key research stages.",

    services: [
      {
        number: "01",
        title: "Research Proposal Support",
        description:
          "Develop a clear research proposal with support for topic selection, research questions, objectives, scope, methodology, and overall structure.",
      },
      {
        number: "02",
        title: "Thesis & Dissertation Support",
        description:
          "Get structured guidance throughout your thesis or dissertation, from planning and chapter development to review and refinement.",
      },
      {
        number: "03",
        title: "Literature Review",
        description:
          "Identify, organize, evaluate, and synthesize relevant academic literature to establish a strong foundation for your research.",
      },
      {
        number: "04",
        title: "Research Methodology",
        description:
          "Understand and develop appropriate research designs, methods, sampling approaches, data collection techniques, and methodological structures.",
      },
      {
        number: "05",
        title: "Data Analysis",
        description:
          "Get support with preparing, analyzing, interpreting, and presenting research data using appropriate analytical approaches.",
      },
      {
        number: "06",
        title: "Academic Writing Support",
        description:
          "Improve the structure, clarity, organization, and academic presentation of your research documents.",
      },
      {
        number: "07",
        title: "Research Guidance",
        description:
          "Receive practical guidance when you are unsure about your research direction, methodology, analysis, or next steps.",
      },
      {
        number: "08",
        title: "Project & Academic Support",
        description:
          "Support for academic projects and research-related work across different subjects and academic levels.",
      },
    ],

    ctaTitle: "Need support with your research?",
    ctaDescription:
      "Tell us about your project and requirements, and we can discuss how we can support your research journey.",
    ctaButton: "Contact Us",
  },

  ne: {
    eyebrow: "हाम्रा सेवाहरू",
    title: "तपाईंको शैक्षिक यात्राका प्रत्येक चरणका लागि अनुसन्धान सहयोग।",
    intro:
      "अनुसन्धानको विचार विकास गर्नेदेखि अन्तिम शैक्षिक कार्य तयार तथा परिष्कृत गर्नेसम्म आर्टोभा रिसर्चले अनुसन्धानका महत्वपूर्ण चरणहरूमा व्यवस्थित सहयोग प्रदान गर्दछ।",

    services: [
      {
        number: "०१",
        title: "अनुसन्धान प्रस्ताव सहयोग",
        description:
          "विषय छनोट, अनुसन्धान प्रश्न, उद्देश्य, क्षेत्र, अनुसन्धान विधि तथा समग्र संरचनामा सहयोगसहित स्पष्ट अनुसन्धान प्रस्ताव तयार गर्न सहयोग।",
      },
      {
        number: "०२",
        title: "थेसिस तथा डिसर्टेसन सहयोग",
        description:
          "योजना तथा अध्याय विकासदेखि समीक्षा र परिष्करणसम्म थेसिस वा डिसर्टेसनको सम्पूर्ण प्रक्रियामा व्यवस्थित मार्गदर्शन।",
      },
      {
        number: "०३",
        title: "साहित्य समीक्षा",
        description:
          "सम्बन्धित शैक्षिक साहित्य पहिचान, व्यवस्थित, मूल्याङ्कन तथा संश्लेषण गरी अनुसन्धानका लागि बलियो आधार तयार गर्न सहयोग।",
      },
      {
        number: "०४",
        title: "अनुसन्धान विधि",
        description:
          "उपयुक्त अनुसन्धान डिजाइन, विधि, नमुना छनोट, डेटा सङ्कलन प्रविधि तथा अनुसन्धान संरचना बुझ्न र विकास गर्न सहयोग।",
      },
      {
        number: "०५",
        title: "डेटा विश्लेषण",
        description:
          "उपयुक्त विश्लेषणात्मक विधिहरू प्रयोग गरी अनुसन्धान डेटा तयार, विश्लेषण, व्याख्या तथा प्रस्तुत गर्न सहयोग।",
      },
      {
        number: "०६",
        title: "शैक्षिक लेखन सहयोग",
        description:
          "अनुसन्धान दस्तावेजको संरचना, स्पष्टता, संगठन तथा शैक्षिक प्रस्तुतिलाई सुधार गर्न सहयोग।",
      },
      {
        number: "०७",
        title: "अनुसन्धान मार्गदर्शन",
        description:
          "अनुसन्धानको दिशा, विधि, विश्लेषण वा आगामी चरणबारे अन्योल हुँदा व्यावहारिक मार्गदर्शन प्राप्त गर्नुहोस्।",
      },
      {
        number: "०८",
        title: "परियोजना तथा शैक्षिक सहयोग",
        description:
          "विभिन्न विषय तथा शैक्षिक स्तरका शैक्षिक परियोजना र अनुसन्धानसम्बन्धी कार्यहरूमा सहयोग।",
      },
    ],

    ctaTitle: "तपाईंको अनुसन्धानमा सहयोग चाहिन्छ?",
    ctaDescription:
      "आफ्नो परियोजना तथा आवश्यकताबारे हामीलाई जानकारी दिनुहोस् र तपाईंको अनुसन्धान यात्रामा कसरी सहयोग गर्न सक्छौँ भन्नेबारे छलफल गरौँ।",
    ctaButton: "सम्पर्क गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default async function ServicesPage({
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
          <div className="grid gap-6 md:grid-cols-2">
            {t.services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-[#0B1F3A]/10 bg-white p-8 dark:border-white/10 dark:bg-[#071426] sm:p-10"
              >
                <span className="text-sm font-bold text-[#D9A900]">
                  {service.number}
                </span>

                <h2 className="mt-5 text-2xl font-semibold text-[#0B1F3A] dark:text-white">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] dark:bg-[#D9A900]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24">
          <h2 className="text-4xl font-bold tracking-tight text-white dark:text-[#071426] sm:text-5xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 dark:text-[#071426]/70">
            {t.ctaDescription}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-9 inline-flex rounded-full bg-[#D9A900] px-7 py-3.5 font-semibold text-[#071426] transition hover:bg-[#f0c21a] dark:bg-[#0B1F3A] dark:text-white dark:hover:bg-[#102d54]"
          >
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}