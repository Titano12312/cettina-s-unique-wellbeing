import { Phone, MessageCircle, MapPin } from "lucide-react";
import { DnaHelix } from "./DnaHelix";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.18_0.02_200)] text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <DnaHelix variant="field" density={100} className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -left-32 -top-20 h-[420px] w-[420px] rounded-full bg-teal-sci/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-dna-blue/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-gradient shadow-glow">
                <span className="font-display text-ivory text-xl">C</span>
              </span>
              <div>
                <div className="font-display text-xl">Cettina Siracusa</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-ivory/60">Biologa Nutrizionista</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Un percorso nutrizionale personalizzato, costruito sulla tua unicità.
              Scienza, ascolto e cura per un benessere autentico e sostenibile.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+393318687720"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-gradient px-5 py-2.5 text-xs font-medium text-ivory shadow-glow transition hover:-translate-y-0.5"
              >
                <Phone className="h-3.5 w-3.5" /> 331 868 7720
              </a>
              <a
                href="https://wa.me/393318687720"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass-dark px-5 py-2.5 text-xs font-medium text-ivory transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Studio</div>
            <div className="mt-4 flex items-start gap-3 text-sm text-ivory/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-sci" />
              <div>
                Via Mariano Stabile 136<br />
                90139 Palermo<br />
                <span className="text-ivory/60">Presso Bio Hotel Palermo</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Esplora</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { h: "#chi-sono", l: "Chi Sono" },
                { h: "#unicita", l: "Unicità" },
                { h: "#servizi", l: "Servizi" },
                { h: "#metodo", l: "Metodo" },
                { h: "#contatti", l: "Contatti" },
              ].map((x) => (
                <li key={x.h}>
                  <a href={x.h} className="text-ivory/70 transition hover:text-ivory">{x.l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Legale</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#" className="text-ivory/70 transition hover:text-ivory">Privacy Policy</a></li>
              <li><a href="#" className="text-ivory/70 transition hover:text-ivory">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl glass-dark p-5 text-xs leading-relaxed text-ivory/60">
          Le informazioni presenti su questo sito hanno finalità esclusivamente informative
          e non sostituiscono il parere del medico o di altri professionisti sanitari.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-6 text-[11px] text-ivory/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Dott.ssa Cettina Siracusa. Tutti i diritti riservati.</div>
          <div className="uppercase tracking-[0.25em]">Palermo · Italia</div>
        </div>
      </div>
    </footer>
  );
}
