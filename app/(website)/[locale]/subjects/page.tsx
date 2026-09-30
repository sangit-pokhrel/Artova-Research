import Image from "next/image";
import { notFound } from "next/navigation";

import Button from "@/components/ui/Button";
import ResearchIcon from "@/components/ui/ResearchIcon";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";
import { images } from "@/lib/images";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "SUBJECT AREAS",
    title: "Research support across a wide range of academic disciplines.",
    intro:
      "Explore the subject areas where we provide academic and research-focused support for projects, proposals, theses, dissertations, and related work.",

    subjects: [
      {
        number: "01",
        title: "Business & Management",
        description:
          "Research support for business studies, management, entrepreneurship, marketing, and organizational topics.",
        icon: "business" as const,
        image: images.subjects.businessManagement,
      },
      {
        number: "02",
        title: "Finance & Accounting",
        description:
          "Support for financial analysis, accounting research, investment studies, banking, and related academic work.",
        icon: "finance" as const,
        image: images.subjects.financeAccounting,
      },
      {
        number: "03",
        title: "Information Technology",
        description:
          "Research guidance for software, information systems, computing, databases, AI, and technology-related studies.",
        icon: "technology" as const,
        image: images.subjects.informationTechnology,
      },
      {
        number: "04",
        title: "Computer Science",
        description:
          "Support for programming, algorithms, data science, machine learning, cybersecurity, and computer science research.",
        icon: "computer" as const,
        image: images.subjects.computerScience,
      },
      {
        number: "05",
        title: "Social Sciences",
        description:
          "Research support for sociology, psychology, development studies, economics, and related social science disciplines.",
        icon: "social" as const,
        image: images.subjects.socialSciences,
      },
      {
        number: "06",
        title: "Education",
        description:
          "Guidance for educational research, teaching and learning studies, curriculum research, and academic projects.",
        icon: "education" as const,
        image: images.subjects.education,
      },
      {
        number: "07",
        title: "Health & Public Health",
        description:
          "Research-focused support for health studies, public health research, healthcare management, and related academic topics.",
        icon: "health" as const,
        image: images.subjects.healthPublicHealth,
      },
      {
        number: "08",
        title: "Engineering & Technology",
        description:
          "Academic research support for engineering, technology, systems, infrastructure, and related technical disciplines.",
        icon: "engineering" as const,
        image: images.subjects.engineeringTechnology,
      },
      {
        number: "09",
        title: "Hospitality & Tourism",
        description:
          "Support for tourism management, hospitality, travel studies, destination research, and related academic projects.",
        icon: "tourism" as const,
        image: images.subjects.hospitalityTourism,
      },
      {
        number: "10",
        title: "Other Academic Areas",
        description:
          "If your subject area is not listed, contact us to discuss your specific research requirements.",
        icon: "research" as const,
        image: images.subjects.otherAcademicAreas,
      },
    ],

    noteEyebrow: "CAN'T FIND YOUR AREA?",
    noteTitle: "Don't see your subject?",
    noteDescription:
      "Our support is not limited to the areas listed above. Share your research topic with us and we can discuss your specific requirements.",
    contactButton: "Discuss Your Research",
  },

  ne: {
    eyebrow: "विषय क्षेत्रहरू",
    title: "विभिन्न शैक्षिक विषयहरूमा अनुसन्धान सहयोग।",
    intro:
      "परियोजना, प्रस्ताव, थेसिस, डिसर्टेसन तथा सम्बन्धित शैक्षिक कार्यका लागि हामीले प्रदान गर्ने शैक्षिक तथा अनुसन्धान सहयोगका विषय क्षेत्रहरू हेर्नुहोस्।",

    subjects: [
      {
        number: "०१",
        title: "व्यवसाय तथा व्यवस्थापन",
        description:
          "व्यवसाय अध्ययन, व्यवस्थापन, उद्यमशीलता, मार्केटिङ तथा संगठनसम्बन्धी अनुसन्धानमा सहयोग।",
        icon: "business" as const,
        image: images.subjects.businessManagement,
      },
      {
        number: "०२",
        title: "वित्त तथा लेखा",
        description:
          "वित्तीय विश्लेषण, लेखा अनुसन्धान, लगानी अध्ययन, बैंकिङ तथा सम्बन्धित शैक्षिक कार्यमा सहयोग।",
        icon: "finance" as const,
        image: images.subjects.financeAccounting,
      },
      {
        number: "०३",
        title: "सूचना प्रविधि",
        description:
          "सफ्टवेयर, सूचना प्रणाली, कम्प्युटिङ, डाटाबेस, एआई तथा प्रविधिसम्बन्धी अनुसन्धानमा मार्गदर्शन।",
        icon: "technology" as const,
        image: images.subjects.informationTechnology,
      },
      {
        number: "०४",
        title: "कम्प्युटर विज्ञान",
        description:
          "प्रोग्रामिङ, एल्गोरिदम, डेटा साइन्स, मेसिन लर्निङ, साइबर सुरक्षा तथा कम्प्युटर विज्ञान अनुसन्धानमा सहयोग।",
        icon: "computer" as const,
        image: images.subjects.computerScience,
      },
      {
        number: "०५",
        title: "सामाजिक विज्ञान",
        description:
          "समाजशास्त्र, मनोविज्ञान, विकास अध्ययन, अर्थशास्त्र तथा सम्बन्धित सामाजिक विज्ञान विषयमा अनुसन्धान सहयोग।",
        icon: "social" as const,
        image: images.subjects.socialSciences,
      },
      {
        number: "०६",
        title: "शिक्षा",
        description:
          "शैक्षिक अनुसन्धान, शिक्षण तथा सिकाइ अध्ययन, पाठ्यक्रम अनुसन्धान तथा शैक्षिक परियोजनामा मार्गदर्शन।",
        icon: "education" as const,
        image: images.subjects.education,
      },
      {
        number: "०७",
        title: "स्वास्थ्य तथा सार्वजनिक स्वास्थ्य",
        description:
          "स्वास्थ्य अध्ययन, सार्वजनिक स्वास्थ्य अनुसन्धान, स्वास्थ्य सेवा व्यवस्थापन तथा सम्बन्धित शैक्षिक विषयमा सहयोग।",
        icon: "health" as const,
        image: images.subjects.healthPublicHealth,
      },
      {
        number: "०८",
        title: "इन्जिनियरिङ तथा प्रविधि",
        description:
          "इन्जिनियरिङ, प्रविधि, प्रणाली, पूर्वाधार तथा सम्बन्धित प्राविधिक विषयमा शैक्षिक अनुसन्धान सहयोग।",
        icon: "engineering" as const,
        image: images.subjects.engineeringTechnology,
      },
      {
        number: "०९",
        title: "हस्पिटालिटी तथा पर्यटन",
        description:
          "पर्यटन व्यवस्थापन, हस्पिटालिटी, यात्रा अध्ययन, गन्तव्य अनुसन्धान तथा सम्बन्धित शैक्षिक परियोजनामा सहयोग।",
        icon: "tourism" as const,
        image: images.subjects.hospitalityTourism,
      },
      {
        number: "१०",
        title: "अन्य शैक्षिक क्षेत्रहरू",
        description:
          "तपाईंको विषय यहाँ सूचीबद्ध नभए पनि आफ्नो अनुसन्धान आवश्यकताबारे हामीसँग सम्पर्क गर्न सक्नुहुन्छ।",
        icon: "research" as const,
        image: images.subjects.otherAcademicAreas,
      },
    ],

    noteEyebrow: "तपाईंको विषय भेटिएन?",
    noteTitle: "तपाईंको विषय सूचीमा छैन?",
    noteDescription:
      "हाम्रो सहयोग माथि उल्लेख गरिएका विषयहरूमा मात्र सीमित छैन। आफ्नो अनुसन्धान विषय साझा गर्नुहोस् र तपाईंको आवश्यकताबारे छलफल गरौँ।",
    contactButton: "अनुसन्धानबारे छलफल गर्नुहोस्",
  },
} satisfies Record<Locale, object>;

export default async function SubjectsPage({
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
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-background text-foreground transition-colors duration-300">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-purple-bright/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-interactive/8 blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.eyebrow}
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUBJECT AREAS
      ========================================================= */}
      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.subjects.map((subject) => (
              <article
                key={subject.number}
                className="
                  group relative overflow-hidden
                  rounded-3xl border border-border
                  bg-surface-elevated
                  shadow-[var(--shadow-sm)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-bright/40
                  hover:shadow-[var(--shadow-lg)]
                "
              >
                {/* Subject Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={subject.image}
                    alt={subject.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#17033F]/80
                      via-[#17033F]/15
                      to-transparent
                    "
                  />

                  <div className="absolute left-5 top-5">
                    <span
                      className="
                        inline-flex items-center
                        rounded-full
                        border border-white/20
                        bg-black/20
                        px-3 py-1.5
                        text-xs font-bold
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {subject.number}
                    </span>
                  </div>
                </div>

                {/* Subject Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <ResearchIconContainer variant="card">
                      <ResearchIcon name={subject.icon} />
                    </ResearchIconContainer>

                    <span
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-border
                        text-sm text-muted
                        transition-all duration-300
                        group-hover:border-purple-bright
                        group-hover:text-purple-bright
                      "
                    >
                      ↗
                    </span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold leading-tight text-foreground sm:text-2xl">
                    {subject.title}
                  </h2>

                  <p className="mt-3 leading-7 text-muted">
                    {subject.description}
                  </p>

                  <div
                    className="
                      mt-6 h-px w-9
                      bg-accent
                      transition-all duration-300
                      group-hover:w-16
                    "
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-background px-6 pb-14 text-foreground transition-colors duration-300 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid overflow-hidden
              rounded-[2rem]
              border border-border
              bg-surface-elevated
              shadow-[var(--shadow-lg)]
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* CTA Image */}
            <div className="relative min-h-[320px] lg:min-h-[400px]">
              <Image
src={images.services.extra}
                alt="Research guidance and academic support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#17033F]/80
                  via-[#17033F]/20
                  to-transparent
                "
              />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-black/20
                    px-4 py-2
                    text-xs font-semibold
                    text-white
                    backdrop-blur-md
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-[#D100D1]" />

                  {locale === "en"
                    ? "Research across disciplines"
                    : "विभिन्न विषयमा अनुसन्धान सहयोग"}
                </div>
              </div>
            </div>

            {/* CTA Content */}
            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    {t.noteEyebrow}
                  </p>
                </div>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {t.noteTitle}
                </h2>

                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                  {t.noteDescription}
                </p>

                <div className="mt-8">
                  <Button href={`/${locale}/contact`}>
                    {t.contactButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}