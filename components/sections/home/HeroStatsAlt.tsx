"use client";

import { useEffect, useRef, useState } from "react";

type HeroStatsAltProps = {
    locale: "en" | "ne";
};

type Stat = {
    value: number;
    suffix: string;
    label: string;
    icon: string;
};

function AnimatedNumber({
    value,
    suffix,
    start,
}: {
    value: number;
    suffix: string;
    start: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        const duration = 1800;
        const startTime = performance.now();

        let animationFrame: number;

        const animate = (currentTime: number) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.round(value * easedProgress));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [start, value]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
}

export default function HeroStatsAlt({
    locale,
}: HeroStatsAltProps) {
    const isNepali = locale === "ne";

    const sectionRef = useRef<HTMLDivElement>(null);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const element = sectionRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const trustItems = [
        {
            icon: "✓",
            title: isNepali ? "Research Focused" : "Research Focused",
        },
        {
            icon: "◷",
            title: isNepali ? "Timely Support" : "Timely Support",
        },
        {
            icon: "✦",
            title: isNepali ? "Expert Guidance" : "Expert Guidance",
        },
        {
            icon: "★",
            title: isNepali ? "Quality Support" : "Quality Support",
        },
    ];

    const stats: Stat[] = [
        {
            value: 500,
            suffix: "+",
            label: "Projects Completed",
            icon: "▣",
        },
        {
            value: 98,
            suffix: "%",
            label: "Success Rate",
            icon: "◔",
        },
        {
            value: 50,
            suffix: "+",
            label: "Subject Experts",
            icon: "♙",
        },
        {
            value: 7,
            suffix: "+",
            label: "Years Experience",
            icon: "▦",
        },
        {
            value: 24,
            suffix: "/7",
            label: "Expert Support",
            icon: "◉",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative z-20 -mt-14 w-full pb-14"
        >
            <div
                className="
                    relative mx-auto max-w-7xl overflow-hidden
                    rounded-[1.75rem]
                    border border-purple-bright/30
                    bg-[#17033F]
                    shadow-[0_25px_70px_rgba(90,24,154,0.32)]
                "
            >
                {/* Background */}
                <div
                    aria-hidden="true"
                    className="
                        absolute inset-0
                        bg-gradient-to-br
                        from-[#18033F]
                        via-[#2B075F]
                        to-[#4B0C91]
                    "
                />

                {/* Purple glow */}
                <div
                    aria-hidden="true"
                    className="
                        absolute -left-24 -top-32
                        h-72 w-72
                        rounded-full
                        bg-[#B100E8]/20
                        blur-[100px]
                    "
                />

                <div
                    aria-hidden="true"
                    className="
                        absolute -bottom-36 -right-20
                        h-80 w-80
                        rounded-full
                        bg-[#D100D1]/20
                        blur-[110px]
                    "
                />

                {/* Subtle grid */}
                <div
                    aria-hidden="true"
                    className="
                        absolute inset-0 opacity-[0.035]
                        [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
                        [background-size:40px_40px]
                    "
                />

                <div className="relative z-10">
                    {/* TRUST BADGES */}
                    <div
                        className="
                            flex flex-wrap items-center justify-center
                            gap-3 px-6 py-6
                            sm:px-8
                        "
                    >
                        {trustItems.map((item) => (
                            <div
                                key={item.title}
                                className="
                                    inline-flex items-center gap-2.5
                                    rounded-full
                                    border border-white/15
                                    bg-white/[0.07]
                                    px-4 py-2.5
                                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                                    backdrop-blur-md
                                "
                            >
                                <span
                                    className="
                                        flex h-6 w-6 items-center
                                        justify-center rounded-full
                                        bg-gradient-to-br
                                        from-[#8B2FC9]
                                        via-[#B100E8]
                                        to-[#D100D1]
                                        text-xs font-bold text-white
                                        shadow-[0_0_14px_rgba(177,0,232,0.4)]
                                    "
                                >
                                    {item.icon}
                                </span>

                                <span
                                    className="
                                        text-xs font-semibold
                                        text-white/80
                                        sm:text-sm
                                    "
                                >
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        className="
                            mx-6 h-px
                            bg-gradient-to-r
                            from-transparent
                            via-purple-bright/30
                            to-transparent
                            sm:mx-10
                        "
                    />

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-5">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`
                                    relative
                                    flex min-h-[150px]
                                    flex-col items-center justify-center
                                    px-4 py-7
                                    text-center
                                    ${
                                        index === 4
                                            ? "col-span-2 md:col-span-1"
                                            : ""
                                    }
                                `}
                            >
                                {/* Separator */}
                                {index > 0 && (
                                    <div
                                        aria-hidden="true"
                                        className="
                                            absolute left-0 top-1/2
                                            hidden h-14 w-px
                                            -translate-y-1/2
                                            bg-gradient-to-b
                                            from-transparent
                                            via-white/15
                                            to-transparent
                                            md:block
                                        "
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className="
                                        mb-3 flex h-9 w-9
                                        items-center justify-center
                                        rounded-xl
                                        border border-purple-bright/30
                                        bg-purple-bright/10
                                        text-base
                                        text-[#D100D1]
                                        shadow-[0_0_18px_rgba(177,0,232,0.15)]
                                    "
                                >
                                    {stat.icon}
                                </div>

                                {/* Animated number */}
                                <div
                                    className="
                                        font-[var(--font-jakarta)]
                                        text-4xl font-extrabold
                                        leading-none
                                        tracking-tight
                                        text-white
                                        sm:text-[2.7rem]
                                    "
                                >
                                    <AnimatedNumber
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        start={startAnimation}
                                    />
                                </div>

                                {/* Label */}
                                <div
                                    className="
                                        mt-2
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.12em]
                                        text-white/45
                                        sm:text-xs
                                    "
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom accent */}
                    <div
                        className="
                            h-[3px]
                            bg-gradient-to-r
                            from-[#5A189A]
                            via-[#B100E8]
                            to-[#D100D1]
                        "
                    />
                </div>
            </div>
        </section>
    );
}