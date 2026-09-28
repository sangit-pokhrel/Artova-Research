"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="h-10 w-10 rounded-full border border-[#0B1F3A]/15"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B1F3A]/15 text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-white dark:hover:text-[#0B1F3A]"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}