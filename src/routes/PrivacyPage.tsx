import { Container } from "@/components/site/primitives";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";

export function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Twenty One is designed to be personal and private.
              Your journey stays on your device.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: August 2026
            </p>

            <div className="mt-16 space-y-12 text-base leading-relaxed text-muted-foreground">

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Information we collect
                </h2>

                <p className="mt-4">
                  Twenty One does not collect personal information,
                  create user accounts or require you to sign in.
                </p>

                <p className="mt-4">
                  You may choose to enter a name when creating your
                  journey. This name is stored locally on your device
                  and is not sent to us.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Your journey data
                </h2>

                <p className="mt-4">
                  Information you add to Twenty One — including daily
                  check-ins, reflections, wellbeing entries and photos —
                  is stored locally on your device.
                </p>

                <p className="mt-4">
                  We do not receive, access or store this information
                  on external servers.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  No account required
                </h2>

                <p className="mt-4">
                  Twenty One currently does not use user accounts,
                  registration or login services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  No analytics or tracking
                </h2>

                <p className="mt-4">
                  Twenty One currently does not use third-party
                  analytics, advertising trackers or profiling tools.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Third-party services
                </h2>

                <p className="mt-4">
                  Twenty One currently does not send your personal
                  journey data to third-party services or external APIs.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Deleting your data
                </h2>

                <p className="mt-4">
                  Because your data is stored locally on your device,
                  you remain in control of it. Removing the app may
                  remove locally stored app data from your device,
                  depending on your device and system settings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Changes to this policy
                </h2>

                <p className="mt-4">
                  If Twenty One changes the way information is stored
                  or processed in the future, this Privacy Policy will
                  be updated to reflect those changes.
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