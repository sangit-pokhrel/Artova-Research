"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale =
    pathname.split("/")[1] === "ne" ? "ne" : "en";

  const nextLocale = currentLocale === "en" ? "ne" : "en";

  const switchLanguage = () => {
    const segments = pathname.split("/");

    segments[1] = nextLocale;

    router.push(
      segments.join("/") || `/${nextLocale}`
    );
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label={`Switch to ${
        nextLocale === "en" ? "English" : "Nepali"
      }`}
      className="
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-border
        bg-surface-elevated
        text-xs font-semibold uppercase
        text-foreground
        transition-all duration-300
        hover:border-accent
        hover:bg-accent-soft
        hover:text-accent
      "
    >
      {nextLocale}
    </button>
  );
}