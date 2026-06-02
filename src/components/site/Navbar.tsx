import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#chi-sono", label: "Chi Sono" },
  { href: "#unicita", label: "Unicità" },
  { href: "#servizi", label: "Servizi" },
  { href: "#metodo", label: "Metodo" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 md:px-5 ${
          scrolled || open ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2.5 group min-w-0">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-gradient shadow-soft">
            <span className="absolute inset-0 rounded-full bg-emerald-gradient opacity-60 blur-md transition group-hover:opacity-100" />
            <span className="relative font-display text-ivory text-lg">C</span>
          </span>
          <div className="leading-tight min-w-0">
            <div className="font-display text-[14px] sm:text-[15px] text-foreground truncate">Cettina Siracusa</div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-muted-foreground truncate">Biologa Nutrizionista</div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-3.5 py-2 text-sm text-foreground/75 transition hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="tel:+393318687720"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-gradient px-3 sm:px-4 py-2 text-sm font-medium text-ivory shadow-soft transition hover:shadow-lux hover:-translate-y-0.5"
            aria-label="Chiama"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">331 868 7720</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full glass shadow-soft text-emerald-deep"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-x-3 top-[80px] origin-top rounded-3xl glass shadow-lux transition-all duration-300 ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-3">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-5 py-4 text-base font-display text-foreground transition hover:bg-emerald-deep/5 hover:text-emerald-deep"
              >
                <span>{l.label}</span>
                <span className="font-mono text-[10px] text-gold tabular-nums">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="mt-2 px-3 pb-2">
            <a
              href="https://wa.me/393318687720"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-emerald-gradient py-3.5 text-sm font-medium text-ivory shadow-soft"
            >
              Scrivimi su WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
