import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { href: "#chi-sono", label: "Chi Sono" },
  { href: "#unicita", label: "Unicità" },
  { href: "#servizi", label: "Servizi" },
  { href: "#metodo", label: "Metodo" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-gradient shadow-soft">
            <span className="absolute inset-0 rounded-full bg-emerald-gradient opacity-60 blur-md transition group-hover:opacity-100" />
            <span className="relative font-display text-ivory text-lg">C</span>
          </span>
          <div className="leading-tight">
            <div className="font-display text-[15px] text-foreground">Cettina Siracusa</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Biologa Nutrizionista</div>
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
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+393318687720"
          className="group inline-flex items-center gap-2 rounded-full bg-emerald-gradient px-4 py-2 text-sm font-medium text-ivory shadow-soft transition hover:shadow-lux hover:-translate-y-0.5"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">331 868 7720</span>
          <span className="sm:hidden">Chiama</span>
        </a>
      </nav>
    </header>
  );
}
