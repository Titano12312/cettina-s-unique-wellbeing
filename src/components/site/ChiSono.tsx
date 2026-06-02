import { motion } from "motion/react";
import { DnaHelix } from "./DnaHelix";

const principles = [
  { k: "01", t: "Approccio Personalizzato", d: "Ogni percorso è disegnato attorno alla persona, non al protocollo." },
  { k: "02", t: "Ascolto Profondo", d: "Esigenze, abitudini e contesto di vita guidano ogni scelta nutrizionale." },
  { k: "03", t: "Scientificità", d: "Aggiornamento continuo e basi scientifiche solide in ogni indicazione." },
  { k: "04", t: "Equilibrio Sostenibile", d: "Un benessere alimentare che si integra naturalmente nella tua quotidianità." },
];

export function ChiSono() {
  return (
    <section id="chi-sono" className="relative overflow-hidden py-24 md:py-32 lg:py-44">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory to-background" />
      <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-teal-sci/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-[88%] max-w-md">
              <div className="absolute inset-0 rounded-[36px] bg-emerald-gradient shadow-lux" />
              <div className="absolute inset-0 rounded-[36px] overflow-hidden">
                <DnaHelix className="absolute -right-10 top-0 h-full w-[80%] opacity-90" density={24} />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-deep/80 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-4 rounded-[28px] border border-ivory/20" />

              {/* Floating signature card */}
              <div className="absolute -bottom-6 left-2 right-8 sm:-left-8 sm:right-auto sm:w-[78%] rounded-2xl glass p-4 sm:p-5 shadow-lux animate-float-y">
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Studio</div>
                <div className="mt-1 font-display text-lg sm:text-xl text-emerald-deep">Dott.ssa Cettina<br />Siracusa</div>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="h-px w-8 bg-gold" />
                  Biologa Nutrizionista
                </div>
              </div>

              {/* Gold corner ornament */}
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gold-gradient opacity-90 blur-sm" />
              <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full border border-gold/60" />
            </div>

          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              <span className="h-px w-10 bg-gold" /> Chi Sono
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-5 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-foreground text-balance"
            >
              Scienza, ascolto e cura<br />
              al servizio del <em className="text-gradient-emerald not-italic">tuo benessere</em>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
            >
              Sono Cettina Siracusa, Biologa Nutrizionista a Palermo. Credo che il benessere
              nasca da un equilibrio costruito con cura: tra ciò che siamo, ciò che mangiamo
              e il modo in cui viviamo. Ogni percorso che disegno è unico, perché unica è
              la persona che ho davanti.
            </motion.p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principles.map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="group relative rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="font-display text-3xl text-gold/80">{p.k}</span>
                  <div className="mt-3 font-display text-lg text-emerald-deep">{p.t}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-teal-sci/30" />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-border pt-8">
              {[
                { n: "100%", l: "Percorsi su misura" },
                { n: "1:1", l: "Consulenza personale" },
                { n: "Palermo", l: "Via Mariano Stabile, 136" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-emerald-deep">{s.n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
