import type { Locale } from "./config";

export const translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      subjects: "Subjects",
      research: "Research",
      resources: "Resources",
      faq: "FAQ",
      contact: "Contact Us",
    },

    home: {
      eyebrow: "Artova Research",
      title: "Research support for better academic work.",
      description:
        "Supporting students and researchers with academic guidance, research support, data analysis, and resources.",
      servicesButton: "Explore Services",
      contactButton: "Contact Us",
    },

    about: {
      eyebrow: "About Artova Research",
      title: "Supporting better research.",
      description:
        "Artova Research provides academic and research support designed around the needs of students and researchers.",
    },

    services: {
      eyebrow: "Our Services",
      title: "Research support when you need it.",
      description:
        "Explore our academic and research support services.",
    },

    subjects: {
      eyebrow: "Subjects",
      title: "Support across different academic fields.",
      description:
        "Explore the academic subjects and research areas supported by Artova Research.",
    },

    research: {
      eyebrow: "Research",
      title: "Build stronger research.",
      description:
        "Guidance and support for research projects, proposals, theses, dissertations, and academic studies.",
    },

    resources: {
      eyebrow: "Resources",
      title: "Useful resources for your academic journey.",
      description:
        "Explore guides, academic resources, research materials, and helpful information.",
    },

    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "Answers to common questions.",
      description:
        "Find answers to frequently asked questions about our academic and research support.",
    },

    contact: {
      eyebrow: "Contact Us",
      title: "Let's talk about your research.",
      description:
        "Get in touch with Artova Research for academic guidance, research support, and project assistance.",
    },
  },

  ne: {
    navigation: {
      home: "गृहपृष्ठ",
      about: "हाम्रो बारेमा",
      services: "सेवाहरू",
      subjects: "विषयहरू",
      research: "अनुसन्धान",
      resources: "स्रोतहरू",
      faq: "सोधिने प्रश्नहरू",
      contact: "सम्पर्क गर्नुहोस्",
    },

    home: {
      eyebrow: "आर्टोभा रिसर्च",
      title: "उत्कृष्ट शैक्षिक कार्यका लागि अनुसन्धान सहयोग।",
      description:
        "विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई शैक्षिक मार्गदर्शन, अनुसन्धान सहयोग, डेटा विश्लेषण तथा उपयोगी स्रोतहरू प्रदान गर्दै।",
      servicesButton: "सेवाहरू हेर्नुहोस्",
      contactButton: "सम्पर्क गर्नुहोस्",
    },

    about: {
      eyebrow: "आर्टोभा रिसर्चको बारेमा",
      title: "उत्कृष्ट अनुसन्धानका लागि सहयोग।",
      description:
        "आर्टोभा रिसर्चले विद्यार्थी तथा अनुसन्धानकर्ताहरूको आवश्यकताअनुसार शैक्षिक तथा अनुसन्धान सहयोग प्रदान गर्दछ।",
    },

    services: {
      eyebrow: "हाम्रा सेवाहरू",
      title: "आवश्यकताअनुसार अनुसन्धान सहयोग।",
      description:
        "हाम्रा शैक्षिक तथा अनुसन्धान सहयोग सेवाहरूको बारेमा जान्नुहोस्।",
    },

    subjects: {
      eyebrow: "विषयहरू",
      title: "विभिन्न शैक्षिक क्षेत्रहरूमा सहयोग।",
      description:
        "आर्टोभा रिसर्चले सहयोग गर्ने शैक्षिक विषय तथा अनुसन्धान क्षेत्रहरू हेर्नुहोस्।",
    },

    research: {
      eyebrow: "अनुसन्धान",
      title: "अझ प्रभावकारी अनुसन्धान निर्माण गर्नुहोस्।",
      description:
        "अनुसन्धान परियोजना, प्रस्ताव, थेसिस, डिसर्टेसन तथा शैक्षिक अध्ययनका लागि मार्गदर्शन र सहयोग।",
    },

    resources: {
      eyebrow: "स्रोतहरू",
      title: "तपाईंको शैक्षिक यात्राका लागि उपयोगी स्रोतहरू।",
      description:
        "गाइड, शैक्षिक स्रोत, अनुसन्धान सामग्री तथा उपयोगी जानकारीहरू हेर्नुहोस्।",
    },

    faq: {
      eyebrow: "बारम्बार सोधिने प्रश्नहरू",
      title: "सामान्य प्रश्नहरूको उत्तर।",
      description:
        "हाम्रो शैक्षिक तथा अनुसन्धान सहयोगसम्बन्धी बारम्बार सोधिने प्रश्नहरूको उत्तर पाउनुहोस्।",
    },

    contact: {
      eyebrow: "सम्पर्क गर्नुहोस्",
      title: "तपाईंको अनुसन्धानबारे कुरा गरौँ।",
      description:
        "शैक्षिक मार्गदर्शन, अनुसन्धान सहयोग तथा परियोजना सम्बन्धी सहायताका लागि आर्टोभा रिसर्चसँग सम्पर्क गर्नुहोस्।",
    },
  },
} satisfies Record<Locale, unknown>;