"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { translations } from "@/lib/i18n/translations";

const navigation = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "services", path: "services" },
] as const;

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);

  const locale = pathname.split("/")[1] === "ne" ? "ne" : "en";
  const t = translations[locale];

  const homeHref = `/${locale}`;

  /* =========================================================
     CLOSE MENUS
     ========================================================= */

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsExploreOpen(false);
    setIsMobileExploreOpen(false);
  };

  /* =========================================================
     SCROLL DETECTION
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE EXPLORE WHEN CLICKING OUTSIDE
     ========================================================= */

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

  /* =========================================================
     LOGO → HOME TOP
     ========================================================= */

  const handleLogoClick = () => {
    closeMenu();

    if (pathname === homeHref) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /* =========================================================
     ACTIVE ROUTE
     ========================================================= */

  const isActive = (path: string) => {
    const href = `/${locale}${path ? `/${path}` : ""}`;

    return path === ""
      ? pathname === `/${locale}`
      : pathname.startsWith(href);
  };

  /* =========================================================
     EXPLORE ITEMS
     
     Only Resources + Subjects.
     
     FAQ is on the Home page.
     Research is not part of Explore.
     ========================================================= */

  const exploreItems = [
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
      label: locale === "en" ? "Subjects" : "विषय क्षेत्रहरू",
      description:
        locale === "en"
          ? "Explore academic subject areas"
          : "शैक्षिक विषय क्षेत्रहरू हेर्नुहोस्",
      href: `/${locale}/subjects`,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path
            d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5v-11Z"
            strokeLinejoin="round"
          />

          <path
            d="M4 6h12M8 10h8M8 14h5"
            strokeLinecap="round"
          />

          <path
            d="M17 3v16"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <header className="sticky top-0 z-50 px-2.5 pt-2.5 sm:px-4 sm:pt-3 lg:px-6">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            GLASS NAVBAR
            ===================================================== */}

        <div
          className={`
            relative
            overflow-visible
            rounded-2xl
            border
            px-3
            transition-all
            duration-500
            ease-out
            sm:px-5
            lg:px-6

            ${
              isScrolled
                ? `
                    border-white/10
                    bg-background/5
                    shadow-[0_8px_25px_rgba(15,23,42,0.02)]
                    backdrop-blur-md
                  `
                : `
                    border-white/30
                    bg-background/45
                    shadow-[0_8px_25px_rgba(15,23,42,0.04)]
                    backdrop-blur-2xl
                  `
            }
          `}
        >
          {/* =====================================================
              SUBTLE TOP HIGHLIGHT
              ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-5
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/70
              to-transparent
              opacity-60
            "
          />

          {/* =====================================================
              MAIN NAVBAR
              ===================================================== */}

          <div
            className="
              flex
              h-[64px]
              items-center
              justify-between
              sm:h-[68px]
              md:grid
              md:grid-cols-[1fr_auto_1fr]
            "
          >
            {/* ===================================================
                LOGO — LEFT
                =================================================== */}

            <Link
              href={homeHref}
              onClick={handleLogoClick}
              className="
                group
                flex
                items-center
                gap-3
                justify-self-start
              "
            >
              <span
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  sm:h-14
                  sm:w-14
                "
              >
                <Image
                  src="/images/logo.png"
                  alt="Artova Research"
                  width={76}
                  height={76}
                  priority
                  className="
                    h-11
                    w-11
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-[1.03]
                    sm:h-14
                    sm:w-14
                  "
                />
              </span>

              <span
                className="
                  flex
                  flex-col
                  justify-center
                  leading-none
                "
              >
                <span
                  className="
                    text-[16px]
                    font-extrabold
                    tracking-[0.12em]
                    text-foreground
                    sm:text-[19px]
                  "
                >
                  ARTOVA
                </span>

                <span
                  className="
                    mt-0.5
                    text-[9px]
                    font-medium
                    tracking-[0.32em]
                    text-accent
                    sm:text-[11px]
                  "
                >
                  RESEARCH
                </span>

                <span
                  className="
                    mt-1
                    text-[6.5px]
                    font-medium
                    tracking-[0.18em]
                    text-muted
                  "
                >
                  IDEAS{" "}
                  <span className="text-accent">|</span>{" "}
                  INSIGHTS{" "}
                  <span className="text-accent">|</span>{" "}
                  IMPACT
                </span>
              </span>
            </Link>

            {/* ===================================================
                DESKTOP NAVIGATION
                =================================================== */}

            <nav
              className="
                hidden
                items-center
                gap-1
                justify-self-center
                md:flex
              "
            >
              {/* HOME / ABOUT / SERVICES */}

              {navigation.map((item) => {
                const href = `/${locale}${
                  item.path ? `/${item.path}` : ""
                }`;

                const active = isActive(item.path);

                return (
                  <Link
                    key={item.key}
                    href={href}
                    className={`
                      group
                      relative
                      rounded-xl
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        active
                          ? "text-accent"
                          : "text-foreground hover:bg-foreground/5 hover:text-foreground"
                      }
                    `}
                  >
                    {t.navigation[item.key]}

                    <span
                      className={`
                        absolute
                        bottom-1
                        left-1/2
                        h-0.5
                        -translate-x-1/2
                        rounded-full
                        bg-accent
                        transition-all
                        duration-300

                        ${
                          active
                            ? "w-5"
                            : "w-0 group-hover:w-5"
                        }
                      `}
                    />
                  </Link>
                );
              })}

              {/* =================================================
                  EXPLORE
                  ================================================= */}

              <div
                ref={exploreRef}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() =>
                    setIsExploreOpen((open) => !open)
                  }
                  aria-expanded={isExploreOpen}
                  className={`
                    group
                    flex
                    items-center
                    gap-1.5
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    sm:gap-2

                    ${
                      isExploreOpen
                        ? "bg-accent-soft text-accent"
                        : "text-foreground hover:bg-foreground/5 hover:text-foreground"
                    }
                  `}
                >
                  {locale === "en" ? "Explore" : "अन्वेषण"}

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      ${
                        isExploreOpen
                          ? "rotate-180"
                          : ""
                      }
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

                    No fade animation.
                    It simply appears/disappears.
                    ================================================= */}

                {isExploreOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[calc(100%+14px)]
                      w-[310px]
                    "
                  >
                    <div
                      className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border
                        bg-surface-elevated
                        p-2
                        shadow-[var(--shadow-lg)]
                      "
                    >
                      <div
                        className="
                          px-4
                          pb-2
                          pt-3
                        "
                      >
                        <p
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
                            text-accent
                          "
                        >
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
                              group
                              flex
                              items-center
                              gap-4
                              rounded-xl
                              px-4
                              py-3
                              transition-all
                              duration-200
                              hover:bg-accent-soft
                            "
                          >
                            <span
                              className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-accent-soft
                                text-accent
                                transition-all
                                duration-200
                                group-hover:bg-accent
                                group-hover:text-primary
                              "
                            >
                              {item.icon}
                            </span>

                            <span className="min-w-0">
                              <span
                                className="
                                  block
                                  text-sm
                                  font-bold
                                  text-foreground
                                "
                              >
                                {item.label}
                              </span>

                              <span
                                className="
                                  mt-0.5
                                  block
                                  text-xs
                                  text-muted
                                "
                              >
                                {item.description}
                              </span>
                            </span>

                            <span
                              className="
                                ml-auto
                                text-accent
                                opacity-0
                                transition-all
                                duration-200
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
                )}
              </div>

              {/* =================================================
                  GUIDELINES
                  ================================================= */}

              <Link
                href={`/${locale}/guidelines`}
                className={`
                  group
                  relative
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive("guidelines")
                      ? "text-accent"
                      : "text-foreground hover:bg-foreground/5 hover:text-foreground"
                  }
                `}
              >
                {locale === "en"
                  ? "Guidelines"
                  : "निर्देशनहरू"}

                <span
                  className={`
                    absolute
                    bottom-1
                    left-1/2
                    h-0.5
                    -translate-x-1/2
                    rounded-full
                    bg-accent
                    transition-all
                    duration-300

                    ${
                      isActive("guidelines")
                        ? "w-5"
                        : "w-0 group-hover:w-5"
                    }
                  `}
                />
              </Link>
            </nav>

            {/* ===================================================
                RIGHT — LANGUAGE / THEME / CONTACT
                =================================================== */}

            <div
              className="
                hidden
                items-center
                gap-2
                justify-self-end
                md:flex
              "
            >
              <LanguageSwitcher />

              <ThemeToggle />

              <div
                className="
                  ml-1
                  border-l
                  border-border/70
                  pl-3
                "
              >
                <Button
                  href={`/${locale}/contact`}
                  className="px-5 py-2.5"
                >
                  {t.navigation.contact}
                </Button>
              </div>
            </div>

            {/* ===================================================
                MOBILE CONTROLS
                =================================================== */}

            <div
              className="
                flex
                items-center
                gap-2
                justify-self-end
                md:hidden
              "
            >
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
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-border
                  text-foreground
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:bg-accent-soft
                  hover:text-accent
                "
              >
                {isMenuOpen ? (
                  <X
                    className="h-6 w-6"
                    strokeWidth={1.8}
                  />
                ) : (
                  <Menu
                    className="h-6 w-6"
                    strokeWidth={1.8}
                  />
                )}
              </button>
            </div>
          </div>

          {/* =======================================================
              MOBILE MENU
              ======================================================= */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              md:hidden

              ${
                isMenuOpen
                  ? "max-h-[700px] border-t border-border opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <nav className="space-y-1 py-3 sm:py-4">
              {/* HOME / ABOUT / SERVICES */}

              {navigation.map((item) => {
                const href = `/${locale}${
                  item.path ? `/${item.path}` : ""
                }`;

                const active = isActive(item.path);

                return (
                  <Link
                    key={item.key}
                    href={href}
                    onClick={closeMenu}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-3
                      py-3
                      text-sm
                      font-semibold
                      transition-all
                      sm:px-4
                      sm:py-3.5

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
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-accent
                        "
                      />
                    )}
                  </Link>
                );
              })}

              {/* =================================================
                  MOBILE EXPLORE
                  ================================================= */}

              <button
                type="button"
                onClick={() =>
                  setIsMobileExploreOpen((open) => !open)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3.5
                  text-sm
                  font-semibold
                  text-foreground/80
                  transition-all
                  hover:bg-foreground/5
                "
                aria-expanded={isMobileExploreOpen}
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
                    h-4
                    w-4
                    text-accent
                    transition-transform
                    duration-300
                    ${
                      isMobileExploreOpen
                        ? "rotate-180"
                        : ""
                    }
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

              {isMobileExploreOpen && (
                <div
                  className="
                    ml-3
                    space-y-1
                    border-l
                    border-accent/30
                    pl-3
                  "
                >
                  {exploreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        text-foreground/70
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

              {/* =================================================
                  GUIDELINES
                  ================================================= */}

              <Link
                href={`/${locale}/guidelines`}
                onClick={closeMenu}
                className={`
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  sm:px-4
                  sm:py-3.5

                  ${
                    isActive("guidelines")
                      ? "bg-accent-soft text-accent"
                      : "text-foreground/80 hover:bg-foreground/5"
                  }
                `}
              >
                <span>
                  {locale === "en"
                    ? "Guidelines"
                    : "निर्देशनहरू"}
                </span>

                {isActive("guidelines") && (
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-accent
                    "
                  />
                )}
              </Link>

              {/* =================================================
                  MOBILE CONTACT
                  ================================================= */}

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