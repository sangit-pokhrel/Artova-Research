import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "RESOURCES",
    title: "Useful resources to help you move forward with your research.",
    intro:
      "Explore practical academic resources designed to help you understand research concepts, organize your work, and approach your academic journey with greater clarity.",

    resources: [
      {
        number: "01",
        title: "Research Guides",
        description:
          "Practical guidance on research planning, topic development, research questions, objectives, and academic structure.",
      },
      {
        number: "02",
        title: "Academic Writing",
        description:
          "Learn about academic writing structure, clarity, organization, citations, referencing, and presenting research effectively.",
      },
      {
        number: "03",
        title: "Research Methodology",
        description:
          "Understand research designs, qualitative and quantitative approaches, sampling, data collection, and research methods.",
      },
      {
        number: "04",
        title: "Literature Review",
        description:
          "Resources to help you search for academic literature, organize sources, identify research gaps, and develop literature reviews.",
      },
      {
        number: "05",
        title: "Data Analysis",
        description:
          "Guidance on understanding research data, selecting analytical approaches, interpreting results, and presenting findings.",
      },
      {
        number: "06",
        title: "Research Tips",
        description:
          "Simple and practical tips for managing your research process, improving productivity, and avoiding common academic challenges.",
      },
    ],

    blogTitle: "Research Insights",
    blogDescription:
      "We are building a collection of articles and practical research insights. More resources will be added here as the platform grows.",

    ctaTitle: "Looking for something specific?",
    ctaDescription:
      "If you cannot find the resource you need, contact us and tell us what you are working on.",
    ctaButton: "Contact Us",
  },

  ne: {
    eyebrow: "स्रोत सामग्री",
    title: "तपाईंको अनुसन्धानलाई अगाडि बढाउन उपयोगी स्रोतहरू।",
    intro:
      "अनुसन्धानका अवधारणाहरू बुझ्न, आफ्नो काम व्यवस्थित गर्न तथा शैक्षिक यात्रालाई अझ स्पष्ट रूपमा अगाडि बढाउन सहयोग गर्ने व्यावहारिक स्रोतहरू हेर्नुहोस्।",

    resources: [
      {
        number: "०१",
        title: "अनुसन्धान मार्गदर्शन",
        description:
          "अनुसन्धान योजना, विषय विकास, अनुसन्धान प्रश्न, उद्देश्य तथा शैक्षिक संरचनासम्बन्धी व्यावहारिक मार्गदर्शन।",
      },
      {
        number: "०२",
        title: "शैक्षिक लेखन",
        description:
          "शैक्षिक लेखनको संरचना, स्पष्टता, संगठन, उद्धरण, सन्दर्भ तथा अनुसन्धान प्रभावकारी रूपमा प्रस्तुत गर्ने तरिकाबारे जानकारी।",
      },
      {
        number: "०३",
        title: "अनुसन्धान विधि",
        description:
          "अनुसन्धान डिजाइन, गुणात्मक तथा परिमाणात्मक विधि, नमुना छनोट, डेटा सङ्कलन तथा अनुसन्धान विधिहरू बुझ्न सहयोग।",
      },
      {
        number: "०४",
        title: "साहित्य समीक्षा",
        description:
          "शैक्षिक साहित्य खोज्ने, स्रोतहरू व्यवस्थित गर्ने, अनुसन्धानका खाली स्थान पहिचान गर्ने तथा साहित्य समीक्षा विकास गर्ने स्रोतहरू।",
      },
      {
        number: "०५",
        title: "डेटा विश्लेषण",
        description:
          "अनुसन्धान डेटा बुझ्ने, उपयुक्त विश्लेषण विधि छनोट गर्ने, परिणाम व्याख्या गर्ने तथा निष्कर्ष प्रस्तुत गर्ने मार्गदर्शन।",
      },
      {
        number: "०६",
        title: "अनुसन्धान सुझावहरू",
        description:
          "अनुसन्धान प्रक्रिया व्यवस्थापन, उत्पादकता सुधार तथा सामान्य शैक्षिक चुनौतीहरूबाट बच्न सहयोग गर्ने व्यावहारिक सुझावहरू।",
      },
    ],

    blogTitle: "अनुसन्धान सामग्री",
    blogDescription:
      "हामी व्यावहारिक अनुसन्धान सामग्री तथा लेखहरूको संग्रह तयार गर्दैछौँ। प्लेटफर्म विस्तार हुँदै जाँदा थप स्रोतहरू यहाँ थपिनेछन्।",

    ctaTitle: "तपाईंलाई कुनै विशेष स्रोत चाहिन्छ?",
    ctaDescription:
      "तपाईंलाई आवश्यक स्रोत यहाँ भेटिएन भने हामीलाई सम्पर्क गर्नुहोस् र तपाईंले गरिरहेको कामबारे जानकारी दिनुहोस्।",
    ctaButton: "सम्पर्क गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default async function ResourcesPage({
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.resources.map((resource) => (
              <article
                key={resource.number}
                className="group rounded-2xl border border-[#0B1F3A]/10 bg-white p-8 transition hover:-translate-y-1 hover:border-[#D9A900]/50 dark:border-white/10 dark:bg-[#071426]"
              >
                <span className="text-sm font-bold text-[#D9A900]">
                  {resource.number}
                </span>

                <h2 className="mt-5 text-2xl font-semibold text-[#0B1F3A] dark:text-white">
                  {resource.title}
                </h2>

                <p className="mt-4 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                  {resource.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#0B1F3A] dark:text-white">
                  Coming soon →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#071426]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A900]">
            {t.blogTitle}
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#0B1F3A] dark:text-white sm:text-5xl">
            {t.blogDescription}
          </h2>
        </div>
      </section>

      <section className="bg-[#0B1F3A] dark:bg-[#D9A900]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
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