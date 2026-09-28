import FinalCTA from "@/components/sections/home/FinalCTA";
import Hero from "@/components/sections/home/Hero";
import HowItWorks from "@/components/sections/home/HowItWorks";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import Testimonials from "@/components/sections/home/Testimonials";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";

import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "ne") {
    notFound();
  }

  return (
    <>
      <Hero locale={locale} />
      <ServicesPreview locale={locale} />
      <WhyChooseUs locale={locale} />
      <HowItWorks locale={locale} />
      <Testimonials locale={locale} />
      <FinalCTA locale={locale} />



    </>
  );
}