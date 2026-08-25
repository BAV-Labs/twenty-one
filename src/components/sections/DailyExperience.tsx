import { Container, Eyebrow, Headline, Section } from "@/components/site/primitives";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { Reveal, useParallax } from "@/components/site/Reveal";

const records = [
  "Whether you stayed or slipped",
  "Mood",
  "Energy",
  "Sleep",
  "Short answers to prompts",
  "Reflections",
  "Photos",
];

export function DailyExperience() {
  const parallax = useParallax(12);

  return (
    <Section id="daily">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>The daily experience</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <Headline className="mt-6">A few minutes a day. A clearer picture over time.</Headline>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                The daily check-in is short on purpose. You write what happened, mark how you felt,
                and move on with your day. Everything you record becomes part of the picture you
                look back on later.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
                {records.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors duration-500 hover:border-sage hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="flex justify-center lg:justify-end">
            <div
  ref={parallax.ref}
  style={parallax.style}
  className="flex items-end justify-center gap-3 sm:gap-5 lg:justify-end"
>
  <PhoneMockup className="w-[10rem] sm:w-[13rem]">
    <img
      src={`${import.meta.env.BASE_URL}screenshots/daily1.png`}
      alt="Twenty One app — daily check-in"
      className="block h-auto w-full"
    />
  </PhoneMockup>

  <PhoneMockup className="w-[10rem] sm:w-[13rem] translate-y-8">
    <img
      src={`${import.meta.env.BASE_URL}screenshots/daily2.png`}
      alt="Twenty One app — daily reflection"
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
