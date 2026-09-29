"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-border
        bg-surface-elevated
        text-foreground
        transition-all duration-300
        hover:border-accent
        hover:bg-accent-soft
        hover:text-accent
      "
    >
      {isDark ? (
        /* Moon */
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        /* Sun */
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="4" />

          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}