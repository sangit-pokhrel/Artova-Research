"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE =
  "Hello Artova Research, I would like to know more about your research support.";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
      )}`
    : "#";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-primary hover:text-white hover:shadow-[var(--shadow-md)] ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            d="M12 19V5"
            strokeLinecap="round"
          />
          <path
            d="m6.5 11 5.5-6 5.5 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target={WHATSAPP_NUMBER ? "_blank" : undefined}
        rel={WHATSAPP_NUMBER ? "noopener noreferrer" : undefined}
        aria-label="Chat with us on WhatsApp"
        onClick={(event) => {
          if (!WHATSAPP_NUMBER) {
            event.preventDefault();
          }
        }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5b] hover:shadow-[0_14px_38px_rgba(37,211,102,0.42)] active:scale-95"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[-5deg]"
        >
          <path
            d="M20.5 11.5a8.5 8.5 0 0 1-12.8 7.3L4 20l1.2-3.6A8.5 8.5 0 1 1 20.5 11.5Z"
            fill="currentColor"
          />

          <path
            d="M9.2 8.3c.2-.2.5-.2.7 0l1 1.3c.2.2.2.5 0 .7l-.6.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.6c.2-.2.5-.2.7 0l1.3 1c.2.2.2.5 0 .7l-.5.5c-.5.5-1.2.7-1.8.5-2.7-.8-4.8-2.9-5.6-5.6-.2-.7 0-1.4.5-1.9l.9-.9Z"
            fill="white"
          />
        </svg>

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}