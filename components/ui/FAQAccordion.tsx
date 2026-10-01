"use client";

import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

type FAQAccordionProps = {
  items: readonly FAQItem[];
};

export default function FAQAccordion({
  items,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`
              group relative overflow-hidden rounded-2xl border
              bg-background
              transition-all duration-300 ease-out
              ${
                isOpen
                  ? "border-purple-bright/50 shadow-[0_18px_45px_rgba(123,44,191,0.12)]"
                  : "border-border hover:-translate-y-1 hover:border-purple-bright/30 hover:shadow-[0_14px_35px_rgba(123,44,191,0.08)]"
              }
            `}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              className="
                flex w-full items-center justify-between gap-6
                px-6 py-5 text-left
                sm:px-7 sm:py-6
              "
            >
              <span
                className={`
                  text-base font-semibold leading-7
                  transition-colors duration-300
                  sm:text-lg
                  ${
                    isOpen
                      ? "text-purple-brand dark:text-purple-bright"
                      : "text-foreground"
                  }
                `}
              >
                {item.question}
              </span>

              {/* Dropdown icon */}
              <span
                className={`
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full
                  transition-all duration-300
                  ${
                    isOpen
                      ? "bg-gradient-to-br from-purple-brand to-purple-bright text-white"
                      : "bg-purple-brand/10 text-purple-brand dark:bg-purple-bright/10 dark:text-purple-bright"
                  }
                `}
              >
                <ChevronDown
                  className={`
                    h-5 w-5
                    transition-transform duration-300
                    ${isOpen ? "rotate-180" : "rotate-0"}
                  `}
                />
              </span>
            </button>

            {/* Answer */}
            <div
              className={`
                grid transition-all duration-300 ease-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border px-6 pb-6 pt-5 sm:px-7">
                  <p className="text-sm leading-7 text-foreground/75 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}