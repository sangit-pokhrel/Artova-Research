import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import ResearchIcon from "@/components/ui/ResearchIcon";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";
import type { ResearchIconName } from "@/components/ui/ResearchIcon";
import type { Locale } from "@/lib/i18n/config";
import { images } from "@/lib/images";

const content: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    services: {
      number: string;
      title: string;
      description: string;
      icon: ResearchIconName;
      image: string;
    }[];
    button: string;
  }
> = {
  en: {
    eyebrow: "WHAT WE DO",
    title: "Research support built around your needs.",
    description:
      "From the first research idea to the final academic document, we provide focused support throughout your research journey.",

    services: [
      {
        number: "01",
        title: "Proposal Support",
        description:
          "Develop clear, structured and academically sound research proposals.",
        icon: "proposal",
        image: images.services.proposalSupport,
      },

      {
        number: "02",
        title: "Thesis & Dissertation",
        description:
          "Guidance and support throughout your thesis or dissertation journey.",
        icon: "thesis",
        image: images.services.thesisAndDissertation,
      },

      {
        number: "03",
        title: "Data Analysis",
        description:
          "Turn your research data into meaningful findings and clear results.",
        icon: "data",
        image: images.services.dataAnalysis,
      },

      {
        number: "04",
        title: "Literature Review",
        description:
          "Organize, evaluate and synthesize relevant academic literature.",
        icon: "literature",
        image: images.services.literatureReview,
      },
    ],

    button: "View All Services",
  },

  ne: {
    eyebrow: "हामी के गर्छौँ",
    title: "तपाईंको आवश्यकताअनुसार अनुसन्धान सहयोग।",
    description:
      "अनुसन्धानको प्रारम्भिक विचारदेखि अन्तिम शैक्षिक दस्तावेजसम्म तपाईंको अनुसन्धान यात्राका विभिन्न चरणमा केन्द्रित सहयोग।",

    services: [
      {
        number: "०१",
        title: "प्रस्ताव सहयोग",
        description:
          "स्पष्ट, व्यवस्थित र शैक्षिक रूपमा बलियो अनुसन्धान प्रस्ताव तयार गर्न सहयोग।",
        icon: "proposal",
        image: images.services.proposalSupport,
      },

      {
        number: "०२",
        title: "थेसिस तथा डिसर्टेसन",
        description:
          "थेसिस वा डिसर्टेसनको सम्पूर्ण यात्रामा आवश्यक मार्गदर्शन तथा सहयोग।",
        icon: "thesis",
        image: images.services.thesisAndDissertation,
      },

      {
        number: "०३",
        title: "डेटा विश्लेषण",
        description:
          "अनुसन्धानका डेटालाई अर्थपूर्ण निष्कर्ष तथा स्पष्ट परिणाममा रूपान्तरण गर्न सहयोग।",
        icon: "data",
        image: images.services.dataAnalysis,
      },

      {
        number: "०४",
        title: "साहित्य समीक्षा",
        description:
          "सम्बन्धित शैक्षिक साहित्यलाई व्यवस्थित, मूल्याङ्कन तथा संश्लेषण गर्न सहयोग।",
        icon: "literature",
        image: images.services.literatureReview,
      },
    ],

    button: "सबै सेवाहरू हेर्नुहोस्",
  },
};

export default function ServicesPreview({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  const servicesHref = `/${locale}/services`;

  return (
    <section className="relative -mt-2 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-accent-soft
          blur-3xl
        "
      />

      {/* Decorative vertical line */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-px
          bg-border
        "
      />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {t.eyebrow}
              </p>
            </div>

            <h2 className="mt-4 max-w-xl font-[var(--font-jakarta)] text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              {t.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted lg:justify-self-end lg:text-lg">
            {t.description}
          </p>
        </div>

        {/* Services */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {t.services.map((service) => (
            <Link
              key={service.number}
              href={servicesHref}
              className="group block"
            >
              <article
                className="
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-border
                  bg-surface
                  p-5
                  text-foreground
                  shadow-[var(--shadow-sm)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-accent/50
                  hover:shadow-[var(--shadow-md)]
                  sm:p-6
                "
              >
                {/* Large Background Number */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-7
                    select-none
                    text-[9rem]
                    font-extrabold
                    leading-none
                    text-accent/[0.045]
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:text-accent/[0.07]
                  "
                >
                  {service.number}
                </span>

                {/* Image Glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-2
                    left-12
                    h-44
                    w-44
                    rounded-full
                    bg-accent-soft
                    blur-3xl
                    opacity-60
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 flex min-h-[250px] gap-6">
                  {/* Image */}
                  <div
                    className="
                      relative
                      w-[38%]
                      shrink-0
                      overflow-hidden
                      rounded-[1.4rem]
                      bg-surface-soft
                    "
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 767px) 40vw, 280px"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Image overlay */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-primary/20
                        via-transparent
                        to-transparent
                      "
                    />
                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    {/* Number + Line */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-accent">
                        {service.number}
                      </span>

                      <span
                        className="
                          h-px
                          w-12
                          bg-accent/40
                          transition-all
                          duration-300
                          group-hover:w-20
                        "
                      />
                    </div>

                    {/* Icon */}
                    <div className="mt-5">
                      <ResearchIconContainer>
                        <ResearchIcon name={service.icon} />
                      </ResearchIconContainer>
                    </div>

                    {/* Title + Description */}
                    <div className="mt-5">
                      <h3
                        className="
                          font-[var(--font-jakarta)]
                          text-xl
                          font-bold
                          leading-tight
                          sm:text-2xl
                        "
                      >
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="mt-auto flex items-end justify-between pt-5">
                      <span
                        className="
                          h-px
                          w-10
                          bg-accent
                          transition-all
                          duration-500
                          group-hover:w-20
                        "
                      />

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-base
                          text-soft
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:border-purple-bright
                          group-hover:bg-gradient-to-br
                          group-hover:from-purple-bright
                          group-hover:to-purple-electric
                          group-hover:text-white
                          group-hover:shadow-[var(--glow-purple)]
                        "
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Services */}
        <div className="mt-6 flex justify-center sm:justify-start">
          <Button href={servicesHref}>
            {t.button}
          </Button>
        </div>
      </div>
    </section>
  );
}