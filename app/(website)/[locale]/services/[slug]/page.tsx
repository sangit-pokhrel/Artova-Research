import { notFound } from "next/navigation";

import ServiceDetailClient from "./ServiceDetailClient";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.flatMap((service) =>
    (["en", "ne"] as const).map((locale) => ({
      locale,
      slug: service.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: ServicePageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isValidLocale(localeParam)) {
    return {
      title: "Service Not Found | Artova Research",
    };
  }

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found | Artova Research",
    };
  }

  const title =
    localeParam === "en"
      ? `${service.title} | Artova Research`
      : `${service.title} | Artova Research`;

  return {
    title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailClient
      service={service}
      locale={locale}
    />
  );
}