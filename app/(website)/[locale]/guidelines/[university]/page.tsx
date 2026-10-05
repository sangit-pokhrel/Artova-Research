import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getUniversityGuideline,
  universities,
} from "@/lib/guidelines";
import type { Locale } from "@/lib/i18n/config";
import { isValidLocale } from "@/lib/i18n/config";

import UniversityGuidelineClient from "./UniversityGuidelineClient";

export function generateStaticParams() {
  return ["en", "ne"].flatMap((locale) =>
    universities.map((university) => ({
      locale,
      university: university.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; university: string }>;
}): Promise<Metadata> {
  const { university: slug } = await params;
  const university = getUniversityGuideline(slug);

  if (!university) {
    return {
      title: "Guideline Not Found | Artova Research",
    };
  }

  return {
    title: `${university.name} Guidelines | Artova Research`,
    description: university.description,
  };
}

export default async function UniversityGuidelinePage({
  params,
}: {
  params: Promise<{ locale: string; university: string }>;
}) {
  const { locale, university: slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const university = getUniversityGuideline(slug);

  if (!university) {
    notFound();
  }

  return (
    <UniversityGuidelineClient
      university={university}
      locale={locale as Locale}
    />
  );
}
