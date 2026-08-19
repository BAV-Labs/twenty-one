import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Realistic iPhone-style frame. Children render inside the screen. */
export function PhoneMockup({
  children,
  className,
  screenClassName,
}: {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[15.5rem] shrink-0 rounded-[2.6rem] border border-border/70 bg-foreground/90 p-[0.42rem] shadow-[var(--shadow-phone)] sm:w-[17.5rem] sm:rounded-[3rem] sm:p-[0.5rem]",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[2.25rem] bg-cream sm:rounded-[2.6rem]",
          screenClassName,
        )}
      >
        <div className="absolute left-1/2 top-2 z-20 h-[1.1rem] w-[4.6rem] -translate-x-1/2 rounded-full bg-foreground/90" />
        <div className="flex h-full flex-col px-4 pb-5 pt-8 text-foreground">{children}</div>
      </div>
    </div>
  );
}

function StatusBar({ label = "9:41" }: { label?: string }) {
  return (
    <div className="mb-3 flex items-center justify-between px-1 text-[0.55rem] font-medium text-muted-foreground">
      <span>{label}</span>
      <span className="flex items-center gap-1">
        <span className="h-1 w-3.5 rounded-[2px] border border-current" />
      </span>
    </div>
  );
}

const dayStates = [
  1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2,
] as const;

function DayDots({ upTo = 21, size = "sm" }: { upTo?: number; size?: "sm" | "md" }) {
  return (
    <div className={cn("grid grid-cols-7", size === "sm" ? "gap-1.5" : "gap-2")}>
      {dayStates.slice(0, 21).map((state, i) => (
        <span
          key={i}
          className={cn(
            "aspect-square rounded-full",
            i >= upTo || state === 2
              ? "border border-dashed border-border"
              : state === 1
                ? "bg-sage"
                : "bg-sage-soft",
          )}
        />
      ))}
    </div>
  );
}

/** Home / today screen */
export function ScreenToday() {
  return (
    <>
      <StatusBar />
      <p className="text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground">Day 19 of 21</p>
      <h3 className="mt-1.5 font-display text-[1.35rem] leading-tight">Still here.</h3>
      <p className="mt-1 text-[0.6rem] leading-relaxed text-muted-foreground">
        Two days left. What did you notice today?
      </p>

      <div className="mt-4 rounded-2xl bg-secondary/70 p-3">
        <DayDots upTo={19} />
        <div className="mt-2.5 flex items-center justify-between text-[0.5rem] text-muted-foreground">
          <span>Momentum</span>
          <span className="text-foreground">Longest cycle · 7 days</span>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between rounded-xl border border-border/70 px-3 py-2.5">
          <span className="text-[0.62rem]">Stayed with it</span>
          <span className="h-3.5 w-3.5 rounded-full bg-sage" />
        </div>
        <div className="rounded-xl border border-border/70 px-3 py-2.5">
          <p className="text-[0.55rem] text-muted-foreground">Mood</p>
          <div className="mt-1.5 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={cn("h-1 flex-1 rounded-full", n <= 4 ? "bg-sage" : "bg-border")}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto rounded-full bg-foreground py-2.5 text-center text-[0.6rem] font-medium text-background">
        Write today&rsquo;s note
      </div>
    </>
  );
}

/** Daily entry screen */
export function ScreenEntry() {
  return (
    <>
      <StatusBar />
      <p className="text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground">
        Day 12 · Tuesday
      </p>
      <h3 className="mt-1.5 font-display text-[1.2rem] leading-tight">How was today?</h3>

      <div className="mt-3 space-y-2.5">
        {[
          { label: "Energy", value: 3 },
          { label: "Sleep", value: 4 },
        ].map((row) => (
          <div key={row.label} className="rounded-xl bg-secondary/70 px-3 py-2.5">
            <div className="flex items-center justify-between text-[0.55rem] text-muted-foreground">
              <span>{row.label}</span>
              <span className="text-foreground">{row.value}/5</span>
            </div>
            <div className="mt-1.5 flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={cn(
                    "h-1 flex-1 rounded-full",
                    n <= row.value ? "bg-sage" : "bg-border",
                  )}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-xl border border-border/70 px-3 py-2.5">
          <p className="text-[0.5rem] uppercase tracking-[0.16em] text-muted-foreground">Prompt</p>
          <p className="mt-1 text-[0.62rem] leading-snug">
            What made today easier than yesterday?
          </p>
          <p className="mt-2 text-[0.6rem] leading-relaxed text-muted-foreground">
            &ldquo;A walk after dinner. I didn&rsquo;t think about it once.&rdquo;
          </p>
        </div>

        <div className="flex gap-2">
          <div className="h-12 flex-1 rounded-xl bg-beige" />
          <div className="h-12 w-12 rounded-xl border border-dashed border-border" />
        </div>
      </div>

      <div className="mt-auto rounded-full border border-border py-2.5 text-center text-[0.6rem] font-medium">
        Save entry
      </div>
    </>
  );
}

/** Mirror of Truth screen */
export function ScreenMirror() {
  return (
    <>
      <StatusBar />
      <p className="text-[0.5rem] uppercase tracking-[0.24em] text-sage">Mirror of Truth</p>
      <h3 className="mt-1.5 font-display text-[1.25rem] leading-[1.2]">
        Twenty one days, seen as a whole.
      </h3>

      <div className="mt-3 rounded-2xl bg-secondary/70 p-3">
        <DayDots />
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {[
          { k: "Wellbeing", v: "+18%" },
          { k: "Longest cycle", v: "7 days" },
          { k: "Time saved", v: "26 h" },
          { k: "Money saved", v: "€94" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-border/70 px-2.5 py-2">
            <p className="text-[0.45rem] uppercase tracking-[0.14em] text-muted-foreground">
              {s.k}
            </p>
            <p className="mt-0.5 font-display text-[0.85rem]">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-2.5 rounded-xl bg-accent/60 px-3 py-2.5">
        <p className="text-[0.45rem] uppercase tracking-[0.14em] text-muted-foreground">
          Words that returned
        </p>
        <p className="mt-1 font-display text-[0.72rem] leading-relaxed">
          calm · evening · walk · quiet · enough
        </p>
      </div>

      <div className="mt-auto text-[0.55rem] leading-relaxed text-muted-foreground">
        Day 1 &ldquo;I don&rsquo;t know what to expect.&rdquo;
      </div>
    </>
  );
}
