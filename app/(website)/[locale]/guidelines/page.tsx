import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { isValidLocale } from "@/lib/i18n/config";
import GuidelinesClient from "./GuidelinesClient";

export const metadata: Metadata = {
  title: "Research Guidelines | Artova Research",
  description:
    "Explore university-specific research, thesis, methodology, formatting, ethics, and academic guidelines.",
};

export default async function GuidelinesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return null;
  }

  return <GuidelinesClient locale={locale as Locale} />;
}
