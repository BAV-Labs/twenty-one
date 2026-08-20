import { Container, Eyebrow, Headline, Section } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const promises = [
  {
    title: "Your data stays yours",
    text: "Entries, reflections, and patterns are stored on your device. Nothing is sold, shared, or used to target you.",
  },
  {
    title: "No social features",
    text: "There are no leaderboards, no public profiles, and no comparisons. This is a private space, not a performance.",
  },
  {
    title: "Open and clear",
    text: "You can export your data at any time. If you ever want to leave, you take everything with you.",
  },
];

export function Privacy() {
  return (
    <Section id="privacy">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-24">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Privacy</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <Headline size="lg" className="mt-6">
                A quiet app should stay quiet.
              </Headline>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                Twenty One is built on the idea that personal change deserves a private space.
                No tracking for advertisers. No feeds. No pressure to share. Just your own
                record, kept safely with you.
              </p>
            </Reveal>
          </div>

          <div className="space-y-8">
            {promises.map((promise, i) => (
              <Reveal key={promise.title} delay={i * 90}>
                <div className="border-l border-sage pl-6">
                  <h3 className="font-display text-xl leading-snug sm:text-2xl">{promise.title}</h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
                    {promise.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
