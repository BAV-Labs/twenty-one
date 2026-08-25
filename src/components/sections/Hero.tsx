import { Container, CTA } from "@/components/site/primitives";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { Reveal, useParallax } from "@/components/site/Reveal";

export function Hero() {
  const parallax = useParallax(16);

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-accent/40 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_auto] lg:gap-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                21 days · one conscious choice at a time
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.6rem] font-normal leading-[1.1] tracking-[-0.02em] text-balance-tight sm:text-6xl sm:leading-[1.06] lg:text-[4.25rem]">
                21 days can change the way you see a habit.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Twenty One helps you step away from a habit, notice what changes, and understand
                what the experience says about you.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTA href="#start">Start your 21 days</CTA>
                <CTA href="#how-it-works" variant="ghost">
                  See how it works
                </CTA>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <div ref={parallax.ref} style={parallax.style} className="transition-transform duration-300 ease-out">
              <PhoneMockup className="w-[16rem] sm:w-[18.5rem]">
  <img
    src={`${import.meta.env.BASE_URL}screenshots/home.png`}
    alt="Twenty One app — Home screen"
    className="h-full w-full object-contain"
  />
</PhoneMockup>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
