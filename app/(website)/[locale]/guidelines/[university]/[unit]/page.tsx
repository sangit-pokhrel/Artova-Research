import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getUniversityGuideline,
  universities,
} from "@/lib/guidelines";
import {
  getAcademicUnit,
  getAcademicUnits,
} from "@/lib/academicUnits";
import type { Locale } from "@/lib/i18n/config";
import { isValidLocale } from "@/lib/i18n/config";

import AcademicUnitGuidelineClient from "./AcademicUnitGuidelineClient";

export function generateStaticParams() {
  return ["en", "ne"].flatMap((locale) =>
    universities.flatMap((university) =>
      getAcademicUnits(university.slug).map((unit) => ({
        locale,
        university: university.slug,
        unit: unit.slug,
      })),
    ),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
    university: string;
    unit: string;
  }>;
}): Promise<Metadata> {
  const {
    university: universitySlug,
    unit: unitSlug,
  } = await params;

  const university = getUniversityGuideline(universitySlug);
  const unit = getAcademicUnit(universitySlug, unitSlug);

  if (!university || !unit) {
    return {
      title: "Guideline Not Found | Artova Research",
    };
  }

  return {
    title: `${unit.name} Guidelines | ${university.name} | Artova Research`,
    description: `${unit.name} research and thesis guidance for ${university.name}.`,
  };
}

export default async function AcademicUnitGuidelinePage({
  params,
}: {
  params: Promise<{
    locale: string;
    university: string;
    unit: string;
  }>;
}) {
  const {
    locale,
    university: universitySlug,
    unit: unitSlug,
  } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const university = getUniversityGuideline(universitySlug);
  const unit = getAcademicUnit(universitySlug, unitSlug);

  if (!university || !unit) {
    notFound();
  }

  return (
    <AcademicUnitGuidelineClient
      university={university}
      unit={unit}
      locale={locale as Locale}
    />
  );
}
