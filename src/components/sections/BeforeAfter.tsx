import { Container, Eyebrow, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const pairs = [
  {
    before: "I don't know what to expect.",
    after: "I understand my pattern much better now.",
  },
  {
    before: "Evenings are the hard part.",
    after: "Evenings are still the hard part — I just see it coming.",
  },
  {
    before: "I'll try not to think about it.",
    after: "I thought about it less than I assumed I would.",
  },
];

export function BeforeAfter() {
  return (
    <Section id="before-after">
      <Container>
        <Reveal>
          <Eyebrow>Day 1 &nbsp;→&nbsp; Day 21</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-2xl font-display text-[2.1rem] leading-[1.18] tracking-[-0.015em] sm:text-5xl">
            The same person, three weeks later.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-12 sm:mt-20 sm:space-y-16">
          {pairs.map((pair, i) => (
            <Reveal key={pair.before} delay={i * 90}>
              <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-2 sm:gap-16">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Day 1</p>
                  <p className="mt-3 font-display text-xl leading-snug text-muted-foreground sm:text-2xl">
                    &ldquo;{pair.before}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-sage">Day 21</p>
                  <p className="mt-3 font-display text-xl leading-snug text-foreground sm:text-2xl">
                    &ldquo;{pair.after}&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
