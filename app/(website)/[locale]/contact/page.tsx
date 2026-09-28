import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    eyebrow: "CONTACT US",
    title: "Let's talk about your research.",
    intro:
      "Tell us about your research topic, academic requirements, or the area where you need support. We'll use the information you provide to understand your requirements.",

    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Research Subject",
      message: "Tell us about your research",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "Enter your phone number",
      subjectPlaceholder: "e.g. Business, IT, Finance",
      messagePlaceholder:
        "Briefly describe your research topic and the support you need...",
      submit: "Send Inquiry",
    },

    infoTitle: "What to include",
    info: [
      "Your academic level or programme",
      "Your research topic or area",
      "The type of support you need",
      "Any important academic requirements or deadlines",
    ],

    note:
      "Please provide accurate information so we can better understand your requirements.",
  },

  ne: {
    eyebrow: "सम्पर्क गर्नुहोस्",
    title: "तपाईंको अनुसन्धानबारे छलफल गरौँ।",
    intro:
      "आफ्नो अनुसन्धान विषय, शैक्षिक आवश्यकता वा आफूलाई आवश्यक सहयोगबारे जानकारी दिनुहोस्। तपाईंले दिएको जानकारीका आधारमा हामी तपाईंको आवश्यकतालाई बुझ्ने प्रयास गर्नेछौँ।",

    form: {
      name: "पूरा नाम",
      email: "इमेल ठेगाना",
      phone: "फोन नम्बर",
      subject: "अनुसन्धान विषय",
      message: "तपाईंको अनुसन्धानबारे जानकारी",
      namePlaceholder: "आफ्नो नाम लेख्नुहोस्",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "फोन नम्बर लेख्नुहोस्",
      subjectPlaceholder: "जस्तै: Business, IT, Finance",
      messagePlaceholder:
        "आफ्नो अनुसन्धान विषय र आवश्यक सहयोगबारे छोटकरीमा लेख्नुहोस्...",
      submit: "अनुसन्धान पठाउनुहोस्",
    },

    infoTitle: "के जानकारी समावेश गर्ने?",
    info: [
      "तपाईंको शैक्षिक स्तर वा कार्यक्रम",
      "तपाईंको अनुसन्धान विषय वा क्षेत्र",
      "तपाईंलाई आवश्यक सहयोगको प्रकार",
      "महत्वपूर्ण शैक्षिक आवश्यकता वा समयसीमा",
    ],

    note:
      "तपाईंको आवश्यकतालाई राम्रोसँग बुझ्न सकियोस् भनेर सही जानकारी प्रदान गर्नुहोस्।",
  },
} satisfies Record<Locale, object>;

export default async function ContactPage({
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
    <section className="bg-white dark:bg-[#071426]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Introduction */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D9A900]">
              {t.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-[#0B1F3A] dark:text-white sm:text-6xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#0B1F3A]/65 dark:text-white/65">
              {t.intro}
            </p>

            <div className="mt-12 rounded-2xl bg-[#F7F8FA] p-7 dark:bg-[#0B1F3A]">
              <h2 className="text-xl font-semibold text-[#0B1F3A] dark:text-white">
                {t.infoTitle}
              </h2>

              <ul className="mt-5 space-y-3">
                {t.info.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-[#0B1F3A]/65 dark:text-white/65"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D9A900]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm leading-6 text-[#0B1F3A]/50 dark:text-white/50">
              {t.note}
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-[#0B1F3A]/10 bg-[#F7F8FA] p-7 dark:border-white/10 dark:bg-[#0B1F3A] sm:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#0B1F3A] dark:text-white"
                  >
                    {t.form.name}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t.form.namePlaceholder}
                    className="mt-2 w-full rounded-xl border border-[#0B1F3A]/15 bg-white px-4 py-3.5 outline-none transition placeholder:text-[#0B1F3A]/35 focus:border-[#D9A900] dark:border-white/15 dark:bg-[#071426] dark:text-white dark:placeholder:text-white/35"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#0B1F3A] dark:text-white"
                  >
                    {t.form.email}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.form.emailPlaceholder}
                    className="mt-2 w-full rounded-xl border border-[#0B1F3A]/15 bg-white px-4 py-3.5 outline-none transition placeholder:text-[#0B1F3A]/35 focus:border-[#D9A900] dark:border-white/15 dark:bg-[#071426] dark:text-white dark:placeholder:text-white/35"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-[#0B1F3A] dark:text-white"
                  >
                    {t.form.phone}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t.form.phonePlaceholder}
                    className="mt-2 w-full rounded-xl border border-[#0B1F3A]/15 bg-white px-4 py-3.5 outline-none transition placeholder:text-[#0B1F3A]/35 focus:border-[#D9A900] dark:border-white/15 dark:bg-[#071426] dark:text-white dark:placeholder:text-white/35"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-[#0B1F3A] dark:text-white"
                  >
                    {t.form.subject}
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={t.form.subjectPlaceholder}
                    className="mt-2 w-full rounded-xl border border-[#0B1F3A]/15 bg-white px-4 py-3.5 outline-none transition placeholder:text-[#0B1F3A]/35 focus:border-[#D9A900] dark:border-white/15 dark:bg-[#071426] dark:text-white dark:placeholder:text-white/35"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#0B1F3A] dark:text-white"
                >
                  {t.form.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder={t.form.messagePlaceholder}
                  className="mt-2 w-full resize-none rounded-xl border border-[#0B1F3A]/15 bg-white px-4 py-3.5 outline-none transition placeholder:text-[#0B1F3A]/35 focus:border-[#D9A900] dark:border-white/15 dark:bg-[#071426] dark:text-white dark:placeholder:text-white/35"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#0B1F3A] px-6 py-4 font-semibold text-white transition hover:bg-[#102d54] dark:bg-[#D9A900] dark:text-[#071426] dark:hover:bg-[#f0c21a]"
              >
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}