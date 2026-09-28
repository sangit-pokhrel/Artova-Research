"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { translations } from "@/lib/i18n/translations";

const navigation = [
  { key: "home", path: "" },
  { key: "about", path: "about" },
  { key: "services", path: "services" },
  { key: "subjects", path: "subjects" },
  { key: "research", path: "research" },
  { key: "resources", path: "resources" },
  { key: "faq", path: "faq" },
] as const;

export default function Header() {
  const pathname = usePathname();

  const locale = pathname.split("/")[1] === "ne" ? "ne" : "en";

  const t = translations[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-[#0B1F3A]/10 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#071426]/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold tracking-tight text-[#0B1F3A] dark:text-white"
        >
          Artova Research
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.path ? `/${item.path}` : ""}`}
              className="text-sm font-medium text-[#0B1F3A] transition hover:text-[#D9A900] dark:text-white"
            >
              {t.navigation[item.key]}
            </Link>
          ))}

          <LanguageSwitcher />

          <ThemeToggle />

          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-[#0B1F3A] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#102d54] dark:bg-[#D9A900] dark:text-[#071426] dark:hover:bg-[#f0c21a]"
          >
            {t.navigation.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />

          <ThemeToggle />

          <button
            type="button"
            aria-label="Open navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1F3A]/15 text-[#0B1F3A] dark:border-white/15 dark:text-white"
          >
            <span className="text-lg">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}