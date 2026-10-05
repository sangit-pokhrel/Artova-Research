import Link from "next/link";

import FAQAccordion from "@/components/ui/FAQAccordion";
import type { Locale } from "@/lib/i18n/config";

type FAQPreviewProps = {
  locale: Locale;
};

const content = {
  en: {
    eyebrow: "FAQ",
    title: "Questions about your research?",
    description:
      "Find quick answers to some of the common questions about our research and academic support.",
    button: "View All FAQs",
    items: [
      {
        question: "What kind of research support does Artova Research provide?",
        answer:
          "Artova Research provides structured support across different stages of academic research, including research proposals, thesis and dissertation work, literature reviews, research methodology, data analysis, academic writing, and research guidance.",
      },
      {
        question: "Do you support thesis and dissertation work?",
        answer:
          "Yes. We provide guidance and academic support throughout the thesis or dissertation journey, from planning and methodology to analysis, writing, review, and refinement.",
      },
      {
        question: "Can I get help with data analysis?",
        answer:
          "Yes. We provide research-focused data analysis support to help you work with your research data, understand results, and present findings clearly.",
      },
      {
        question: "Do you provide research methodology guidance?",
        answer:
          "Yes. We can provide structured guidance on research methodology and help you understand the methodological requirements of your academic work.",
      },
      {
        question: "Who can use Artova Research's services?",
        answer:
          "Our services are designed for students and researchers who need structured academic and research support at different stages of their work.",
      },
      {
        question: "How can I get started?",
        answer:
          "You can contact us through the website and share your research topic, requirements, and current stage. We can then discuss the most appropriate way to support your work.",
      },
      {
        question: "How quickly will I receive a response to my enquiry?",
        answer:
          "We aim to respond to enquiries within one hour during our working hours. Response times may vary slightly depending on the nature of your enquiry.",
      },
    ],
  },

  ne: {
    eyebrow: "बारम्बार सोधिने प्रश्नहरू",
    title: "तपाईंको अनुसन्धानबारे प्रश्नहरू छन्?",
    description:
      "हाम्रो अनुसन्धान तथा शैक्षिक सहयोगसम्बन्धी सामान्य प्रश्नहरूको छोटो उत्तर यहाँ पाउनुहोस्।",
    button: "सबै प्रश्नहरू हेर्नुहोस्",
    items: [
      {
        question: "Artova Research ले कस्तो अनुसन्धान सहयोग प्रदान गर्छ?",
        answer:
          "Artova Research ले अनुसन्धान प्रस्ताव, थेसिस तथा डिसर्टेसन, साहित्य समीक्षा, अनुसन्धान विधि, डेटा विश्लेषण, शैक्षिक लेखन तथा अनुसन्धान मार्गदर्शनलगायत अनुसन्धानका विभिन्न चरणमा संरचित सहयोग प्रदान गर्छ।",
      },
      {
        question: "के तपाईंहरूले थेसिस तथा डिसर्टेसनमा सहयोग गर्नुहुन्छ?",
        answer:
          "हो। थेसिस वा डिसर्टेसनको योजना, अनुसन्धान विधि, विश्लेषण, लेखन, समीक्षा तथा सुधारलगायत विभिन्न चरणमा आवश्यक शैक्षिक मार्गदर्शन तथा सहयोग प्रदान गर्छौँ।",
      },
      {
        question: "के डेटा विश्लेषणमा सहयोग पाइन्छ?",
        answer:
          "हो। अनुसन्धान डेटासँग काम गर्न, परिणाम बुझ्न तथा अनुसन्धानका निष्कर्षहरू स्पष्ट रूपमा प्रस्तुत गर्न अनुसन्धान-केन्द्रित डेटा विश्लेषण सहयोग प्रदान गर्छौँ।",
      },
      {
        question: "के अनुसन्धान विधिसम्बन्धी मार्गदर्शन पाइन्छ?",
        answer:
          "हो। तपाईंको शैक्षिक कार्यका अनुसन्धान विधिसम्बन्धी आवश्यकताहरू बुझ्न तथा व्यवस्थित रूपमा अगाडि बढ्न आवश्यक मार्गदर्शन प्रदान गर्न सक्छौँ।",
      },
      {
        question: "Artova Research का सेवाहरू कसले प्रयोग गर्न सक्छन्?",
        answer:
          "हाम्रा सेवाहरू आफ्नो शैक्षिक तथा अनुसन्धान कार्यका विभिन्न चरणमा संरचित सहयोग आवश्यक पर्ने विद्यार्थी तथा अनुसन्धानकर्ताहरूका लागि तयार गरिएका हुन्।",
      },
      {
        question: "सुरु कसरी गर्ने?",
        answer:
          "तपाईंले वेबसाइटमार्फत हामीलाई सम्पर्क गरी आफ्नो अनुसन्धान विषय, आवश्यकता तथा हालको चरणबारे जानकारी दिन सक्नुहुन्छ। त्यसपछि तपाईंको कार्यका लागि उपयुक्त सहयोगबारे छलफल गर्न सक्छौँ।",
      },
      {
        question:
          "मैले आफ्नो सोधपुछको जवाफ कति छिटो पाउँछु?",
        answer:
          "हामी हाम्रो कार्यसमयभित्र प्राप्त सोधपुछहरूको जवाफ एक घण्टाभित्र दिने प्रयास गर्छौं। सोधपुछको प्रकृतिअनुसार जवाफ दिने समय केही फरक पर्न सक्छ।",
      }
    ],
  },
} as const;

export default function FAQPreview({ locale }: FAQPreviewProps) {
  const t = content[locale];

  return (
    <section className="relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
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
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-accent-soft
          opacity-60
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.eyebrow}
              </p>
            </div>

            <h2
              className="
                mt-5
                max-w-xl
                font-[var(--font-jakarta)]
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-foreground
                sm:text-5xl
              "
            >
              {t.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted lg:justify-self-end lg:text-lg">
            {t.description}
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-10 max-w-5xl">
          <FAQAccordion items={t.items} />
        </div>

       
      </div>
    </section>
  );
}