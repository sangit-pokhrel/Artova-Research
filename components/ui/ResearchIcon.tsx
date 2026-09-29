import type { ReactNode } from "react";

export type ResearchIconName =
    | "proposal"
    | "thesis"
    | "literature"
    | "methodology"
    | "data"
    | "writing"
    | "guidance"
    | "project"
    | "business"
    | "finance"
    | "technology"
    | "computer"
    | "education"
    | "social"
    | "health"
    | "engineering"
    | "tourism"
    | "research";

type ResearchIconProps = {
    name: ResearchIconName;
    className?: string;
};

const icons: Record<ResearchIconName, ReactNode> = {
    proposal: (
        <>
            <path d="M6 3.5h8l4 4V20H6V3.5Z" />
            <path d="M14 3.5V8h4" />
            <path d="M9 12h6M9 15.5h6" strokeLinecap="round" />
        </>
    ),

    thesis: (
        <>
            <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v18H7.5A2.5 2.5 0 0 1 5 17.5v-13Z" />
            <path d="M5 5h10M9 9h6M9 12.5h6M9 16h4" strokeLinecap="round" />
        </>
    ),

    literature: (
        <>
            <circle cx="10.5" cy="10.5" r="6" />
            <path d="m15 15 5 5" strokeLinecap="round" />
            <path d="M8.5 10.5h4" strokeLinecap="round" />
        </>
    ),

    methodology: (
        <>
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="12" cy="18" r="2" />
            <path d="M8 7.2 10.5 16M16 7.2 13.5 16M8 6h8" />
        </>
    ),

    data: (
        <>
            <path
                d="M5 19V11M10 19V7M15 19v-5M20 19V4"
                strokeLinecap="round"
            />
            <path d="M4 20h17" strokeLinecap="round" />
        </>
    ),

    writing: (
        <>
            <path d="m5 19 1.2-4.2L16.8 4.2a1.7 1.7 0 0 1 2.4 2.4L8.6 17.8 5 19Z" />
            <path d="m14.5 6.5 3 3" />
        </>
    ),

    guidance: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" />
        </>
    ),

    project: (
        <>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M8 9h8M8 13h5M8 16h8" strokeLinecap="round" />
        </>
    ),

    business: (
        <>
            <path d="M4 9h16v11H4z" />
            <path
                d="M8 9V5h8v4M9 13h6M9 16h6"
                strokeLinecap="round"
            />
        </>
    ),

    finance: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <path
                d="M12 7v10M15 9.5c-.7-.7-1.7-1-3-1-1.7 0-2.7.8-2.7 1.9 0 3 5.7 1.2 5.7 4.1 0 1.1-1 2-2.8 2-1.3 0-2.4-.4-3.2-1.2"
            />
        </>
    ),

    technology: (
        <>
            <rect x="5" y="4" width="14" height="12" rx="2" />
            <path d="m9 9 2 2-2 2M13 13h2M8 20h8" strokeLinecap="round" />
        </>
    ),

    computer: (
        <>
            <rect x="4" y="4" width="16" height="12" rx="2" />
            <path
                d="M8 20h8M12 16v4M8.5 10.5l2 2 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </>
    ),

    education: (
        <>
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path
                d="M7 11.2V16c2.7 2.5 7.3 2.5 10 0v-4.8M21 9v6"
                strokeLinecap="round"
            />
        </>
    ),

    social: (
        <>
            <circle cx="12" cy="8" r="3" />
            <circle cx="5.5" cy="10" r="2" />
            <circle cx="18.5" cy="10" r="2" />
            <path d="M6 19c.5-3 2.5-4.5 6-4.5s5.5 1.5 6 4.5M3 18c.3-2 1.3-3 3.5-3.3M21 18c-.3-2-1.3-3-3.5-3.3" />
        </>
    ),

    health: (
        <>
            <path d="M12 20s-7-4.2-7-10.2A4 4 0 0 1 12 7a4 4 0 0 1 7 2.8C19 15.8 12 20 12 20Z" />
            <path
                d="M8.5 12h2l1-2.5 1.5 5 1-2.5h1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </>
    ),

    engineering: (
        <>
            <path d="M8 6.5 10.5 4l3 3-2.5 2.5M16 17.5 13.5 20l-3-3 2.5-2.5" />
            <path d="m9 15 6-6" strokeLinecap="round" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="6" r="2" />
        </>
    ),

    tourism: (
        <>
            <path d="M4 14h16M6 14l2-7h8l2 7M8 14v4M16 14v4" />
            <path d="M9 7V4h6v3" strokeLinecap="round" />
        </>
    ),

    research: (
        <>
            <circle cx="10.5" cy="10.5" r="6" />
            <path d="m15 15 5 5" strokeLinecap="round" />
            <path d="M10.5 8v5M8 10.5h5" strokeLinecap="round" />
        </>
    ),
};

export default function ResearchIcon({
    name,
    className = "h-6 w-6",
}: ResearchIconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {icons[name]}
        </svg>
    );
}