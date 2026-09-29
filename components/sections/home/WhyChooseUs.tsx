import Image from "next/image";

import ResearchIcon from "@/components/ui/ResearchIcon";
import ResearchIconContainer from "@/components/ui/ResearchIconContainer";
import type { ResearchIconName } from "@/components/ui/ResearchIcon";
import type { Locale } from "@/lib/i18n/config";
import { images } from "@/lib/images";

const content: Record<
    Locale,
    {
        eyebrow: string;
        title: string;
        description: string;
        features: {
            number: string;
            title: string;
            description: string;
            icon: ResearchIconName;
            image: string;
        }[];
    }
> = {
    en: {
        eyebrow: "WHY CHOOSE US",
        title: "Research support that keeps your work moving.",
        description:
            "We focus on making complex academic work more structured, understandable, and manageable.",

        features: [
            {
                number: "01",
                title: "Clear Guidance",
                description:
                    "Understand what needs to be done and how to approach each stage of your research.",
                icon: "guidance",
                image: images.whyChooseUs.clearGuidance,
            },
            {
                number: "02",
                title: "Research Focus",
                description:
                    "Keep your academic work aligned with your research objectives and requirements.",
                icon: "research",
                image: images.whyChooseUs.researchFocus,
            },
            {
                number: "03",
                title: "Structured Process",
                description:
                    "Work through your research in clear and manageable stages.",
                icon: "project",
                image: images.whyChooseUs.structuredProcess,
            },
            {
                number: "04",
                title: "Academic Quality",
                description:
                    "Present your research work in a clear, organized, and academically appropriate way.",
                icon: "writing",
                image: images.whyChooseUs.academicQuality,
            },
        ],
    },

    ne: {
        eyebrow: "किन हामीलाई रोज्ने?",
        title: "तपाईंको अनुसन्धानलाई अगाडि बढाउने सहयोग।",
        description:
            "जटिल शैक्षिक कार्यलाई थप व्यवस्थित, बुझ्न सजिलो र व्यवस्थापन गर्न सहज बनाउन हामी केन्द्रित छौँ।",

        features: [
            {
                number: "०१",
                title: "स्पष्ट मार्गदर्शन",
                description:
                    "अनुसन्धानको प्रत्येक चरणमा के गर्नुपर्छ र कसरी अगाडि बढ्ने भन्ने स्पष्ट रूपमा बुझ्नुहोस्।",
                icon: "guidance",
                image: images.whyChooseUs.clearGuidance,
            },
            {
                number: "०२",
                title: "अनुसन्धानमा केन्द्रित",
                description:
                    "आफ्नो शैक्षिक कार्यलाई अनुसन्धानका उद्देश्य र आवश्यकतासँग जोडेर अगाडि बढाउनुहोस्।",
                icon: "research",
                image: images.whyChooseUs.researchFocus,
            },
            {
                number: "०३",
                title: "व्यवस्थित प्रक्रिया",
                description:
                    "अनुसन्धानलाई स्पष्ट र व्यवस्थापन गर्न सकिने चरणहरूमा अगाडि बढाउनुहोस्।",
                icon: "project",
                image: images.whyChooseUs.structuredProcess,
            },
            {
                number: "०४",
                title: "शैक्षिक गुणस्तर",
                description:
                    "आफ्नो अनुसन्धान कार्यलाई स्पष्ट, व्यवस्थित र शैक्षिक रूपमा उपयुक्त तरिकाले प्रस्तुत गर्नुहोस्।",
                icon: "writing",
                image: images.whyChooseUs.academicQuality,
            },
        ],
    },
};

export default function WhyChooseUs({ locale }: { locale: Locale }) {
    const t = content[locale];

    return (
        <section className="relative -mt-2 overflow-hidden bg-surface text-foreground transition-colors duration-300">
            {/* Decorative glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-20
                    h-96
                    w-96
                    rounded-full
                    bg-accent-soft
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    bottom-0
                    h-80
                    w-80
                    rounded-full
                    bg-accent-soft
                    blur-3xl
                    opacity-60
                "
            />

            <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-8">
                {/* SECTION HEADER */}
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-accent" />

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                            {t.eyebrow}
                        </p>
                    </div>

                    <h2
                        className="
                            mt-4
                            max-w-4xl
                            font-[var(--font-jakarta)]
                            text-4xl
                            font-extrabold
                            leading-[1.08]
                            tracking-tight
                            text-foreground
                            sm:text-5xl
                            lg:text-[3.7rem]
                        "
                    >
                        {t.title}
                    </h2>

                    <p
                        className="
                            mt-4
                            max-w-3xl
                            text-base
                            leading-8
                            text-muted
                            sm:text-lg
                        "
                    >
                        {t.description}
                    </p>
                </div>

                {/* FEATURE CARDS */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {t.features.map((feature) => (
                        <article
                            key={feature.number}
                            className="
                                group
                                relative
                                min-h-[360px]
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-border
                                bg-surface-elevated
                                shadow-sm
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-accent/30
                                hover:shadow-[var(--shadow-lg)]
                            "
                        >
                            {/* IMAGE */}
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt=""
                                    fill
                                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                                    className="
                                        object-cover
                                        brightness-105
                                        contrast-105
                                        saturate-[0.9]
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                {/* Soft white/lavender readability layer */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-surface-elevated/95
                                        via-surface-elevated/35
                                        to-transparent
                                    "
                                />

                                {/* Purple image tint */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        from-accent/5
                                        via-transparent
                                        to-primary/5
                                        opacity-40
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-90
                                    "
                                />
                            </div>

                            {/* CARD CONTENT */}
                            <div className="relative z-10 flex min-h-[360px] flex-col p-6 sm:p-7">
                                {/* Top row */}
                                <div className="flex items-start justify-between">
                                    <ResearchIconContainer variant="card">
    <ResearchIcon name={feature.icon} />
</ResearchIconContainer>
                                </div>

                                {/* Content */}
                                <div className="mt-auto pt-24">
                                    <h3
                                        className="
                                            font-[var(--font-jakarta)]
                                            text-xl
                                            font-bold
                                            leading-tight
                                            text-foreground
                                        "
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-7
                                            text-foreground/70
                                        "
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Bottom accent */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <span
                                            className="
                                                h-0.5
                                                w-12
                                                rounded-full
                                                bg-accent
                                                transition-all
                                                duration-500
                                                group-hover:w-20
                                            "
                                        />

                                        <span
                                            aria-hidden="true"
                                            className="
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-border
                                                bg-surface-elevated/70
                                                text-sm
                                                text-muted
                                                backdrop-blur-sm
                                                transition-all
                                                duration-500
                                                group-hover:border-accent
                                                group-hover:bg-accent
                                                group-hover:text-white
                                            "
                                        >
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}