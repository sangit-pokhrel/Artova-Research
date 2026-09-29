import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

const content = {
  en: {
    description:
      "Professional research support for students, researchers, and academic professionals across their research journey.",

    quickLinks: "Quick Links",
    contact: "Direct Contact",

    links: [
      { label: "Home", href: "" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Research", href: "/research" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],

    location: "Kathmandu, Nepal",
    email: "info@artovaresearch.com",
    phone: "+977 98XXXXXXXX",

    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    poweredBy: "Powered by",
  },

  ne: {
    description:
      "विद्यार्थी, अनुसन्धानकर्ता तथा शैक्षिक पेशाकर्मीहरूका लागि अनुसन्धान यात्राका विभिन्न चरणमा व्यावसायिक सहयोग।",

    quickLinks: "द्रुत लिंकहरू",
    contact: "सम्पर्क",

    links: [
      { label: "होम", href: "" },
      { label: "हाम्रो बारेमा", href: "/about" },
      { label: "सेवाहरू", href: "/services" },
      { label: "अनुसन्धान", href: "/research" },
      { label: "स्रोतहरू", href: "/resources" },
      { label: "बारम्बार सोधिने प्रश्न", href: "/faq" },
      { label: "सम्पर्क", href: "/contact" },
    ],

    location: "काठमाडौं, नेपाल",
    email: "info@artovaresearch.com",
    phone: "+977 98XXXXXXXX",

    privacy: "गोपनीयता नीति",
    terms: "नियम तथा सर्तहरू",
    poweredBy: "द्वारा सञ्चालित",
  },
} satisfies Record<Locale, object>;

export default function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <footer className="border-t border-border bg-primary text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center gap-2.5"
            >
              {/* Compact logo mark */}
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.jpg"
                  alt=""
                  width={60}
                  height={60}
                  className="absolute left-1/2 top-0 h-[60px] w-[60px] max-w-none -translate-x-1/2 object-cover"
                />
              </span>

              {/* Brand text */}
              <span className="flex flex-col justify-center leading-none">
                <span className="text-[15px] font-extrabold tracking-[0.12em] text-white">
                  ARTOVA
                </span>

                <span className="mt-0.5 text-[9px] font-medium tracking-[0.32em] text-accent">
                  RESEARCH
                </span>

                <span className="mt-1 text-[5px] font-medium tracking-[0.18em] text-white/60">
                  IDEAS <span className="text-accent">|</span> INSIGHTS{" "}
                  <span className="text-accent">|</span> IMPACT
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              {t.description}
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/15
                  text-sm font-bold text-white/60
                  transition
                  hover:border-accent
                  hover:text-accent
                "
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/15
                  text-sm font-bold text-white/60
                  transition
                  hover:border-accent
                  hover:text-accent
                "
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/15
                  text-sm font-bold text-white/60
                  transition
                  hover:border-accent
                  hover:text-accent
                "
              >
                W
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              {t.quickLinks}
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {t.links.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="
                    w-fit text-sm text-white/60
                    transition
                    hover:text-accent
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              {t.contact}
            </h3>

            <div className="mt-6 space-y-5">
              {/* Location */}
              <div className="flex gap-4">
                <span className="mt-0.5 text-accent">●</span>

                <div>
                  <p className="text-sm text-white/70">
                    {t.location}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <span className="mt-0.5 text-accent">●</span>

                <a
                  href="tel:+9779800000000"
                  className="
                    text-sm text-white/70
                    transition
                    hover:text-accent
                  "
                >
                  {t.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <span className="mt-0.5 text-accent">●</span>

                <a
                  href={`mailto:${t.email}`}
                  className="
                    text-sm text-white/70
                    transition
                    hover:text-accent
                  "
                >
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Artova Research. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/privacy`}
                className="transition hover:text-accent"
              >
                {t.privacy}
              </Link>

              <span>•</span>

              <Link
                href={`/${locale}/terms`}
                className="transition hover:text-accent"
              >
                {t.terms}
              </Link>

              <span>•</span>

              <span>
                {t.poweredBy}{" "}
                <a
                  href="https://artovasolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-semibold text-white/60
                    transition
                    hover:text-accent
                  "
                >
                  Artova Solutions
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}