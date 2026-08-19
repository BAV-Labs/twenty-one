import { Container, Eyebrow, Headline, Rule, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    number: "01",
    title: "Choose",
    text: "Choose the habit you want to step away from.",
  },
  {
    number: "02",
    title: "Notice",
    text: "Each day, record what happened, how you felt, and whatever felt worth remembering.",
  },
  {
    number: "03",
    title: "Continue",
    text: "There is no need to be perfect. Keep going and let the pattern emerge.",
  },
  {
    number: "04",
    title: "Look back",
    text: "After 21 days, see the experience as a whole.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-secondary/40">
      <Container>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <Headline className="mt-6 max-w-2xl">Four quiet steps, twenty-one days.</Headline>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="group grid gap-4 py-9 transition-colors duration-500 sm:grid-cols-[6rem_minmax(0,14rem)_minmax(0,1fr)] sm:items-baseline sm:gap-10">
                <span className="font-display text-sm text-muted-foreground transition-colors duration-500 group-hover:text-sage">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl leading-tight sm:text-3xl">{step.title}</h3>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {step.text}
                </p>
              </div>
              {i < steps.length - 1 && <Rule />}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
