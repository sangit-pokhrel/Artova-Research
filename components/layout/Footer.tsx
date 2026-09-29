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

    location: "Chardobato, Thimi, Bhaktapur",
    email: "info@artovaresearch.com",
    phone: "+977 9809816596",

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

    location: "चारदोबाटो, ठिमी, भक्तपुर",
    email: "info@artovaresearch.com",
    phone: "+977 9809816596",

    privacy: "गोपनीयता नीति",
    terms: "नियम तथा सर्तहरू",
    poweredBy: "द्वारा सञ्चालित",
  },
} satisfies Record<Locale, object>;

export default function Footer({
  locale,
}: {
  locale: Locale;
}) {
  const t = content[locale];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-white">
      {/* =====================================================
          FOOTER BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(115deg,#21045f_0%,#2d0877_35%,#3d0b91_68%,#5b0fc7_100%)]
        "
      />

      {/* Top-right violet glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#7c19e8]/35
          blur-[120px]
        "
      />

      {/* Bottom-center glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-56
          left-1/2
          h-[600px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#5d12d2]/30
          blur-[130px]
        "
      />

      {/* =====================================================
          LARGE ARTOVA WATERMARK
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[70px]
          left-1/2
          z-0
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-[var(--font-jakarta)]
          text-[15vw]
          font-extrabold
          leading-none
          tracking-[-0.075em]
          text-white/[0.045]
        "
      >
        ARTOVA
      </div>

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* =================================================
            MAIN FOOTER CONTENT
            ================================================= */}

        <div
          className="
            grid
            gap-12
            py-12
            sm:py-14
            lg:grid-cols-[1.35fr_0.75fr_1fr]
            lg:gap-20
            lg:py-16
          "
        >
          {/* =================================================
              BRAND
              ================================================= */}

          <div className="max-w-xl">
            <Link
              href={`/${locale}`}
              className="group inline-flex items-center gap-4"
            >
              {/* Logo */}

              <span
                className="
                  relative
                  flex
                  h-[72px]
                  w-[72px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-accent/30
                  bg-white/[0.035]
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]
                "
              >
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={90}
                  height={90}
                  className="
                    h-[72px]
                    w-[72px]
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </span>

              {/* Brand text */}

              <span className="flex flex-col justify-center leading-none">
                <span
                  className="
                    text-[30px]
                    font-extrabold
                    tracking-[0.105em]
                    text-white
                    sm:text-[32px]
                  "
                >
                  ARTOVA
                </span>

                <span
                  className="
                    mt-1.5
                    text-[16px]
                    font-medium
                    tracking-[0.31em]
                    text-accent
                  "
                >
                  RESEARCH
                </span>

                <span
                  className="
                    mt-2
                    text-[8px]
                    font-medium
                    tracking-[0.2em]
                    text-white/65
                    sm:text-[9px]
                  "
                >
                  IDEAS <span className="text-accent">|</span> INSIGHTS{" "}
                  <span className="text-accent">|</span> IMPACT
                </span>
              </span>
            </Link>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-[590px]
                text-[15px]
                leading-7
                text-white/70
                sm:text-base
              "
            >
              {t.description}
            </p>

            {/* =================================================
                SOCIAL ICONS
                ================================================= */}

            <div className="mt-7 flex items-center gap-4">
              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-accent/55
                  bg-white/[0.025]
                  text-white
                  shadow-[0_0_18px_rgba(168,85,247,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent
                  hover:bg-accent
                  hover:shadow-[0_0_28px_rgba(168,85,247,0.4)]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V5h-3c-2.76 0-5 2.24-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-.55.45-1 1-1Z" />
                </svg>
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-accent/55
                  bg-white/[0.025]
                  text-white
                  shadow-[0_0_18px_rgba(168,85,247,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent
                  hover:bg-accent
                  hover:shadow-[0_0_28px_rgba(168,85,247,0.4)]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[21px] w-[21px] fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/9779809816596"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-accent/55
                  bg-white/[0.025]
                  text-white
                  shadow-[0_0_18px_rgba(168,85,247,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent
                  hover:bg-accent
                  hover:shadow-[0_0_28px_rgba(168,85,247,0.4)]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[21px] w-[21px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2a9.9 9.9 0 0 0-8.53 15.02L2 22l5.13-1.35A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.04.8.81-2.96-.19-.3A8 8 0 1 1 12 20Zm4.38-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.07 3.59.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
              ================================================= */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-accent" />

              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                {t.quickLinks}
              </h3>
            </div>

            <nav className="mt-7 flex flex-col gap-3">
              {t.links.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="
                    w-fit
                    text-base
                    text-white/75
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              DIRECT CONTACT
              ================================================= */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-accent" />

              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white
                "
              >
                {t.contact}
              </h3>
            </div>

            <div className="mt-7 space-y-5">
              {/* Location */}

              <div className="flex items-center gap-5">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-accent/60
                    bg-white/[0.025]
                    text-accent
                    shadow-[0_0_20px_rgba(168,85,247,0.2)]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-none stroke-current"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <p className="text-base text-white/75">
                  {t.location}
                </p>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-5">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-accent/60
                    bg-white/[0.025]
                    text-accent
                    shadow-[0_0_20px_rgba(168,85,247,0.2)]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-none stroke-current"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.2 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>

                <a
                  href="tel:+9779809816596"
                  className="
                    text-base
                    text-white/75
                    transition-colors
                    hover:text-white
                  "
                >
                  {t.phone}
                </a>
              </div>

              {/* Email */}

              <div className="flex items-center gap-5">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-accent/60
                    bg-white/[0.025]
                    text-accent
                    shadow-[0_0_20px_rgba(168,85,247,0.2)]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-none stroke-current"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <a
                  href={`mailto:${t.email}`}
                  className="
                    text-base
                    text-white/75
                    transition-colors
                    hover:text-white
                  "
                >
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM DIVIDER
            ================================================= */}

        <div className="relative border-t border-white/15">
          <div
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0
              h-[2px]
              w-32
              bg-accent
            "
          />
        </div>

        {/* =================================================
            BOTTOM BAR
            ================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            gap-5
            py-5
            text-sm
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Copyright */}

          <p className="font-medium text-white/75">
            © {new Date().getFullYear()} Artova Research. All rights
            reserved.
          </p>

          {/* Legal + Powered By */}

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/privacy`}
              className="
                text-white/65
                transition-colors
                hover:text-white
              "
            >
              {t.privacy}
            </Link>

            <span className="text-accent/70">•</span>

            <Link
              href={`/${locale}/terms`}
              className="
                text-white/65
                transition-colors
                hover:text-white
              "
            >
              {t.terms}
            </Link>

            <span className="hidden h-5 w-px bg-white/25 sm:block" />

            {/* Powered by Artova Solutions */}

            <a
              href="https://artovasolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-accent/70
                bg-accent/10
                px-5
                py-2
                text-sm
                shadow-[0_0_22px_rgba(168,85,247,0.2)]
                transition-all
                duration-300
                hover:border-accent
                hover:bg-accent/20
                hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
              "
            >
              <span className="text-accent">
                {t.poweredBy}
              </span>

              <span className="font-bold text-white">
                Artova Solutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}