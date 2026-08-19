import { Container } from "./primitives";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-xl">Twenty One</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              21 days. One conscious choice at a time.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-border px-5 py-3.5">
              <span className="h-8 w-8 rounded-xl bg-secondary" aria-hidden />
              <span className="text-sm leading-tight">
                <span className="block text-xs text-muted-foreground">Coming to</span>
                <span className="block">the App Store</span>
              </span>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Twenty One. Made quietly.
        </p>
      </Container>
    </footer>
  );
}
