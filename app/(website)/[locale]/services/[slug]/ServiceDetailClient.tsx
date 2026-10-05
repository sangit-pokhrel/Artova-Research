"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Check, ChevronRight } from "lucide-react";

import type { Locale } from "@/lib/i18n/config";
import { services, type Service } from "@/lib/services";

type ServiceDetailClientProps = {
  service: Service;
  locale: Locale;
};

const nepaliContent = {
  researchProposal: {
    title: "अनुसन्धान प्रस्ताव सहयोग",
    shortDescription:
      "स्पष्ट र संरचित अनुसन्धान प्रस्ताव तयार गर्दै बलियो शैक्षिक दिशा विकास गर्नुहोस्।",
    description:
      "बलियो अनुसन्धान स्पष्ट दिशाबाट सुरु हुन्छ। तपाईंको अनुसन्धान विचारलाई तार्किक समस्या विवरण, अनुसन्धान उद्देश्य, अनुसन्धान प्रश्न, दायरा तथा उपयुक्त अनुसन्धान दिशासहित केन्द्रित प्रस्तावमा संरचना गर्न हामी सहयोग गर्छौं।",
    includes: [
      "अनुसन्धान विषय विकास",
      "समस्याको विवरण",
      "अनुसन्धान उद्देश्य",
      "अनुसन्धान प्रश्न",
      "अनुसन्धानको दायरा",
      "प्रस्ताव संरचना",
    ],
    suitableFor: [
      "नयाँ अनुसन्धान परियोजना सुरु गर्ने विद्यार्थी",
      "अनुसन्धान प्रस्ताव तयार गर्ने विद्यार्थी",
      "विद्यमान अनुसन्धान विचारलाई परिष्कृत गर्ने अनुसन्धानकर्ता",
    ],
    process: [
      {
        title: "बुझ्ने",
        description:
          "तपाईंको अनुसन्धान विषय, शैक्षिक आवश्यकता, अनुसन्धान विचार तथा हालको दिशाबारे बुझिन्छ।",
      },
      {
        title: "संरचना गर्ने",
        description:
          "अनुसन्धान विचारलाई स्पष्ट उद्देश्य, प्रश्न, दायरा तथा तार्किक प्रस्ताव संरचनामा व्यवस्थित गरिन्छ।",
      },
      {
        title: "परिष्कृत गर्ने",
        description:
          "प्रस्तावका प्रमुख भागहरूबीच स्पष्टता, एकरूपता, दायरा तथा सम्बन्धको समीक्षा गरिन्छ।",
      },
    ],
  },

  thesisDissertation: {
    title: "थेसिस तथा डिसर्टेसन सहयोग",
    shortDescription:
      "स्नातक, स्नातकोत्तर तथा डिसर्टेसन अनुसन्धानका प्रमुख चरणहरूमा संरचित सहयोग।",
    description:
      "थेसिस तथा डिसर्टेसन परियोजनामा धेरै आपसमा जोडिएका चरणहरू हुन्छन्। अनुसन्धान योजना, अध्याय विकास, अनुसन्धान विधि, साहित्य समीक्षा, विश्लेषण, शैक्षिक लेखन, फर्म्याटिङ तथा अन्तिम समीक्षामा संरचित सहयोग प्रदान गर्छौं।",
    includes: [
      "अनुसन्धान संरचना",
      "अध्याय व्यवस्थापन",
      "अनुसन्धान विधि मार्गदर्शन",
      "साहित्य समीक्षा सहयोग",
      "डाटा विश्लेषण सहयोग",
      "फर्म्याटिङ तथा अन्तिम समीक्षा",
    ],
    suitableFor: [
      "स्नातक थेसिस विद्यार्थी",
      "स्नातकोत्तर डिसर्टेसन विद्यार्थी",
      "ठूला अनुसन्धान परियोजना पूरा गर्ने विद्यार्थी",
    ],
    process: [
      {
        title: "योजना बनाउने",
        description:
          "अनुसन्धान परियोजनालाई उद्देश्य, अध्याय, अनुसन्धान विधि तथा अपेक्षित नतिजाअनुसार व्यवस्थित गरिन्छ।",
      },
      {
        title: "विकास गर्ने",
        description:
          "थेसिस वा डिसर्टेसनका सम्बन्धित अध्याय तथा अनुसन्धान चरणमा संरचित सहयोग प्रदान गरिन्छ।",
      },
      {
        title: "अन्तिम तयारी",
        description:
          "सम्पूर्ण अनुसन्धान दस्तावेजको संरचना, एकरूपता, फर्म्याटिङ तथा शैक्षिक प्रस्तुतीकरण समीक्षा गरिन्छ।",
      },
    ],
  },

  literatureReview: {
    title: "साहित्य समीक्षा",
    shortDescription:
      "विद्यमान अनुसन्धानलाई आफ्नो अध्ययनसँग जोड्दै शैक्षिक साहित्यलाई संरचित समीक्षामा व्यवस्थित गर्नुहोस्।",
    description:
      "साहित्य समीक्षाले केवल शोधपत्रहरूको सारांश दिनु हुँदैन। यसले के थाहा भइसकेको छ, महत्वपूर्ण विषयहरू के हुन्, अनुसन्धानमा रहेका रिक्तता के हुन् र तपाईंको अनुसन्धान विद्यमान शैक्षिक काममा कहाँ पर्छ भन्ने देखाउनुपर्छ।",
    includes: [
      "साहित्य व्यवस्थापन",
      "विषयगत पक्ष पहिचान",
      "स्रोत संश्लेषण",
      "अनुसन्धान रिक्तता विकास",
      "आलोचनात्मक छलफल",
      "शैक्षिक संरचना",
    ],
    suitableFor: [
      "स्नातक अनुसन्धान परियोजना",
      "स्नातकोत्तर डिसर्टेसन",
      "साहित्य संरचना गर्न कठिनाइ भएका विद्यार्थी",
    ],
    process: [
      {
        title: "साहित्य व्यवस्थित गर्ने",
        description:
          "सम्बन्धित शैक्षिक स्रोतहरू अनुसन्धानका मुख्य विषय तथा अवधारणाअनुसार व्यवस्थित गरिन्छ।",
      },
      {
        title: "सम्बन्ध पहिचान गर्ने",
        description:
          "विद्यमान निष्कर्षहरू जोडेर समानता, भिन्नता तथा महत्वपूर्ण अनुसन्धान विषयहरू देखाइन्छ।",
      },
      {
        title: "अनुसन्धान रिक्तता विकास गर्ने",
        description:
          "साहित्यलाई तपाईंको अध्ययनसँग जोडेर अनुसन्धान रिक्तता तथा अध्ययनको औचित्य स्पष्ट बनाइन्छ।",
      },
    ],
  },

  methodology: {
    title: "अनुसन्धान विधि",
    shortDescription:
      "अनुसन्धान प्रश्न, अध्ययन डिजाइन, डाटा संकलन तथा विश्लेषणसँग मिल्ने अनुसन्धान विधि विकास गर्नुहोस्।",
    description:
      "राम्रोसँग संरचित अनुसन्धान विधिले अनुसन्धान कसरी सञ्चालन गरिनेछ र चयन गरिएका विधिहरू किन उपयुक्त छन् भन्ने स्पष्ट गर्छ। तपाईंको अनुसन्धानका आवश्यकताअनुसार विधि संरचना गर्न हामी सहयोग गर्छौं।",
    includes: [
      "अनुसन्धान डिजाइन",
      "अनुसन्धान दृष्टिकोण",
      "नमुना छनोट विधि",
      "डाटा संकलन विधि",
      "चर तथा मापन",
      "डाटा विश्लेषण विधि",
    ],
    suitableFor: [
      "अनुसन्धान अध्ययन डिजाइन गर्ने विद्यार्थी",
      "अनुसन्धान प्रस्ताव विकास गर्ने विद्यार्थी",
      "डिसर्टेसनको अनुसन्धान विधि अध्याय तयार गर्ने विद्यार्थी",
    ],
    process: [
      {
        title: "अनुसन्धान डिजाइन परिभाषित गर्ने",
        description:
          "उपयुक्त अनुसन्धान डिजाइन तय गर्दा अनुसन्धान प्रश्न तथा उद्देश्यलाई ध्यानमा राखिन्छ।",
      },
      {
        title: "डाटा संकलन योजना बनाउने",
        description:
          "सहभागी, डाटा स्रोत, उपकरण तथा संकलन प्रक्रियाअनुसार विधि संरचना गरिन्छ।",
      },
      {
        title: "विधिलाई विश्लेषणसँग जोड्ने",
        description:
          "चयन गरिएका विधिहरू संकलित डाटा कसरी विश्लेषण तथा व्याख्या गरिनेछ भन्ने कुरासँग मिलाइन्छ।",
      },
    ],
  },

  dataAnalysis: {
    title: "डाटा विश्लेषण",
    shortDescription:
      "अनुसन्धान डाटा स्पष्ट शैक्षिक ढाँचामा तयार, विश्लेषण, व्याख्या तथा प्रस्तुत गर्नुहोस्।",
    description:
      "अनुसन्धान डाटालाई सावधानीपूर्वक व्यवस्थापन गर्नुपर्छ ताकि नतिजा स्पष्ट र अर्थपूर्ण रूपमा प्रस्तुत गर्न सकियोस्। सहयोगमा डाटा तयारी, डाटा सफाइ, विश्लेषण, दृश्य प्रस्तुति तथा व्याख्या समावेश हुन सक्छ।",
    includes: [
      "डाटा तयारी",
      "डाटा सफाइ",
      "सांख्यिकीय विश्लेषण",
      "तालिका तथा दृश्य प्रस्तुति",
      "नतिजा व्याख्या",
      "शैक्षिक प्रस्तुति",
    ],
    suitableFor: [
      "परिमाणात्मक अनुसन्धान परियोजना",
      "सर्वेक्षणमा आधारित अध्ययन",
      "अनुसन्धान डाटासेटमा काम गर्ने विद्यार्थी",
    ],
    process: [
      {
        title: "डाटा तयार गर्ने",
        description:
          "अपेक्षित विश्लेषणका लागि उपयुक्त बनाउन डाटासेटको समीक्षा तथा तयारी गरिन्छ।",
      },
      {
        title: "विश्लेषण गर्ने",
        description:
          "अनुसन्धान प्रश्न तथा अध्ययन डिजाइनअनुसार उपयुक्त विश्लेषण विधि प्रयोग गरिन्छ।",
      },
      {
        title: "नतिजा प्रस्तुत गर्ने",
        description:
          "नतिजालाई स्पष्ट तालिका, दृश्य प्रस्तुति तथा शैक्षिक व्याख्यामा व्यवस्थित गरिन्छ।",
      },
    ],
  },

  academicWriting: {
    title: "शैक्षिक लेखन सहयोग",
    shortDescription:
      "तपाईंको अनुसन्धान दस्तावेजको स्पष्टता, एकरूपता, संरचना तथा शैक्षिक प्रस्तुति सुधार गर्नुहोस्।",
    description:
      "शैक्षिक लेखनमा स्पष्टता, एकरूपता, तार्किक संरचना तथा उचित प्रस्तुति आवश्यक हुन्छ। अनुसन्धानको अभिप्रेत अर्थ तथा दिशालाई कायम राख्दै शैक्षिक दस्तावेज सुधार गर्न हामी सहयोग गर्छौं।",
    includes: [
      "शैक्षिक सम्पादन",
      "प्रूफरीडिङ",
      "व्याकरण तथा स्पष्टता",
      "संरचना सुधार",
      "सन्दर्भ व्यवस्थापन सहयोग",
      "दस्तावेज फर्म्याटिङ",
    ],
    suitableFor: [
      "थेसिस तथा डिसर्टेसन लेख्ने विद्यार्थी",
      "अनुसन्धान लेखका लेखक",
      "अन्तिम पेशाको तयारी गर्ने विद्यार्थी",
    ],
    process: [
      {
        title: "दस्तावेज समीक्षा गर्ने",
        description:
          "संरचना, स्पष्टता, एकरूपता, भाषा तथा शैक्षिक प्रस्तुतीकरणका लागि दस्तावेज समीक्षा गरिन्छ।",
      },
      {
        title: "लेखन सुधार गर्ने",
        description:
          "अर्थ परिवर्तन नगरी पढ्न सजिलो तथा शैक्षिक स्पष्टतालाई असर गर्ने भागहरू परिष्कृत गरिन्छ।",
      },
      {
        title: "अन्तिम गुणस्तर समीक्षा",
        description:
          "एकरूपता, फर्म्याटिङ, सन्दर्भ तथा समग्र प्रस्तुतीकरण जाँच गरिन्छ।",
      },
    ],
  },

  researchGuidance: {
    title: "अनुसन्धान मार्गदर्शन",
    shortDescription:
      "अनुसन्धानको दिशा, विधि, विश्लेषण वा अर्को चरणबारे अन्योल हुँदा व्यावहारिक मार्गदर्शन प्राप्त गर्नुहोस्।",
    description:
      "अनुसन्धान सधैं एउटै दिशामा अघि बढ्दैन। तपाईंको अनुसन्धान विचार भए पनि अनुसन्धान विधि, साहित्य समीक्षा, विश्लेषण वा अर्को चरणबारे अन्योल हुन सक्छ। अनुसन्धान मार्गदर्शनले तपाईंलाई विकल्पहरू बुझ्न र थप स्पष्टताका साथ अघि बढ्न सहयोग गर्छ।",
    includes: [
      "अनुसन्धान दिशा",
      "विषय परिष्करण",
      "अनुसन्धान विधि मार्गदर्शन",
      "अनुसन्धान योजना",
      "विश्लेषण मार्गदर्शन",
      "अर्को चरणको योजना",
    ],
    suitableFor: [
      "कहाँबाट सुरु गर्ने भन्ने अन्योल भएका विद्यार्थी",
      "अनुसन्धानमा चुनौती सामना गरिरहेका अनुसन्धानकर्ता",
      "विशेष अनुसन्धान चरणमा मार्गदर्शन आवश्यक भएका विद्यार्थी",
    ],
    process: [
      {
        title: "बुझ्ने",
        description:
          "तपाईंको हालको अनुसन्धान चरण, चुनौती, शैक्षिक आवश्यकता तथा तत्कालको आवश्यकताबारे बुझिन्छ।",
      },
      {
        title: "पहिचान गर्ने",
        description:
          "मुख्य अनुसन्धान समस्यालाई ध्यान दिनुपर्ने स्पष्ट क्षेत्रहरूमा विभाजन गरिन्छ।",
      },
      {
        title: "मार्गदर्शन गर्ने",
        description:
          "तपाईंको अनुसन्धानका लागि उपयुक्त अर्को चरणबारे व्यावहारिक मार्गदर्शन प्रदान गरिन्छ।",
      },
    ],
  },

  projectAcademicSupport: {
    title: "परियोजना तथा शैक्षिक सहयोग",
    shortDescription:
      "विभिन्न विषय तथा शैक्षिक तहका अनुसन्धानसम्बन्धी शैक्षिक परियोजनामा संरचित सहयोग।",
    description:
      "शैक्षिक परियोजनामा अनुसन्धान, योजना, लेखन, विश्लेषण, प्रस्तुति तथा अन्तिम तयारी समावेश हुन सक्छ। प्रत्येक परियोजनाको आवश्यकता र शैक्षिक तहलाई ध्यानमा राख्दै अनुसन्धानसम्बन्धी शैक्षिक कार्यमा संरचित सहयोग प्रदान गर्छौं।",
    includes: [
      "शैक्षिक परियोजना योजना",
      "अनुसन्धान सहयोग",
      "परियोजना संरचना",
      "शैक्षिक लेखन",
      "डाटा तथा विश्लेषण सहयोग",
      "अन्तिम समीक्षा",
    ],
    suitableFor: [
      "स्नातक शैक्षिक परियोजना",
      "स्नातकोत्तर शैक्षिक कार्य",
      "अनुसन्धानसम्बन्धी शैक्षिक परियोजना तथा असाइनमेन्ट",
    ],
    process: [
      {
        title: "बुझ्ने",
        description:
          "परियोजनाको आवश्यकता, शैक्षिक तह, विषय, दायरा तथा अपेक्षित परिणामको समीक्षा गरिन्छ।",
      },
      {
        title: "संरचना गर्ने",
        description:
          "परियोजनालाई स्पष्ट अनुसन्धान, लेखन, विश्लेषण तथा प्रस्तुतीकरण आवश्यकतामा व्यवस्थित गरिन्छ।",
      },
      {
        title: "विकास गर्ने",
        description:
          "परियोजनाको विशेष शैक्षिक तथा अनुसन्धान आवश्यकताअनुसार सहयोग प्रदान गरिन्छ।",
      },
    ],
  },
};

function getNepaliContent(slug: string) {
  const map: Record<
    string,
    (typeof nepaliContent)[keyof typeof nepaliContent]
  > = {
    "research-proposal": nepaliContent.researchProposal,
    "thesis-dissertation": nepaliContent.thesisDissertation,
    "literature-review": nepaliContent.literatureReview,
    methodology: nepaliContent.methodology,
    "data-analysis": nepaliContent.dataAnalysis,
    "academic-writing": nepaliContent.academicWriting,
    "research-guidance": nepaliContent.researchGuidance,
    "project-academic-support": nepaliContent.projectAcademicSupport,
  };

  return map[slug];
}

export default function ServiceDetailClient({
  service,
  locale,
}: ServiceDetailClientProps) {
  const localizedContent =
    locale === "ne" ? getNepaliContent(service.slug) : null;

  const title = localizedContent?.title ?? service.title;
  const shortDescription =
    localizedContent?.shortDescription ?? service.shortDescription;
  const description =
    localizedContent?.description ?? service.description;
  const includes = localizedContent?.includes ?? service.includes;
  const suitableFor =
    localizedContent?.suitableFor ?? service.suitableFor;
  const process = localizedContent?.process ?? service.process;

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  const servicesHref = `/${locale}/services`;
  const contactHref = `/${locale}/contact`;

  return (
    <main className="overflow-hidden">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative isolate min-h-[560px] overflow-hidden">
        <Image
          src={service.image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/45 dark:bg-black/55" />

<div
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-[#5A189A]/55
    via-[#7B2CBF]/30
    to-transparent
  "
/>

        {/* Soft purple glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            -right-40
            top-20
            h-96
            w-96
            rounded-full
            bg-[#D100D1]/20
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="
                mb-6
                flex
                flex-wrap
                items-center
                gap-2
                text-sm
              "
            >
              <Link
                href={`/${locale}`}
                className="
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                {locale === "en" ? "Home" : "गृहपृष्ठ"}
              </Link>

              <ChevronRight className="h-4 w-4 text-white/35" />

              <Link
                href={servicesHref}
                className="
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                {locale === "en" ? "Services" : "सेवाहरू"}
              </Link>

              <ChevronRight className="h-4 w-4 text-white/35" />

              <span className="text-white/90">{title}</span>
            </nav>

            {/* Service label */}
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/25
                  bg-white/10
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  backdrop-blur-md
                "
              >
                {service.number}
              </span>

              <div className="h-px w-12 bg-[#D100D1]" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white
                "
              >
                {locale === "en"
                  ? "Research Support"
                  : "अनुसन्धान सहयोग"}
              </p>
            </div>

            {/* Title */}
            <h1
              className="
                mt-6
                max-w-4xl
                font-[var(--font-jakarta)]
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-white/80
                sm:text-xl
              "
            >
              {shortDescription}
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href={contactHref}
                className="
                  group
                  inline-flex
                  items-center
                  rounded-full
                  bg-gradient-to-r
                  from-[#7B2CBF]
                  via-[#B100E8]
                  to-[#D100D1]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_35px_rgba(177,0,232,0.32)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_14px_40px_rgba(209,0,209,0.38)]
                "
              >
                {locale === "en"
                  ? "Discuss Your Requirement"
                  : "आफ्नो आवश्यकता बारे छलफल गर्नुहोस्"}

                <ArrowRight
                  className="
                    ml-2
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href={servicesHref}
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/50
                  hover:bg-white/15
                "
              >
                {locale === "en" ? "All Services" : "सबै सेवाहरू"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE OVERVIEW
          ===================================================== */}

      <section className="bg-background py-12 transition-colors duration-300 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          {/* Overview text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-accent
                "
              >
                {locale === "en"
                  ? "Service Overview"
                  : "सेवा अवलोकन"}
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-2xl
                font-[var(--font-jakarta)]
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-foreground
                sm:text-4xl
              "
            >
              {locale === "en"
                ? "Structured support for your research."
                : "तपाईंको अनुसन्धानका लागि संरचित सहयोग।"}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {description}
            </p>
          </div>

          {/* Includes */}
          <div
            className="
              rounded-[1.75rem]
              border
              border-accent/15
              bg-surface
              p-6
              shadow-[var(--shadow-sm)]
              sm:p-7
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-accent
              "
            >
              {locale === "en"
                ? "This Service Includes"
                : "यस सेवामा समावेश छन्"}
            </p>

            <div className="mt-5 space-y-3">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-accent-soft
                      text-accent
                    "
                  >
                    <Check className="h-4 w-4" />
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS IS FOR
          ===================================================== */}

      <section className="border-y border-slate-200/80 py-10 dark:border-white/10">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
          Who This Is For
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Research support for every stage
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
        Whether you are starting a project or refining advanced research,
        our support adapts to your academic needs.
      </p>
    </div>

    <div className="mt-7 grid overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03] md:grid-cols-3">
      {[
        {
          number: "01",
          title: "Students",
          description: "Academic projects & dissertations",
        },
        {
          number: "02",
          title: "Researchers",
          description: "Research design & methodology",
        },
        {
          number: "03",
          title: "Academics & Professionals",
          description: "Advanced academic support",
        },
      ].map((item, index) => (
        <div
          key={item.number}
          className={`group flex items-center justify-between gap-4 p-5 transition-colors duration-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 ${
            index !== 0
              ? "border-t border-slate-200 md:border-l md:border-t-0 dark:border-white/10"
              : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
              {item.number}
            </span>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          </div>

          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* =====================================================
          HOW WE SUPPORT YOU
          ===================================================== */}

      <section className="bg-background py-12 transition-colors duration-300 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-accent
                "
              >
                {locale === "en"
                  ? "How We Support You"
                  : "हामी कसरी सहयोग गर्छौं"}
              </p>
            </div>

            <h2
              className="
                mt-4
                font-[var(--font-jakarta)]
                text-3xl
                font-extrabold
                tracking-tight
                text-foreground
                sm:text-4xl
              "
            >
              {locale === "en"
                ? "A clear process from planning to completion."
                : "योजनादेखि पूरा गर्नेसम्मको स्पष्ट प्रक्रिया।"}
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-border
                  bg-surface
                  p-7
                  shadow-[var(--shadow-sm)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/30
                  hover:shadow-[var(--shadow-md)]
                "
              >
                <span
                  className="
                    font-[var(--font-jakarta)]
                    text-5xl
                    font-extrabold
                    leading-none
                    text-accent/15
                    transition-colors
                    duration-300
                    group-hover:text-accent/25
                  "
                >
                  0{index + 1}
                </span>

                <div
                  className="
                    mt-6
                    h-px
                    w-12
                    bg-gradient-to-r
                    from-[#7B2CBF]
                    to-[#B100E8]
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />

                <h3
                  className="
                    mt-5
                    font-[var(--font-jakarta)]
                    text-xl
                    font-bold
                    text-foreground
                  "
                >
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES
          ===================================================== */}

      <section className="border-y border-border bg-surface-soft py-12 transition-colors duration-300 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-accent
                  "
                >
                  {locale === "en"
                    ? "Explore More"
                    : "थप हेर्नुहोस्"}
                </p>
              </div>

              <h2
                className="
                  mt-4
                  font-[var(--font-jakarta)]
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-foreground
                  sm:text-4xl
                "
              >
                {locale === "en"
                  ? "Related research support."
                  : "सम्बन्धित अनुसन्धान सहयोग।"}
              </h2>
            </div>

            <Link
              href={servicesHref}
              className="
                group
                inline-flex
                items-center
                text-sm
                font-bold
                text-foreground
                transition-colors
                hover:text-accent
              "
            >
              {locale === "en"
                ? "View all services"
                : "सबै सेवाहरू हेर्नुहोस्"}

              <ArrowRight
                className="
                  ml-2
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/services/${item.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-border
                  bg-background
                  shadow-[var(--shadow-sm)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/30
                  hover:shadow-[var(--shadow-md)]
                "
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/65
                      via-black/10
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/30
                      bg-black/20
                      text-xs
                      font-bold
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    {item.number}
                  </span>

                  <span
                    className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      text-white
                      opacity-0
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>
                </div>

                <div className="p-5">
                  <h3
                    className="
                      font-[var(--font-jakarta)]
                      text-lg
                      font-bold
                      text-foreground
                      transition-colors
                      duration-300
                      group-hover:text-accent
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                    {item.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}