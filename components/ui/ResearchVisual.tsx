export default function ResearchVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Ambient glow */}
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent-soft blur-3xl" />

      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-soft blur-3xl" />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-[2rem] opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main visual */}
      <div
        className="
          absolute inset-8
          rounded-[2rem]
          border border-border
          bg-surface-elevated/80
          shadow-[var(--shadow-lg)]
          backdrop-blur-sm
          transition-colors duration-300
        "
      >
        {/* Top label */}
        <div className="absolute left-7 top-7 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            Research Framework
          </span>
        </div>

        {/* Central node */}
        <div
          className="
            absolute left-1/2 top-1/2
            flex h-28 w-28
            -translate-x-1/2 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-accent/30
            bg-primary
            shadow-[var(--shadow-lg)]
          "
        >
          <div className="text-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto h-7 w-7 text-accent"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" strokeLinecap="round" />
            </svg>

            <span className="mt-2 block text-[9px] font-bold uppercase tracking-wider text-white">
              Research
            </span>
          </div>
        </div>

        {/* Connecting lines */}
        <div className="absolute left-1/2 top-[29%] h-[21%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/60 to-accent" />

        <div className="absolute bottom-[29%] left-1/2 h-[21%] w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent/60 to-transparent" />

        <div className="absolute left-[29%] top-1/2 h-px w-[21%] -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/60 to-accent" />

        <div className="absolute right-[29%] top-1/2 h-px w-[21%] -translate-y-1/2 bg-gradient-to-l from-transparent via-accent/60 to-accent" />

        {/* Research Question */}
        <div
          className="
            absolute left-5 top-20
            rounded-2xl
            border border-border
            bg-surface-elevated
            px-4 py-3
            shadow-[var(--shadow-sm)]
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
              ?
            </span>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-accent">
                Step 01
              </p>

              <p className="mt-0.5 text-xs font-bold text-foreground">
                Research Question
              </p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div
          className="
            absolute right-5 top-20
            rounded-2xl
            border border-border
            bg-surface-elevated
            px-4 py-3
            shadow-[var(--shadow-sm)]
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M5 19V9M12 19V5M19 19v-7" strokeLinecap="round" />
              </svg>
            </span>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-accent">
                Step 02
              </p>

              <p className="mt-0.5 text-xs font-bold text-foreground">
                Methodology
              </p>
            </div>
          </div>
        </div>

        {/* Data */}
        <div
          className="
            absolute bottom-20 left-5
            rounded-2xl
            border border-border
            bg-surface-elevated
            px-4 py-3
            shadow-[var(--shadow-sm)]
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M5 19V10M10 19V6M15 19v-9M20 19V4" strokeLinecap="round" />
              </svg>
            </span>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-accent">
                Step 03
              </p>

              <p className="mt-0.5 text-xs font-bold text-foreground">
                Data
              </p>
            </div>
          </div>
        </div>

        {/* Findings */}
        <div
          className="
            absolute bottom-20 right-5
            rounded-2xl
            border border-border
            bg-surface-elevated
            px-4 py-3
            shadow-[var(--shadow-sm)]
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d="M5 17 9 13l3 2 6-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 8h3v3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-accent">
                Step 04
              </p>

              <p className="mt-0.5 text-xs font-bold text-foreground">
                Findings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative purple rings */}
      <div className="absolute -right-2 top-10 h-16 w-16 rounded-full border border-accent/30" />

      <div className="absolute -right-6 top-4 h-24 w-24 rounded-full border border-accent/10" />

      <div className="absolute -bottom-2 left-5 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(139,44,245,0.5)]" />
    </div>
  );
}