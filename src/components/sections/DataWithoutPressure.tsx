import { Container, Eyebrow, Headline, Rule, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const patterns = [
  { title: "Wellbeing changes", text: "How mood, energy and sleep moved across the three weeks." },
  { title: "Consistency", text: "How often you stayed with your intention, without a scoreboard." },
  { title: "Moments worth remembering", text: "The entries you marked as meaningful." },
  { title: "Words that appeared repeatedly", text: "The language you kept returning to." },
  { title: "Time and money saved", text: "Based on what you told the app at the start." },
  { title: "Momentum", text: "The rhythm of the challenge, not a running total." },
];

export function DataWithoutPressure() {
  return (
    <Section id="data" className="bg-secondary/40">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Data without pressure</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <Headline size="lg" className="mt-6">
              Your data should help you understand yourself — not judge you.
            </Headline>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Twenty One turns your daily entries into patterns you can read. Nothing is ranked,
              compared or shared. The numbers exist to give your own experience a shape.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-16 sm:mt-20 sm:grid-cols-2">
          {patterns.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <div className="py-7">
                <h3 className="font-display text-xl leading-snug sm:text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
              <Rule />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
