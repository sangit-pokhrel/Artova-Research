import Link from "next/link";
import { translations } from "@/lib/i18n/translations";

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: "en" | "ne" }>;
}>) {
  const { locale } = await params;

  const t = translations[locale];

  return (
    <section className="min-h-[70vh] bg-white dark:bg-[#071426]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A900]">
          {t.home.eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-[#0B1F3A] dark:text-white md:text-7xl">
          {t.home.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70 dark:text-white/70">
          {t.home.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`/${locale}/services`}
            className="rounded-full bg-[#0B1F3A] px-6 py-3 font-medium text-white transition hover:bg-[#102d54] dark:bg-[#D9A900] dark:text-[#071426] dark:hover:bg-[#f0c21a]"
          >
            {t.home.servicesButton}
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="rounded-full border border-[#0B1F3A] px-6 py-3 font-medium text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#071426]"
          >
            {t.home.contactButton}
          </Link>
        </div>
      </div>
    </section>
  );
}