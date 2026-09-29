import Link from "next/link";
import type {
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-full
    px-7
    py-3.5
    text-sm
    font-bold
    !text-white
    transition-all
    duration-300
    active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-[#7B2CBF]
      via-[#B100E8]
      to-[#D100D1]
      !text-white
      shadow-[0_10px_30px_rgba(177,0,232,0.32)]
      hover:-translate-y-1
      hover:from-[#8B2FC9]
      hover:via-[#D100D1]
      hover:to-[#FF20E8]
      hover:shadow-[0_14px_40px_rgba(209,0,209,0.45)]
    `,

    secondary: `
      border
      border-[#B100E8]
      bg-white
      !text-[#7B2CBF]
      shadow-[0_6px_20px_rgba(177,0,232,0.12)]
      hover:-translate-y-1
      hover:border-[#D100D1]
      hover:!text-[#B100E8]
      hover:shadow-[0_10px_30px_rgba(177,0,232,0.22)]
    `,

    dark: `
      bg-gradient-to-r
      from-[#5A189A]
      via-[#7B2CBF]
      to-[#8B2FC9]
      !text-white
      shadow-[0_10px_30px_rgba(90,24,154,0.32)]
      hover:-translate-y-1
      hover:from-[#7B2CBF]
      hover:via-[#B100E8]
      hover:to-[#D100D1]
      hover:shadow-[0_14px_40px_rgba(209,0,209,0.45)]
    `,
  };

  const classes = `
    ${base}
    ${variants[variant]}
    ${className}
  `;

  const content = (
    <>
      {/* Shine effect */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-[80%]
          w-[45%]
          -skew-x-[25deg]
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
          opacity-0
          transition-all
          duration-700
          ease-out
          group-hover:left-[130%]
          group-hover:opacity-100
        "
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-3 !text-white">
        <span className="!text-white">
          {children}
        </span>

        <span
          aria-hidden="true"
          className="
            !text-white
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
      className={classes}
    >
      {content}
    </button>
  );
}