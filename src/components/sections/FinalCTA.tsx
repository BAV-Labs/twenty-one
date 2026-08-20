import { Container, CTA, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

export function FinalCTA() {
  return (
    <Section id="start" className="relative overflow-hidden bg-foreground py-28 text-primary-foreground sm:py-36 lg:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-sage/20 blur-3xl sm:-right-40 sm:-top-40 sm:h-[40rem] sm:w-[40rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-sage/15 blur-3xl sm:-left-40"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground/70">
              21 days · one conscious choice at a time
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[2.4rem] font-normal leading-[1.1] tracking-[-0.02em] text-balance-tight sm:text-6xl lg:text-7xl">
              Give yourself the space to notice.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Start your 21-day journey today. No streaks. No scores. Just a quiet place to understand what is already there.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTA href="#start" variant="sage" className="px-8 py-4 text-base">
                Start your 21 days
              </CTA>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-primary-foreground/20 px-5 py-3.5">
                <span className="h-8 w-8 rounded-xl bg-primary-foreground/10" aria-hidden />
                <span className="text-sm leading-tight text-left">
                  <span className="block text-xs text-primary-foreground/70">Coming to</span>
                  <span className="block">the App Store</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-14 text-sm text-primary-foreground/60">
              Free during early access. No account required to begin.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
