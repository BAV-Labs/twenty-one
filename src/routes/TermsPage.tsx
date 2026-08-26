import { Container } from "@/components/site/primitives";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";



export function TermsPage() {
  return (
    <>
      <Navigation />

      <main className="pt-32 pb-24 sm:pt-40">
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
              Twenty One
            </p>

            <h1 className="mt-6 font-display text-5xl font-normal leading-[1.1] tracking-[-0.02em] sm:text-6xl">
              Terms of Use
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Twenty One is a personal space for noticing what changes
              when you step away from a habit.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: August 2026
            </p>

            <div className="mt-16 space-y-12 text-base leading-relaxed text-muted-foreground">

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Using Twenty One
                </h2>

                <p className="mt-4">
                  Twenty One is a personal reflection and habit-tracking
                  tool. It is designed to help you observe your own
                  experience during a 21-day journey.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Not medical or professional advice
                </h2>

                <p className="mt-4">
                  Twenty One does not provide medical, psychological or
                  professional advice. The app is not a substitute for
                  professional care or treatment.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Your journey
                </h2>

                <p className="mt-4">
                  Your experience with a habit is personal. Twenty One
                  does not promise a specific outcome or result from
                  completing a challenge.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Your content
                </h2>

                <p className="mt-4">
                  You are responsible for the notes, reflections and
                  other information you choose to add to your journey.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Changes to the app
                </h2>

                <p className="mt-4">
                  Twenty One may evolve over time. Features may be added,
                  changed or removed as the app develops.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Changes to these terms
                </h2>

                <p className="mt-4">
                  These Terms of Use may be updated as Twenty One evolves.
                  Any changes will be reflected on this page.
                </p>
              </section>

            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}