import type { Locale } from "@/lib/i18n/config";

type HeroFeatureCard = {
    number: string;
    title: string;
    text: string;
    position: "left" | "center" | "right";
};

type HeroFeatureCardsAltProps = {
    locale: Locale;
    cards: HeroFeatureCard[];
};

export default function HeroFeatureCardsAlt({
    locale,
    cards,
}: HeroFeatureCardsAltProps) {
    const isNepali = locale === "ne";

    return (
        <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-6 pb-16 sm:px-8 lg:px-10">
            <div className="grid gap-5 md:grid-cols-3">
                {cards.map((card) => (
                    <article
                        key={card.number}
                        className="
                            group
                            relative
                            min-h-[290px]
                            overflow-hidden
                            rounded-[1.75rem]
                            border
                            border-border
                            bg-surface-elevated
                            px-7
                            py-7
                            text-foreground
                            shadow-[var(--shadow-md)]
                            transition-all
                            duration-500
                            hover:-translate-y-2
                            hover:border-accent/40
                            hover:shadow-[var(--shadow-lg)]
                            dark:bg-surface
                        "
                    >
                        {/* Large decorative number */}
                        <span
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                -right-4
                                -top-8
                                select-none
                                font-[var(--font-jakarta)]
                                text-[9rem]
                                font-extrabold
                                leading-none
                                text-accent/10
                                transition-all
                                duration-500
                                group-hover:scale-105
                                group-hover:text-accent/15
                            "
                        >
                            {card.number}
                        </span>

                        {/* Top row */}
                        <div className="relative z-10 flex items-center gap-4">
                            <span
                                className="
                                    flex
                                    h-8
                                    min-w-8
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-accent-soft
                                    px-2
                                    text-xs
                                    font-extrabold
                                    text-accent
                                    transition-all
                                    duration-300
                                    group-hover:bg-accent
                                    group-hover:text-white
                                "
                            >
                                {card.number}
                            </span>

                            <span
                                className="
                                    h-px
                                    w-16
                                    bg-accent/40
                                    transition-all
                                    duration-500
                                    group-hover:w-24
                                    group-hover:bg-accent
                                "
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mt-8 max-w-[58%]">
                            <h2
                                className="
                                    font-[var(--font-jakarta)]
                                    text-xl
                                    font-extrabold
                                    leading-[1.15]
                                    tracking-tight
                                    text-foreground
                                    sm:text-[1.35rem]
                                "
                            >
                                {card.title}
                            </h2>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-7
                                    text-muted
                                "
                            >
                                {card.text}
                            </p>
                        </div>

                        {/* Illustration */}
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                bottom-5
                                right-0
                                h-[72%]
                                w-[50%]
                                overflow-hidden
                            "
                        >
                            <div
                                className={`
                                    absolute
                                    inset-0
                                    bg-[url('/images/hero/hero-feature-illustrations.png')]
                                    bg-no-repeat
                                    bg-[length:300%_auto]
                                    opacity-95
                                    transition-all
                                    duration-500
                                    group-hover:scale-105
                                    group-hover:opacity-100
                                    ${
                                        card.position === "left"
                                            ? "bg-[position:0%_50%]"
                                            : card.position === "center"
                                              ? "bg-[position:50%_50%]"
                                              : "bg-[position:100%_50%]"
                                    }
                                `}
                            />
                        </div>

                        {/* Bottom accent */}
                        <div
                            className="
                                absolute
                                bottom-7
                                left-7
                                z-10
                            "
                        >
                            <span
                                className="
                                    block
                                    h-0.5
                                    w-12
                                    bg-accent
                                    transition-all
                                    duration-500
                                    group-hover:w-20
                                "
                            />
                        </div>

                        {/* Hover glow */}
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                -bottom-20
                                -right-20
                                h-48
                                w-48
                                rounded-full
                                bg-accent-soft
                                opacity-0
                                blur-3xl
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                            "
                        />
                    </article>
                ))}
            </div>
        </div>
    );
}