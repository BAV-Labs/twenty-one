import { Container, Eyebrow, Section } from "@/components/site/primitives";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { Reveal, useParallax } from "@/components/site/Reveal";

const shows = [
  "How the beginning compares with the end",
  "Changes in wellbeing",
  "Moments and reflections",
  "Frequently used words",
  "Consistency and momentum",
  "Longest cycle",
  "Time saved",
  "Money saved",
  "Quantity avoided",
];

export function MirrorOfTruth() {
  const parallax = useParallax(18);

  return (
    <Section id="mirror-of-truth" className="relative overflow-hidden bg-accent/35">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>The end of the challenge</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[2.4rem] font-normal leading-[1.12] tracking-[-0.02em] text-balance-tight sm:text-6xl lg:text-[4rem]">
                At the end, the app gives you something back.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 font-display text-2xl text-sage sm:text-3xl">Mirror of Truth</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                After 21 days, Twenty One takes everything you recorded — the entries, the numbers,
                the words — and turns it into a personal reflection of the journey you actually had.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-10 grid gap-y-3 text-base text-muted-foreground sm:grid-cols-2">
                {shows.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-12 max-w-md font-display text-2xl leading-snug text-foreground sm:text-[1.75rem]">
                The app doesn&rsquo;t tell you who you became. It helps you see what happened.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <div
  ref={parallax.ref}
  style={parallax.style}
  className="flex items-end justify-center gap-3 sm:gap-5"
>
  <PhoneMockup className="w-[11rem] sm:w-[14rem]">
    <img
      src={`${import.meta.env.BASE_URL}screenshots/mirrorOpen.png`}
      alt="Twenty One app — Mirror of Truth opening"
      className="block h-auto w-full"
    />
  </PhoneMockup>

  <PhoneMockup className="w-[13rem] sm:w-[17rem] translate-y-8">
    <img
      src={`${import.meta.env.BASE_URL}screenshots/mirrorContent.png`}
      alt="Twenty One app — Mirror of Truth content"
      className="block h-auto w-full"
    />
  </PhoneMockup>
</div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
