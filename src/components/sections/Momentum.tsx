import { Container, Eyebrow, Headline, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

// 21 days: filled = stayed, soft = slipped
const days = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export function Momentum() {
  return (
    <Section id="momentum">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Momentum</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <Headline size="lg" className="mt-6">
              Progress isn&rsquo;t always a straight line.
            </Headline>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              A missed day does not erase everything before it. Twenty One looks at the rhythm of
              the journey — the periods when you stayed with your intention, how long those periods
              lasted, and how consistency changed over time.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-16 sm:mt-20">
            <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
              {days.map((state, i) => (
                <span
                  key={i}
                  title={`Day ${i + 1}`}
                  className={cn(
                    "h-8 w-8 rounded-full transition-all duration-500 hover:scale-110 sm:h-11 sm:w-11",
                    state === 1 ? "bg-sage" : "border border-border bg-transparent",
                  )}
                />
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Momentum
                </p>
                <p className="mt-2 font-display text-3xl">19 of 21 days</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Longest cycle
                </p>
                <p className="mt-2 font-display text-3xl">9 days</p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground sm:self-end">
                Two open circles. Nineteen filled. Neither number is a verdict — together they are
                simply what happened.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
