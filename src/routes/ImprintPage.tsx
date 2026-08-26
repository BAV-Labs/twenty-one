import { Container } from "@/components/site/primitives";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";

export function ImprintPage() {
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
              Imprint
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: August 2026
            </p>

            <div className="mt-16 space-y-12 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Information
                </h2>

                <div className="mt-4 space-y-2">
                  <p className="text-foreground">BAV Labs</p>
                  <p>Independent design and development studio</p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Team
                </h2>

                <div className="mt-4 space-y-2">
                  <p>Benjamin Sparwasser</p>
                  <p>Alex Jäger Peña</p>
                  <p>Valeriia Bilous</p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Contact
                </h2>

                <div className="mt-4 space-y-2">
                  <a 
                    href="mailto:bav-labs@proton.me"
                    className="transition-colors hover:text-foreground"
                  >
                    bav-labs@proton.me
                  </a>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Responsible Content
                </h2>

                <p className="mt-4">
                  BAV Labs
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground">
                  Disclaimer
                </h2>

                <p className="mt-4">
                  Twenty One is an independent concept. It is not affiliated with or endorsed by any
                  third parties.
                </p>

                <p className="mt-4">
                  The application is currently developed as an
                  independent project and does not represent a medical,
                  therapeutic or professional service.
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