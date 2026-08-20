import { Container, Eyebrow, Headline, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const reasons = [
  {
    title: "Long enough to notice",
    text: "Three weeks is enough time for a new rhythm to emerge. You begin to see when the habit whispers, when it shouts, and when it barely speaks at all.",
  },
  {
    title: "Short enough to begin",
    text: "Twenty-one days is not a life sentence. It is a small experiment you can say yes to without needing the rest of your life to be sorted first.",
  },
  {
    title: "A natural window",
    text: "Not too short to dismiss, not too long to fear. It is a window that gives your experience room to breathe — and you room to change your mind.",
  },
];

export function Why21Days() {
  return (
    <Section id="why-21-days" className="bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Why 21 days</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <Headline size="lg" className="mt-6">
              The number is not magic. The space it creates is.
            </Headline>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Twenty One uses 21 days because it is a practical length for paying attention.
              Not for perfection. Not for streaks. Just long enough to see what happens
              when you keep choosing, one day at a time.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:mt-20 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-background/60 px-6 py-7 sm:px-7 sm:py-8">
                <h3 className="font-display text-xl leading-snug sm:text-2xl">{reason.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
