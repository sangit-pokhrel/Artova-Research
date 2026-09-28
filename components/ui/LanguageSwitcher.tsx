"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const currentLocale = segments[0] === "ne" ? "ne" : "en";
  const nextLocale = currentLocale === "en" ? "ne" : "en";

  segments[0] = nextLocale;

  const nextPath = `/${segments.join("/")}`;

  return (
    <Link
      href={nextPath}
      className="text-sm font-semibold text-[#0B1F3A] transition hover:text-[#D9A900] dark:text-white"
    >
      {currentLocale === "en" ? "नेपाली" : "EN"}
    </Link>
  );
}