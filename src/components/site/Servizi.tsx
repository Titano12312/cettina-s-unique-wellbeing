import { motion } from "motion/react";
import {
  Leaf, HeartPulse, Activity, Flower2, Baby, Dumbbell,
  Scale, CalendarRange, BookOpen, Target,
} from "lucide-react";

const services = [
  { i: Leaf, t: "Consulenze Nutrizionali Personalizzate", d: "Un dialogo su misura, costruito attorno a te." },
  { i: HeartPulse, t: "Valutazione delle Abitudini Alimentari", d: "Analisi del tuo rapporto quotidiano con il cibo." },
  { i: Activity, t: "Analisi della Composizione Corporea", d: "Lettura attenta dei segnali del tuo corpo." },
  { i: Flower2, t: "Nutrizione per il Benessere della Donna", d: "Cura nelle diverse stagioni della vita femminile." },
  { i: Baby, t: "Nutrizione in Gravidanza e Allattamento", d: "Accompagnamento delicato nei mesi più preziosi." },
  { i: Dumbbell, t: "Nutrizione Sportiva", d: "Energia, recupero e performance bilanciati." },
  { i: Scale, t: "Nutrizione per il Controllo del Peso", d: "Equilibrio sostenibile, lontano da scorciatoie." },
  { i: CalendarRange, t: "Nutrizione nelle Diverse Fasi della Vita", d: "Dall'infanzia alla maturità, con continuità." },
  { i: BookOpen, t: "Educazione alla Corretta Alimentazione", d: "Conoscenza che diventa scelte consapevoli." },
  { i: Target, t: "Supporto al Raggiungimento degli Obiettivi", d: "Un percorso che ti accompagna passo dopo passo." },
];

export function Servizi() {
  return (
    <section id="servizi" className="cv-auto relative overflow-hidden bg-background py-24 md:py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--teal-sci)_12%,transparent),transparent_60%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--gold)_8%,transparent),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold" /> Servizi <span className="h-px w-10 bg-gold" />
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.02] text-balance">
            Un percorso costruito sulle <em className="text-gradient-emerald not-italic">tue esigenze</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Ogni servizio è pensato come un punto di partenza personale, mai come un modello prestampato.
          </p>
        </div>

        {/* molecular grid */}
        <div className="relative mt-20">
          {/* connecting lines (SVG) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="link" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--teal-sci)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--dna-blue)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.i;
              return (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition duration-500 hover:-translate-y-2 hover:shadow-lux"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--teal-sci) 25%, transparent), transparent 60%)" }} />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-sci/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-gradient text-ivory shadow-soft transition group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-display text-lg leading-snug text-foreground">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>

                    <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold opacity-0 transition group-hover:opacity-100">
                      <span className="h-px w-6 bg-gold" /> Scopri
                    </div>
                  </div>

                  {/* corner molecule */}
                  <svg aria-hidden className="absolute bottom-3 right-3 h-10 w-10 text-teal-sci/30 transition group-hover:text-teal-sci/60" viewBox="0 0 40 40" fill="none">
                    <circle cx="8" cy="32" r="3" fill="currentColor" />
                    <circle cx="32" cy="8" r="3" fill="currentColor" />
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                    <line x1="8" y1="32" x2="20" y2="20" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="20" y1="20" x2="32" y2="8" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
