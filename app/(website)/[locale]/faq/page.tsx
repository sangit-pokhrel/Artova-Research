import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    intro:
      "Find answers to common questions about our research and academic support services.",

    faqs: [
      {
        question: "What kind of research support do you provide?",
        answer:
          "We provide academic and research-focused support across areas such as research proposals, thesis and dissertation work, literature reviews, research methodology, data analysis, academic writing, and research guidance.",
      },
      {
        question: "Can you help me choose a research topic?",
        answer:
          "Yes. We can help you explore potential research areas, narrow down a topic, identify a research problem, and develop a suitable research direction based on your academic requirements.",
      },
      {
        question: "Do you support thesis and dissertation projects?",
        answer:
          "Yes. We provide structured guidance across different stages of thesis and dissertation work, including planning, methodology, literature review, analysis, writing, review, and refinement.",
      },
      {
        question: "Can you help with research methodology?",
        answer:
          "Yes. We can provide guidance on research design, qualitative and quantitative approaches, sampling, data collection, variables, and other methodological considerations.",
      },
      {
        question: "Do you provide data analysis support?",
        answer:
          "Yes. We provide research-focused support for preparing, analyzing, interpreting, and presenting data using appropriate analytical approaches.",
      },
      {
        question: "Can you help with literature reviews?",
        answer:
          "Yes. We can support the process of identifying relevant literature, organizing sources, understanding previous research, identifying research gaps, and developing a structured literature review.",
      },
      {
        question: "Do you work with students from different academic subjects?",
        answer:
          "Yes. Our services cover a range of academic disciplines. If your specific subject is not listed on our Subjects page, you can contact us to discuss your requirements.",
      },
      {
        question: "Can I get support for only one part of my research?",
        answer:
          "Yes. You can request support for a specific research stage or area rather than the entire project. We can discuss your requirements and determine the appropriate scope of support.",
      },
      {
        question: "How do I get started?",
        answer:
          "You can contact us through the Contact page and share your research topic, academic level, requirements, and the type of support you are looking for.",
      },
      {
        question: "Do you guarantee academic results?",
        answer:
          "Academic outcomes depend on many factors, including the student's work, institutional requirements, research quality, and evaluation. We focus on providing structured and responsible academic support rather than guaranteeing a particular result.",
      },
    ],
  },

  ne: {
    eyebrow: "सामान्य प्रश्नहरू",
    title: "प्रायः सोधिने प्रश्नहरू।",
    intro:
      "हाम्रो अनुसन्धान तथा शैक्षिक सहयोग सेवासम्बन्धी सामान्य प्रश्नहरूको उत्तर यहाँ पाउनुहोस्।",

    faqs: [
      {
        question: "तपाईंहरूले कस्तो अनुसन्धान सहयोग प्रदान गर्नुहुन्छ?",
        answer:
          "हामी अनुसन्धान प्रस्ताव, थेसिस तथा डिसर्टेसन, साहित्य समीक्षा, अनुसन्धान विधि, डेटा विश्लेषण, शैक्षिक लेखन तथा अनुसन्धान मार्गदर्शनजस्ता क्षेत्रमा शैक्षिक तथा अनुसन्धान केन्द्रित सहयोग प्रदान गर्छौँ।",
      },
      {
        question: "के तपाईंहरूले अनुसन्धानको विषय छनोट गर्न सहयोग गर्नुहुन्छ?",
        answer:
          "गर्छौँ। तपाईंको शैक्षिक आवश्यकताअनुसार सम्भावित अनुसन्धान क्षेत्र खोज्न, विषयलाई सीमित गर्न, अनुसन्धान समस्या पहिचान गर्न तथा उपयुक्त अनुसन्धान दिशा विकास गर्न सहयोग गर्न सक्छौँ।",
      },
      {
        question: "के थेसिस तथा डिसर्टेसन परियोजनामा सहयोग पाइन्छ?",
        answer:
          "पाइन्छ। योजना, अनुसन्धान विधि, साहित्य समीक्षा, विश्लेषण, लेखन, समीक्षा तथा परिष्करणलगायत थेसिस तथा डिसर्टेसनका विभिन्न चरणमा व्यवस्थित मार्गदर्शन प्रदान गर्छौँ।",
      },
      {
        question: "के अनुसन्धान विधिमा सहयोग पाइन्छ?",
        answer:
          "पाइन्छ। अनुसन्धान डिजाइन, गुणात्मक तथा परिमाणात्मक विधि, नमुना छनोट, डेटा सङ्कलन, चर तथा अन्य अनुसन्धान विधिसम्बन्धी विषयमा मार्गदर्शन प्रदान गर्न सक्छौँ।",
      },
      {
        question: "के डेटा विश्लेषणमा सहयोग गर्नुहुन्छ?",
        answer:
          "गर्छौँ। उपयुक्त विश्लेषणात्मक विधि प्रयोग गरी अनुसन्धान डेटा तयार गर्ने, विश्लेषण गर्ने, व्याख्या गर्ने तथा प्रस्तुत गर्ने प्रक्रियामा अनुसन्धान केन्द्रित सहयोग प्रदान गर्छौँ।",
      },
      {
        question: "के साहित्य समीक्षा तयार गर्न सहयोग पाइन्छ?",
        answer:
          "पाइन्छ। सम्बन्धित साहित्य पहिचान गर्ने, स्रोतहरू व्यवस्थित गर्ने, अघिल्लो अनुसन्धान बुझ्ने, अनुसन्धानका खाली स्थान पहिचान गर्ने तथा व्यवस्थित साहित्य समीक्षा विकास गर्न सहयोग गर्न सक्छौँ।",
      },
      {
        question: "के विभिन्न शैक्षिक विषयका विद्यार्थीलाई सहयोग गर्नुहुन्छ?",
        answer:
          "गर्छौँ। हाम्रो सेवाले विभिन्न शैक्षिक विषयहरू समेट्छ। तपाईंको विषय Subjects पृष्ठमा सूचीबद्ध नभए पनि आफ्नो आवश्यकताबारे हामीसँग सम्पर्क गर्न सक्नुहुन्छ।",
      },
      {
        question: "के अनुसन्धानको एउटा भागमा मात्र सहयोग लिन सकिन्छ?",
        answer:
          "सकिन्छ। सम्पूर्ण परियोजनाको सट्टा अनुसन्धानको कुनै विशेष चरण वा क्षेत्रमा मात्र सहयोग लिन सकिन्छ। तपाईंको आवश्यकताअनुसार सहयोगको दायरा छलफल गर्न सकिन्छ।",
      },
      {
        question: "सुरु कसरी गर्ने?",
        answer:
          "Contact पृष्ठमार्फत हामीलाई सम्पर्क गरी आफ्नो अनुसन्धान विषय, शैक्षिक स्तर, आवश्यकताहरू तथा आफूले खोजिरहेको सहयोगको प्रकारबारे जानकारी दिनुहोस्।",
      },
      {
        question: "के तपाईंहरूले शैक्षिक परिणामको ग्यारेन्टी गर्नुहुन्छ?",
        answer:
          "शैक्षिक परिणाम विद्यार्थीको प्रयास, संस्थाको आवश्यकता, अनुसन्धानको गुणस्तर तथा मूल्याङ्कनलगायत विभिन्न कुरामा निर्भर हुन्छ। हामी कुनै निश्चित परिणामको ग्यारेन्टी गर्नुको सट्टा व्यवस्थित तथा जिम्मेवार शैक्षिक सहयोग प्रदान गर्न केन्द्रित छौँ।",
      },
    ],
  },
} satisfies Record<Locale, object>;

export default async function FAQPage({
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
      {/* Hero */}
      <section className="bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              {t.title}
            </h1>

            <p className="mt-8 text-lg leading-8 text-muted sm:text-xl">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface-elevated">
            {t.faqs.map((faq, index) => (
              <details
                key={faq.question}
                className={`group ${
                  index !== t.faqs.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                <summary
                  className="
                    flex cursor-pointer list-none
                    items-center justify-between
                    gap-6
                    px-6 py-6
                    text-lg font-bold
                    text-foreground
                    transition-colors
                    hover:text-accent
                    sm:px-8 sm:py-7 sm:text-xl
                  "
                >
                  <span>{faq.question}</span>

                  <span
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-border
                      text-xl font-normal
                      text-accent
                      transition duration-200
                      group-open:rotate-45
                    "
                  >
                    +
                  </span>
                </summary>

                <div className="px-6 pb-7 sm:px-8">
                  <p className="max-w-3xl leading-8 text-muted">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-background px-6 pb-24 text-foreground transition-colors duration-300 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-4xl bg-primary px-7 py-16 text-center text-white sm:px-12 sm:py-20 lg:px-20">
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-24 -top-24
                h-72 w-72
                rounded-full
                bg-accent-soft
                blur-3xl
              "
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
                {locale === "en"
                  ? "STILL HAVE QUESTIONS?"
                  : "अझै प्रश्नहरू छन्?"}
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {locale === "en"
                  ? "Let's talk about your research."
                  : "तपाईंको अनुसन्धानबारे कुरा गरौँ।"}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
                {locale === "en"
                  ? "If you cannot find the answer you are looking for, get in touch and tell us about your requirements."
                  : "तपाईंले खोजेको उत्तर यहाँ भेटिएन भने हामीलाई सम्पर्क गरी आफ्नो आवश्यकताबारे जानकारी दिनुहोस्।"}
              </p>

              <Link
                href={`/${locale}/contact`}
                className="
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-accent
                  px-7 py-3.5
                  text-sm font-semibold
                  text-primary
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-accent-hover
                "
              >
                {locale === "en" ? "Contact Us" : "सम्पर्क गर्नुहोस्"}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}