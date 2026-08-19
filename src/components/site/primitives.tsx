import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)}>{children}</div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-24 sm:py-32 lg:py-40", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Headline({
  children,
  className,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-[1.75rem] leading-[1.25] sm:text-4xl sm:leading-[1.2]",
    md: "text-[2.1rem] leading-[1.18] sm:text-5xl sm:leading-[1.14]",
    lg: "text-[2.5rem] leading-[1.12] sm:text-6xl lg:text-7xl lg:leading-[1.08]",
  };
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-[-0.015em] text-foreground text-balance-tight",
        sizes[size],
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-lg leading-relaxed text-muted-foreground sm:text-xl", className)}>
      {children}
    </p>
  );
}

type CTAProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "ghost" | "sage";
  className?: string;
};

export function CTA({ children, href, variant = "solid", className }: CTAProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    solid: "bg-primary text-primary-foreground hover:opacity-90 hover:-translate-y-0.5",
    sage: "bg-sage text-primary-foreground hover:opacity-90 hover:-translate-y-0.5",
    ghost:
      "border border-border bg-transparent text-foreground hover:border-foreground/30 hover:bg-secondary/60",
  };
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}
