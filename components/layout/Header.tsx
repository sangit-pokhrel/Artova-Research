"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { translations } from "@/lib/i18n/translations";

const navigation = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "services", path: "services" },
  { key: "subjects", path: "subjects" },
] as const;

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);

  const locale = pathname.split("/")[1] === "ne" ? "ne" : "en";
  const t = translations[locale];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
  };

  /*
   * Switch navbar to glass mode after
   * scrolling through roughly the middle
   * of the Hero section.
   */
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;

      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Close Explore dropdown when clicking outside.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node)
      ) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    const href = `/${locale}${path ? `/${path}` : ""}`;

    return path === ""
      ? pathname === `/${locale}`
      : pathname.startsWith(href);
  };

  const exploreItems = [
    {
      label: locale === "en" ? "Research" : "अनुसन्धान",
      description:
        locale === "en"
          ? "Our research approach"
          : "हाम्रो अनुसन्धान दृष्टिकोण",
      href: `/${locale}/research`,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path
            d="m16 16 4.5 4.5"
            strokeLinecap="round"
          />
          <path
            d="M8.5 11h5M11 8.5v5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: locale === "en" ? "Resources" : "स्रोत सामग्री",
      description:
        locale === "en"
          ? "Research guides and insights"
          : "अनुसन्धान मार्गदर्शन तथा सामग्री",
      href: `/${locale}/resources`,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path
            d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v18H7.5A2.5 2.5 0 0 1 5 17.5v-13Z"
            strokeLinejoin="round"
          />
          <path
            d="M5 5h11M9 8h6M9 12h6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: locale === "en" ? "FAQ" : "सामान्य प्रश्नहरू",
      description:
        locale === "en"
          ? "Common questions answered"
          : "सामान्य प्रश्नहरूको उत्तर",
      href: `/${locale}/faq`,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <circle cx="12" cy="12" r="8.5" />

          <path
            d="M9.8 9.3a2.5 2.5 0 1 1 4.3 1.8c-.8.8-2.1 1.2-2.1 2.7"
            strokeLinecap="round"
          />

          <path
            d="M12 16.7h.01"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div
          className={`
            relative rounded-2xl
            border
            px-4
            transition-all duration-500 ease-out
            sm:px-5 lg:px-6
            ${
              isScrolled
                ? `
                  border-white/20
                  bg-white/10
                  shadow-[var(--shadow-lg)]
                  backdrop-blur-xl
                  dark:border-white/15
                  dark:bg-black/10
                `
                : `
                  border-border
                  bg-surface-elevated
                  shadow-[var(--shadow-md)]
                `
            }
          `}
        >
          <div className="flex h-[68px] items-center justify-between">

            {/* =====================================================
                LOGO
                ===================================================== */}

            <Link
              href={`/${locale}`}
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={76}
                  height={76}
                  priority
                  className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>

              <span className="flex flex-col justify-center leading-none">
                <span
                  className={`
                    text-[19px]
                    font-extrabold
                    tracking-[0.12em]
                    transition-colors duration-300
                    ${
                      isScrolled
                        ? "text-white dark:text-white"
                        : "text-foreground"
                    }
                  `}
                >
                  ARTOVA
                </span>

                <span className="mt-0.5 text-[11px] font-medium tracking-[0.32em] text-accent">
                  RESEARCH
                </span>

                <span
                  className={`
                    mt-1
                    text-[6.5px]
                    font-medium
                    tracking-[0.18em]
                    transition-colors duration-300
                    ${
                      isScrolled
                        ? "text-white/65"
                        : "text-muted"
                    }
                  `}
                >
                  IDEAS{" "}
                  <span className="text-accent">|</span>{" "}
                  INSIGHTS{" "}
                  <span className="text-accent">|</span>{" "}
                  IMPACT
                </span>
              </span>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
                ===================================================== */}

            <nav className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => {
                const href = `/${locale}${item.path ? `/${item.path}` : ""}`;

                const active = isActive(item.path);

                return (
                  <Link
                    key={item.key}
                    href={href}
                    className={`
                      group relative rounded-xl
                      px-4 py-2.5
                      text-sm font-semibold
                      transition-all duration-300
                      ${
                        active
                          ? "text-accent"
                          : isScrolled
                            ? "text-white/90 hover:bg-white/10 hover:text-white dark:text-white/90"
                            : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                      }
                    `}
                  >
                    {t.navigation[item.key]}

                    <span
                      className={`
                        absolute bottom-1 left-1/2
                        h-0.5 -translate-x-1/2
                        rounded-full bg-accent
                        transition-all duration-300
                        ${active ? "w-5" : "w-0 group-hover:w-5"}
                      `}
                    />
                  </Link>
                );
              })}

              {/* =================================================
                  EXPLORE
                  ================================================= */}

              <div ref={exploreRef} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setIsExploreOpen((open) => !open)
                  }
                  aria-expanded={isExploreOpen}
                  className={`
                    group flex items-center gap-2
                    rounded-xl px-4 py-2.5
                    text-sm font-semibold
                    transition-all duration-300
                    ${
                      isExploreOpen
                        ? "bg-accent-soft text-accent"
                        : isScrolled
                          ? "text-white/90 hover:bg-white/10 hover:text-white"
                          : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                    }
                  `}
                >
                  {locale === "en"
                    ? "Explore"
                    : "अन्वेषण"}

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`
                      h-4 w-4
                      transition-transform duration-300
                      ${isExploreOpen ? "rotate-180" : ""}
                    `}
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path
                      d="m5.5 7.5 4.5 4.5 4.5-4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* =================================================
                    EXPLORE DROPDOWN
                    ================================================= */}

                <div
                  className={`
                    absolute right-0 top-[calc(100%+14px)]
                    w-[310px]
                    origin-top-right
                    transition-all duration-200
                    ${
                      isExploreOpen
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none -translate-y-2 scale-95 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      border border-border
                      bg-surface-elevated
                      p-2
                      shadow-[var(--shadow-lg)]
                    "
                  >
                    <div className="px-4 pb-2 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                        {locale === "en"
                          ? "Explore Artova"
                          : "Artova अन्वेषण गर्नुहोस्"}
                      </p>
                    </div>

                    <div className="space-y-1">
                      {exploreItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="
                            group flex items-center gap-4
                            rounded-xl px-4 py-3
                            transition-all duration-200
                            hover:bg-accent-soft
                          "
                        >
                          <span
                            className="
                              flex h-10 w-10 shrink-0
                              items-center justify-center
                              rounded-xl
                              bg-accent-soft
                              text-accent
                              transition-all duration-200
                              group-hover:bg-accent
                              group-hover:text-primary
                            "
                          >
                            {item.icon}
                          </span>

                          <span className="min-w-0">
                            <span className="block text-sm font-bold text-foreground">
                              {item.label}
                            </span>

                            <span className="mt-0.5 block text-xs text-muted">
                              {item.description}
                            </span>
                          </span>

                          <span
                            className="
                              ml-auto
                              text-accent
                              opacity-0
                              transition-all duration-200
                              group-hover:translate-x-1
                              group-hover:opacity-100
                            "
                          >
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CONTROLS
                  ================================================= */}

              <div
                className={`
                  ml-3 flex items-center gap-2
                  border-l pl-3
                  transition-colors duration-300
                  ${
                    isScrolled
                      ? "border-white/20"
                      : "border-border"
                  }
                `}
              >
                <LanguageSwitcher />

                <ThemeToggle />

                {/* MASTER CONTACT BUTTON */}

                <Button
                  href={`/${locale}/contact`}
                  className="ml-1 px-5 py-2.5"
                >
                  {t.navigation.contact}
                </Button>
              </div>
            </nav>

            {/* =====================================================
                MOBILE CONTROLS
                ===================================================== */}

            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher />

              <ThemeToggle />

              <button
                type="button"
                onClick={() =>
                  setIsMenuOpen((open) => !open)
                }
                aria-label={
                  isMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMenuOpen}
                className={`
                  group flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border
                  transition-all duration-300
                  ${
                    isScrolled
                      ? "border-white/20 text-white hover:border-accent hover:bg-white/10 hover:text-accent"
                      : "border-border text-foreground hover:border-accent hover:bg-accent-soft hover:text-accent"
                  }
                `}
              >
                <div className="relative h-4 w-5">
                  <span
                    className={`
                      absolute left-0 top-0
                      h-0.5 w-5 rounded-full
                      bg-current
                      transition-all duration-300
                      ${isMenuOpen ? "top-2 rotate-45" : ""}
                    `}
                  />

                  <span
                    className={`
                      absolute left-0 top-2
                      h-0.5 w-5 rounded-full
                      bg-current
                      transition-all duration-300
                      ${isMenuOpen ? "opacity-0" : ""}
                    `}
                  />

                  <span
                    className={`
                      absolute left-0 top-4
                      h-0.5 w-5 rounded-full
                      bg-current
                      transition-all duration-300
                      ${
                        isMenuOpen
                          ? "top-2 -rotate-45"
                          : ""
                      }
                    `}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* =======================================================
              MOBILE MENU
              ======================================================= */}

          <div
            className={`
              overflow-hidden
              transition-all duration-300
              md:hidden
              ${
                isMenuOpen
                  ? "max-h-[600px] border-t border-border opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <nav className="space-y-1 py-4">
              {navigation.map((item) => {
                const href = `/${locale}${item.path ? `/${item.path}` : ""}`;

                const active = isActive(item.path);

                return (
                  <Link
                    key={item.key}
                    href={href}
                    onClick={closeMenu}
                    className={`
                      flex items-center justify-between
                      rounded-xl px-4 py-3.5
                      text-sm font-semibold
                      transition-all
                      ${
                        active
                          ? "bg-accent-soft text-accent"
                          : "text-foreground/80 hover:bg-foreground/5"
                      }
                    `}
                  >
                    <span>
                      {t.navigation[item.key]}
                    </span>

                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}

              {/* MOBILE EXPLORE */}

              <button
                type="button"
                onClick={() =>
                  setIsExploreOpen((open) => !open)
                }
                className="
                  flex w-full items-center justify-between
                  rounded-xl px-4 py-3.5
                  text-sm font-semibold
                  text-foreground/80
                  transition-all
                  hover:bg-foreground/5
                "
              >
                <span>
                  {locale === "en"
                    ? "Explore"
                    : "अन्वेषण"}
                </span>

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`
                    h-4 w-4 text-accent
                    transition-transform duration-300
                    ${isExploreOpen ? "rotate-180" : ""}
                  `}
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    d="m5.5 7.5 4.5 4.5 4.5-4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isExploreOpen && (
                <div className="ml-3 space-y-1 border-l border-accent/30 pl-3">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        flex items-center gap-3
                        rounded-xl px-3 py-3
                        text-sm text-foreground/70
                        transition
                        hover:bg-accent-soft
                        hover:text-accent
                      "
                    >
                      <span className="text-accent">
                        {item.icon}
                      </span>

                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* MOBILE CONTACT — SAME MASTER BUTTON */}

              <Button
                href={`/${locale}/contact`}
                onClick={closeMenu}
                className="mt-3 w-full"
              >
                {t.navigation.contact}
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}