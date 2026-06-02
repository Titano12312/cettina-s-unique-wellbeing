import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { DnaHelix } from "./DnaHelix";

const hotspots = [
  { top: "12%", left: "10%", title: "Esigenze Individuali", text: "Ogni corpo racconta una storia diversa." },
  { top: "32%", left: "78%", title: "Abitudini Personali", text: "Ritmi, gusti, contesto: tutto entra nel percorso." },
  { top: "62%", left: "8%", title: "Equilibrio Vero", text: "Non una dieta. Un nuovo modo di stare bene." },
  { top: "82%", left: "74%", title: "Obiettivi Reali", text: "Tracciamo insieme una direzione sostenibile." },
];

export function Unicita() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  return (
    <section
      id="unicita"
      ref={ref}
      className="relative overflow-hidden bg-emerald-gradient py-24 text-ivory md:py-32 lg:py-44"
    >

      {/* particle field */}
      <DnaHelix variant="field" density={80} className="absolute inset-0 h-full w-full opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.39_0.06_180/0.6))]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ivory/70">
            <span className="h-px w-10 bg-gold" /> Sezione 02
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] text-balance">
            Ogni Persona è <em className="not-italic text-gradient-gold">Unica</em>.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ivory/80 text-pretty">
            Come una doppia elica, il tuo benessere si costruisce intrecciando elementi
            diversi: biologia, abitudini, emozioni, ritmi. Non esistono due percorsi
            identici, perché non esistono due persone identiche.
          </p>

          <div className="mt-12 space-y-5">
            {[
              "Esigenze nutrizionali differenti",
              "Abitudini alimentari personali",
              "Percorso disegnato su misura",
              "Benessere nato dall'equilibrio",
            ].map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <span className="font-display text-sm text-gold tabular-nums">0{i + 1}</span>
                <span className="h-px flex-1 bg-ivory/15" />
                <span className="text-sm tracking-wide text-ivory/90">{line}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Centerpiece helix */}
        <div className="relative lg:col-span-7">
          <motion.div
            style={{ y, rotate, scale }}
            className="relative mx-auto aspect-square w-full max-w-[640px]"
          >
            {/* concentric rings */}
            <div className="absolute inset-0 rounded-full border border-ivory/10 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-ivory/8 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "60s" }} />
            <div className="absolute inset-16 rounded-full border border-gold/20" />

            <DnaHelix className="absolute inset-0 h-full w-full" density={48} speed={0.4} />

            <div className="absolute inset-0 -z-10 rounded-full bg-teal-sci/30 blur-3xl" />

            {/* hotspots */}
            {hotspots.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="absolute hidden md:block"
                style={{ top: h.top, left: h.left }}
              >
                <div className="group relative">
                  <span className="absolute inset-0 -m-1 animate-[pulse-ring_2.2s_var(--ease-lux)_infinite] rounded-full bg-gold/60" />
                  <span className="relative block h-3 w-3 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
                  <div className="absolute left-5 top-1/2 w-52 -translate-y-1/2 rounded-xl glass-dark p-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{h.title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-ivory/90">{h.text}</div>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
