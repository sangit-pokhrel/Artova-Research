import type { ReactNode } from "react";

type ResearchIconContainerProps = {
    children: ReactNode;
    variant?: "default" | "card";
    className?: string;
};

export default function ResearchIconContainer({
    children,
    variant = "default",
    className = "",
}: ResearchIconContainerProps) {
    const variants = {
        /*
         * SERVICES PREVIEW
         * Existing behavior remains unchanged.
         */
        default: `
            border-purple-bright/40
            bg-gradient-to-br
            from-purple-interactive/15
            to-purple-bright/10
            text-purple-bright
            shadow-[0_0_18px_rgba(177,0,232,0.18)]

            transition-all
            duration-300

            group-hover:-translate-y-1
            group-hover:border-purple-electric
            group-hover:from-purple-bright
            group-hover:to-purple-electric
            group-hover:text-white
            group-hover:shadow-[var(--glow-bright)]

            dark:border-purple-bright/50
            dark:from-purple-interactive/20
            dark:to-purple-bright/15
            dark:text-[#E879F9]
            dark:shadow-[0_0_22px_rgba(177,0,232,0.28)]

            dark:group-hover:border-purple-electric
            dark:group-hover:from-purple-bright
            dark:group-hover:to-purple-electric
            dark:group-hover:text-white
            dark:group-hover:shadow-[0_0_32px_rgba(209,0,209,0.5)]
        `,

        /*
         * WHY CHOOSE US + HOW IT WORKS
         *
         * Static appearance can be different,
         * but the HOVER state is EXACTLY the same
         * as ServicesPreview.
         */
        card: `
    border-[#B100E8]/70
    bg-gradient-to-br
    from-[#8B2FC9]
    via-[#B100E8]
    to-[#B100E8]
    text-white
    shadow-[0_6px_20px_rgba(177,0,232,0.26)]

    transition-all
    duration-300

    /* EXACT SAME HOVER AS SERVICES PREVIEW */
    group-hover:-translate-y-1
    group-hover:border-purple-electric
    group-hover:from-purple-bright
    group-hover:to-purple-electric
    group-hover:text-white
    group-hover:shadow-[var(--glow-bright)]

    dark:border-purple-bright/60
    dark:from-purple-deep
    dark:via-purple-interactive
    dark:to-purple-interactive
    dark:text-white
    dark:shadow-[0_0_25px_rgba(177,0,232,0.32)]

    dark:group-hover:border-purple-electric
    dark:group-hover:from-purple-bright
    dark:group-hover:to-purple-electric
    dark:group-hover:text-white
    dark:group-hover:shadow-[0_0_32px_rgba(209,0,209,0.5)]
`,
    };

    return (
        <div
            className={`
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                ${variants[variant]}
                ${className}
            `}
        >
            <span
                className="
                    relative
                    z-10
                    text-white
                    [&_svg]:h-5
                    [&_svg]:w-5
                    [&_svg]:stroke-current
                "
            >
                {children}
            </span>
        </div>
    );
}