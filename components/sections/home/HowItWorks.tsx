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
        steps: {
            number: string;
            title: string;
            description: string;
            icon: ResearchIconName;
            image: string;
        }[];
        statement: string;
        flow: string;
    }
> = {
    en: {
        eyebrow: "HOW IT WORKS",
        title: "A simple process from idea to outcome.",
        description:
            "A clear and structured approach keeps your research moving forward at every stage.",

        steps: [
            {
                number: "01",
                title: "Share Your Requirements",
                description:
                    "Tell us about your academic project, research topic, requirements, and current stage.",
                icon: "guidance",
                image: images.howItWorks.shareYourRequirements,
            },
            {
                number: "02",
                title: "Plan the Research",
                description:
                    "We identify the requirements and establish a clear direction for the work.",
                icon: "project",
                image: images.howItWorks.planTheResearch,
            },
            {
                number: "03",
                title: "Work Through the Research",
                description:
                    "Get structured guidance and support through the relevant research stages.",
                icon: "research",
                image: images.howItWorks.workThroughResearch,
            },
            {
                number: "04",
                title: "Review & Refine",
                description:
                    "Review the work, address requirements, and refine the final academic output.",
                icon: "writing",
                image: images.howItWorks.reviewAndRefine,
            },
        ],

        statement:
            "A structured process helps keep your research focused, organized, and moving forward.",

        flow: "Idea → Research → Outcome",
    },

    ne: {
        eyebrow: "कसरी काम गर्छ?",
        title: "विचारदेखि परिणामसम्मको सरल प्रक्रिया।",
        description:
            "स्पष्ट तथा व्यवस्थित प्रक्रियाले तपाईंको अनुसन्धानलाई प्रत्येक चरणमा अगाडि बढाउन सहयोग गर्छ।",

        steps: [
            {
                number: "०१",
                title: "आफ्नो आवश्यकता बताउनुहोस्",
                description:
                    "आफ्नो शैक्षिक परियोजना, अनुसन्धान विषय, आवश्यकताहरू तथा हालको चरणबारे जानकारी दिनुहोस्।",
                icon: "guidance",
                image: images.howItWorks.shareYourRequirements,
            },
            {
                number: "०२",
                title: "अनुसन्धान योजना बनाउनुहोस्",
                description:
                    "आवश्यकताहरू पहिचान गरी अनुसन्धान कार्यका लागि स्पष्ट दिशा निर्धारण गरिन्छ।",
                icon: "project",
                image: images.howItWorks.planTheResearch,
            },
            {
                number: "०३",
                title: "अनुसन्धानमा अगाडि बढ्नुहोस्",
                description:
                    "अनुसन्धानका सम्बन्धित चरणहरूमा व्यवस्थित मार्गदर्शन तथा सहयोग प्राप्त गर्नुहोस्।",
                icon: "research",
                image: images.howItWorks.workThroughResearch,
            },
            {
                number: "०४",
                title: "समीक्षा तथा सुधार",
                description:
                    "कार्यको समीक्षा गरी आवश्यकताहरू सम्बोधन गर्नुहोस् र अन्तिम शैक्षिक कार्यलाई परिष्कृत गर्नुहोस्।",
                icon: "writing",
                image: images.howItWorks.reviewAndRefine,
            },
        ],

        statement:
            "व्यवस्थित प्रक्रियाले तपाईंको अनुसन्धानलाई केन्द्रित, संगठित तथा निरन्तर अगाडि बढाउन सहयोग गर्छ।",

        flow: "विचार → अनुसन्धान → परिणाम",
    },
};

export default function HowItWorks({
    locale,
}: {
    locale: Locale;
}) {
    const t = content[locale];

    return (
        <section className="relative -mt-2 overflow-hidden bg-surface text-foreground transition-colors duration-300">
            {/* Decorative glow */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
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
                    -right-40
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-accent-soft
                    blur-3xl
                "
            />

            <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-8">
                {/* Section Heading */}
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-accent" />

                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                                {t.eyebrow}
                            </p>
                        </div>

                        <h2 className="mt-5 max-w-xl font-[var(--font-jakarta)] text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                            {t.title}
                        </h2>
                    </div>

                    <p className="max-w-2xl text-base leading-8 text-muted lg:justify-self-end lg:text-lg">
                        {t.description}
                    </p>
                </div>

                {/* Process Cards */}
                <div className="relative mt-10">
                    {/* Desktop connecting line */}
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            left-[12%]
                            right-[12%]
                            top-1/2
                            hidden
                            h-px
                            bg-border
                            lg:block
                        "
                    />

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {t.steps.map((step) => (
                            <article
                                key={step.number}
                                className="
                                    group
                                    relative
                                    min-h-[360px]
                                    overflow-hidden
                                    rounded-[1.75rem]
                                    border border-border
                                    bg-surface-elevated
                                    shadow-[var(--shadow-sm)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-accent/50
                                    hover:shadow-[var(--shadow-md)]
                                "
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={step.image}
                                        alt=""
                                        fill
                                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                                        className="
                                            object-cover
                                            object-center
                                            brightness-105
                                            contrast-105
                                            transition-transform
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />
                                </div>

                                {/* Readability Gradient */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-surface-elevated
                                        via-surface-elevated/45
                                        to-surface-elevated/5
                                    "
                                />

                                {/* Subtle Purple Tint */}
                                <div
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        from-accent/5
                                        via-transparent
                                        to-primary/5
                                        opacity-50
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-80
                                    "
                                />

                                {/* Large Background Number */}
                                <span
                                    aria-hidden="true"
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-3
                                        -top-8
                                        select-none
                                        text-[9rem]
                                        font-extrabold
                                        leading-none
                                        text-accent/[0.045]
                                        transition-all
                                        duration-500
                                        group-hover:scale-105
                                        group-hover:text-accent/[0.07]
                                    "
                                >
                                    {step.number}
                                </span>

                                {/* Card Content */}
                                <div className="relative z-10 flex min-h-[360px] flex-col p-6 sm:p-7">
                                    {/* Top Row */}
                                    <div className="flex items-center justify-between">
                                        {/* Number */}
                                        <span
                                            className="
                                                rounded-full
                                                border border-accent/20
                                                bg-surface-elevated/75
                                                px-3
                                                py-1
                                                text-sm
                                                font-bold
                                                text-accent
                                                shadow-sm
                                                backdrop-blur-sm
                                            "
                                        >
                                            {step.number}
                                        </span>

                                        {/* Arrow */}
                                        <span
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                border border-border
                                                bg-surface-elevated/70
                                                text-sm
                                                text-muted
                                                shadow-sm
                                                backdrop-blur-sm
                                                transition-all
                                                duration-300
                                                group-hover:border-accent
                                                group-hover:bg-accent
                                                group-hover:text-primary
                                            "
                                        >
                                            →
                                        </span>
                                    </div>

                                    {/* Fixed Content Area */}
                                    <div className="mt-auto pt-20">
                                        {/* Centralized Icon */}
                                        <ResearchIconContainer variant="card">
    <ResearchIcon name={step.icon} />
</ResearchIconContainer>

                                        {/* Title */}
                                        <h3
                                            className="
                                                mt-5
                                                min-h-[3.5rem]
                                                max-w-[95%]
                                                font-[var(--font-jakarta)]
                                                text-xl
                                                font-bold
                                                leading-snug
                                                text-foreground
                                            "
                                        >
                                            {step.title === "Plan the Research" ? (
                                                <>
                                                    Plan the
                                                    <br />
                                                    Research
                                                </>
                                            ) : step.title === "Review & Refine" ? (
                                                <>
                                                    Review &
                                                    <br />
                                                    Refine
                                                </>
                                            ) : (
                                                step.title
                                            )}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="
                                                mt-3
                                                min-h-[4.5rem]
                                                max-w-[95%]
                                                text-sm
                                                leading-6
                                                text-foreground/75
                                            "
                                        >
                                            {step.description}
                                        </p>

                                        {/* Bottom Accent */}
                                        <div className="mt-5">
                                            <span
                                                className="
                                                    block
                                                    h-px
                                                    w-10
                                                    bg-accent
                                                    transition-all
                                                    duration-500
                                                    group-hover:w-20
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Bottom Statement */}
                <div className="mt-10 border-t border-border pt-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-sm leading-6 text-muted">
                            {t.statement}
                        </p>

                        <span className="text-sm font-bold tracking-wide text-accent">
                            {t.flow}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}