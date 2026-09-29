import Link from "next/link";
import ResearchIcon, {
  type ResearchIconName,
} from "@/components/ui/ResearchIcon";

type ResearchCardProps = {
  icon: ResearchIconName;
  number?: string;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
};

export default function ResearchCard({
  icon,
  number,
  title,
  description,
  href,
  featured = false,
}: ResearchCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span
          className={`
            flex h-14 w-14
            items-center justify-center
            rounded-2xl
            transition-all duration-300
            ${
              featured
                ? `
                  bg-accent
                  text-primary
                  shadow-[var(--shadow-sm)]
                  group-hover:scale-105
                  group-hover:shadow-[var(--shadow-md)]
                `
                : `
                  bg-accent-soft
                  text-accent
                  group-hover:scale-105
                  group-hover:bg-accent
                  group-hover:text-primary
                `
            }
          `}
        >
          <ResearchIcon name={icon} className="h-6 w-6" />
        </span>

        {number && (
          <span
            className={`
              text-sm font-bold
              transition-colors duration-300
              ${
                featured
                  ? "text-white/35 group-hover:text-accent"
                  : "text-foreground/25 group-hover:text-accent"
              }
            `}
          >
            {number}
          </span>
        )}
      </div>

      <div className="mt-8">
        <h3
          className={`
            text-xl font-bold
            leading-tight
            sm:text-2xl
            ${featured ? "text-white" : "text-foreground"}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            mt-4 leading-7
            ${featured ? "text-white/60" : "text-muted"}
          `}
        >
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="h-px w-10 bg-accent transition-all duration-500 group-hover:w-16" />

        <span
          className={`
            flex items-center gap-2
            text-sm font-bold
            transition-all duration-300
            ${
              featured
                ? "text-white/60 group-hover:text-accent"
                : "text-muted group-hover:text-accent"
            }
          `}
        >
          Explore
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </>
  );

  const classes = `
    group relative block overflow-hidden
    rounded-3xl p-7
    transition-all duration-300
    sm:p-8
    ${
      featured
        ? `
          bg-primary
          text-white
          shadow-[var(--shadow-md)]
          hover:-translate-y-2
          hover:shadow-[var(--shadow-lg)]
        `
        : `
          border border-border
          bg-surface-elevated
          text-foreground
          shadow-[var(--shadow-sm)]
          hover:-translate-y-2
          hover:border-accent
          hover:shadow-[var(--shadow-md)]
        `
    }
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}