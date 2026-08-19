import { Container, Eyebrow, Headline, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

export function Concept() {
  return (
    <Section id="concept">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>The idea</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <Headline size="lg" className="mt-6">
                Not a streak.
                <br />
                A journey.
              </Headline>
            </Reveal>
          </div>

          <div className="max-w-xl space-y-10">
            <Reveal delay={120}>
              <div className="space-y-3">
                <p className="text-base text-muted-foreground">Most habit apps ask:</p>
                <p className="font-display text-2xl leading-snug text-muted-foreground sm:text-3xl">
                  &ldquo;Did you do it today?&rdquo;
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-3 border-l border-sage pl-6">
                <p className="text-base text-muted-foreground">Twenty One asks something different:</p>
                <p className="font-display text-3xl leading-snug text-foreground sm:text-4xl">
                  &ldquo;What did you notice?&rdquo;
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                There is nothing to lose here. A missed day isn&rsquo;t a failure, and progress
                isn&rsquo;t a competition. Over 21 days you simply observe your choices, your
                wellbeing, your thoughts — and the patterns underneath them.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
