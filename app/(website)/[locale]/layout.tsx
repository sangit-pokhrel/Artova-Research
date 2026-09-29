import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { locales, isValidLocale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        {children}
      </main>

      <Footer locale={locale} />
    </>
  );
}