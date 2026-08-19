import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, CTA } from "./primitives";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why 21 days", href: "#why-21-days" },
  { label: "Mirror of Truth", href: "#mirror-of-truth" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <Container>
        <nav className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:h-20 md:flex md:justify-between">
          <a
            href="#top"
            className="min-w-0 truncate font-display text-[1.05rem] tracking-[-0.01em] text-foreground"
          >
            Twenty One
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <CTA href="#start" className="px-5 py-2.5 text-[0.85rem]">
              Start your 21 days
            </CTA>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background transition-[max-height,opacity] duration-500 md:hidden",
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container>
          <div className="flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-xl text-foreground last:border-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
