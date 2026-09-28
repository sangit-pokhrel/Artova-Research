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

    noteTitle: "Don't see your subject?",
    noteDescription:
      "Our support is not limited to the areas listed above. Share your research topic with us and we can discuss your requirements.",
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.subjects.map((subject) => (
              <article
                key={subject.number}
                className="group rounded-2xl border border-[#0B1F3A]/10 bg-white p-8 transition hover:-translate-y-1 hover:border-[#D9A900]/50 dark:border-white/10 dark:bg-[#071426]"
              >
                <span className="text-sm font-bold text-[#D9A900]">
                  {subject.number}
                </span>

                <h2 className="mt-5 text-2xl font-semibold text-[#0B1F3A] dark:text-white">
                  {subject.title}
                </h2>

                <p className="mt-4 leading-7 text-[#0B1F3A]/60 dark:text-white/60">
                  {subject.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#071426]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <h2 className="text-4xl font-bold tracking-tight text-[#0B1F3A] dark:text-white sm:text-5xl">
            {t.noteTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#0B1F3A]/60 dark:text-white/60">
            {t.noteDescription}
          </p>

          <a
            href={`/${locale}/contact`}
            className="mt-9 inline-flex rounded-full bg-[#0B1F3A] px-7 py-3.5 font-semibold text-white transition hover:bg-[#102d54] dark:bg-[#D9A900] dark:text-[#071426] dark:hover:bg-[#f0c21a]"
          >
            {t.contactButton}
          </a>
        </div>
      </section>
    </>
  );
}