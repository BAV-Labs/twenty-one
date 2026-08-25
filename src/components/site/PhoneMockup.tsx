import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneMockup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-[16rem] shrink-0 rounded-[2.6rem] border border-border/70 bg-foreground/90 p-[0.42rem] shadow-[var(--shadow-phone)] sm:w-[18.5rem] sm:rounded-[3rem] sm:p-[0.5rem]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.25rem] bg-cream sm:rounded-[2.6rem]">
        {children}
      </div>
    </div>
  );
}