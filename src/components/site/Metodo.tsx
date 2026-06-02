import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const steps = [
  { n: "01", t: "Primo Colloquio", d: "Conoscersi. Ascoltare la tua storia, le tue motivazioni, i tuoi obiettivi." },
  { n: "02", t: "Analisi delle Esigenze", d: "Comprendere il contesto: stile di vita, ritmi, preferenze e necessità." },
  { n: "03", t: "Valutazione delle Abitudini Alimentari", d: "Leggere insieme le tue abitudini, senza giudizio, con precisione." },
  { n: "04", t: "Definizione degli Obiettivi", d: "Tracciare una direzione realistica, misurabile e sostenibile nel tempo." },
  { n: "05", t: "Elaborazione del Percorso Nutrizionale", d: "Costruire un piano disegnato attorno a te, non sul protocollo." },
  { n: "06", t: "Monitoraggio nel Tempo", d: "Accompagnarti, ricalibrare, celebrare ogni traguardo raggiunto." },
];

export function Metodo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="metodo" ref={ref} className="relative bg-background md:[height:300vh]">
      {/* MOBILE: vertical timeline */}
      <div className="relative md:hidden overflow-hidden bg-ivory py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--teal-sci)_10%,transparent),transparent_60%)]" />
        <div className="relative mx-auto max-w-xl px-6">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold" /> Il Metodo
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3rem)] leading-[1.02] text-balance">
            Un percorso in sei <em className="text-gradient-emerald not-italic">tempi</em>.
          </h2>

          <ol className="relative mt-12 space-y-6 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-teal-sci before:via-emerald-deep before:to-gold">
            {steps.map((s) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="relative flex gap-5"
              >
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-emerald-gradient shadow-glow" />
                  <span className="absolute inset-1 rounded-full bg-ivory" />
                  <span className="relative font-display text-base text-emerald-deep">{s.n}</span>
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Fase {s.n}</div>
                  <h3 className="mt-1.5 font-display text-lg text-emerald-deep leading-snug">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      {/* DESKTOP: horizontal scroll */}
      <div className="sticky top-0 hidden h-screen flex-col overflow-hidden bg-ivory md:flex">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--teal-sci)_10%,transparent),transparent_60%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-12 lg:pt-28">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-gold" /> Il Metodo
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.02] text-balance">
            Un percorso in sei <em className="text-gradient-emerald not-italic">tempi</em>.
          </h2>
        </div>

        <div className="relative mt-14 flex-1 overflow-hidden">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border" />
          <motion.div
            style={{ scaleX: lineScale, transformOrigin: "left" }}
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-teal-sci via-emerald-deep to-gold"
          />

          <motion.div style={{ x }} className="flex h-full items-center gap-8 pl-[8vw] pr-[60vw]">
            {steps.map((s, i) => (
              <div key={s.n} className="relative flex w-[min(86vw,420px)] shrink-0 flex-col">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-emerald-gradient shadow-glow" />
                  <span className="absolute inset-1 rounded-full bg-ivory" />
                  <span className="relative font-display text-lg text-emerald-deep">{s.n}</span>
                  <span className="absolute -inset-3 rounded-full border border-teal-sci/30" />
                  <span className="absolute -inset-6 rounded-full border border-gold/15" />
                </div>
                <div className={`mt-10 rounded-3xl border border-border bg-card p-7 shadow-soft ${i % 2 ? "translate-y-6" : "-translate-y-6"}`}>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Fase {s.n}</div>
                  <h3 className="mt-2 font-display text-2xl text-emerald-deep leading-snug">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 lg:px-12">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Scorri per esplorare</span>
            <span>{steps.length} fasi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
