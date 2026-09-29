import Link from "next/link";
import { notFound } from "next/navigation";
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
      },
      {
        number: "02",
        title: "Finance & Accounting",
        description:
          "Support for financial analysis, accounting research, investment studies, banking, and related academic work.",
      },
      {
        number: "03",
        title: "Information Technology",
        description:
          "Research guidance for software, information systems, computing, databases, AI, and technology-related studies.",
      },
      {
        number: "04",
        title: "Computer Science",
        description:
          "Support for programming, algorithms, data science, machine learning, cybersecurity, and computer science research.",
      },
      {
        number: "05",
        title: "Social Sciences",
        description:
          "Research support for sociology, psychology, development studies, economics, and related social science disciplines.",
      },
      {
        number: "06",
        title: "Education",
        description:
          "Guidance for educational research, teaching and learning studies, curriculum research, and academic projects.",
      },
      {
        number: "07",
        title: "Health & Public Health",
        description:
          "Research-focused support for health studies, public health research, healthcare management, and related academic topics.",
      },
      {
        number: "08",
        title: "Engineering & Technology",
        description:
          "Academic research support for engineering, technology, systems, infrastructure, and related technical disciplines.",
      },
      {
        number: "09",
        title: "Hospitality & Tourism",
        description:
          "Support for tourism management, hospitality, travel studies, destination research, and related academic projects.",
      },
      {
        number: "10",
        title: "Other Academic Areas",
        description:
          "If your subject area is not listed, contact us to discuss your specific research requirements.",
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
      },
      {
        number: "०२",
        title: "वित्त तथा लेखा",
        description:
          "वित्तीय विश्लेषण, लेखा अनुसन्धान, लगानी अध्ययन, बैंकिङ तथा सम्बन्धित शैक्षिक कार्यमा सहयोग।",
      },
      {
        number: "०३",
        title: "सूचना प्रविधि",
        description:
          "सफ्टवेयर, सूचना प्रणाली, कम्प्युटिङ, डाटाबेस, एआई तथा प्रविधिसम्बन्धी अनुसन्धानमा मार्गदर्शन।",
      },
      {
        number: "०४",
        title: "कम्प्युटर विज्ञान",
        description:
          "प्रोग्रामिङ, एल्गोरिदम, डेटा साइन्स, मेसिन लर्निङ, साइबर सुरक्षा तथा कम्प्युटर विज्ञान अनुसन्धानमा सहयोग।",
      },
      {
        number: "०५",
        title: "सामाजिक विज्ञान",
        description:
          "समाजशास्त्र, मनोविज्ञान, विकास अध्ययन, अर्थशास्त्र तथा सम्बन्धित सामाजिक विज्ञान विषयमा अनुसन्धान सहयोग।",
      },
      {
        number: "०६",
        title: "शिक्षा",
        description:
          "शैक्षिक अनुसन्धान, शिक्षण तथा सिकाइ अध्ययन, पाठ्यक्रम अनुसन्धान तथा शैक्षिक परियोजनामा मार्गदर्शन।",
      },
      {
        number: "०७",
        title: "स्वास्थ्य तथा सार्वजनिक स्वास्थ्य",
        description:
          "स्वास्थ्य अध्ययन, सार्वजनिक स्वास्थ्य अनुसन्धान, स्वास्थ्य सेवा व्यवस्थापन तथा सम्बन्धित शैक्षिक विषयमा सहयोग।",
      },
      {
        number: "०८",
        title: "इन्जिनियरिङ तथा प्रविधि",
        description:
          "इन्जिनियरिङ, प्रविधि, प्रणाली, पूर्वाधार तथा सम्बन्धित प्राविधिक विषयमा शैक्षिक अनुसन्धान सहयोग।",
      },
      {
        number: "०९",
        title: "हस्पिटालिटी तथा पर्यटन",
        description:
          "पर्यटन व्यवस्थापन, हस्पिटालिटी, यात्रा अध्ययन, गन्तव्य अनुसन्धान तथा सम्बन्धित शैक्षिक परियोजनामा सहयोग।",
      },
      {
        number: "१०",
        title: "अन्य शैक्षिक क्षेत्रहरू",
        description:
          "तपाईंको विषय यहाँ सूचीबद्ध नभए पनि आफ्नो अनुसन्धान आवश्यकताबारे हामीसँग सम्पर्क गर्न सक्नुहुन्छ।",
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
      {/* Hero */}
      <section className="bg-background text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="bg-surface text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.subjects.map((subject, index) => (
              <article
                key={subject.number}
                className={`
                  group relative overflow-hidden
                  rounded-3xl p-8
                  transition duration-300
                  hover:-translate-y-1
                  sm:p-9
                  ${
                    index === 0
                      ? `
                        bg-primary
                        text-white
                        shadow-[var(--shadow-lg)]
                      `
                      : `
                        theme-card
                      `
                  }
                `}
              >
                <span
                  aria-hidden="true"
                  className={`
                    absolute -right-3 -top-7
                    text-[8rem]
                    font-bold
                    leading-none
                    ${
                      index === 0
                        ? "text-white/[0.04]"
                        : "text-foreground/[0.035]"
                    }
                  `}
                >
                  {subject.number}
                </span>

                <div className="relative">
                  <span className="text-sm font-bold text-accent">
                    {subject.number}
                  </span>

                  <h2 className="mt-10 text-2xl font-bold leading-tight">
                    {subject.title}
                  </h2>

                  <p
                    className={`
                      mt-4 leading-7
                      ${
                        index === 0
                          ? "text-white/60"
                          : "text-muted"
                      }
                    `}
                  >
                    {subject.description}
                  </p>

                  <div className="mt-7 h-px w-9 bg-accent transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-background px-6 py-24 text-foreground transition-colors duration-300 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-4xl bg-primary px-7 py-16 text-center text-white sm:px-12 sm:py-20 lg:px-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">
                {t.noteEyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {t.noteTitle}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
                {t.noteDescription}
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
                {t.contactButton}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}