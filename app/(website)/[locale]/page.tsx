import Hero from "@/components/sections/home/Hero";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Testimonials from "@/components/sections/home/Testimonials";
import FinalCTA from "@/components/sections/home/FinalCTA";
import type { Locale } from "@/lib/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />

      <ServicesPreview locale={locale} />

      <HowItWorks locale={locale} />

      <WhyChooseUs locale={locale} />

      <Testimonials locale={locale} />

      <FinalCTA locale={locale} />
    </>
  );
}