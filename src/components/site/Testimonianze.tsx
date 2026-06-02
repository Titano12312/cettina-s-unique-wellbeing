import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Giulia M.",
    role: "Palermo",
    text: "Un percorso che mi ha aiutata a riscoprire un rapporto sereno con il cibo. Ascolto, competenza e una cura davvero rara.",
  },
  {
    name: "Marco R.",
    role: "Sportivo amatoriale",
    text: "Finalmente un approccio costruito su di me, sui miei tempi e sui miei obiettivi. La differenza si sente ogni giorno.",
  },
  {
    name: "Laura D.",
    role: "Neomamma",
    text: "Mi sono sentita accompagnata in un momento delicato della mia vita, con professionalità e tanta umanità.",
  },
  {
    name: "Antonio C.",
    role: "Imprenditore",
    text: "Un equilibrio sostenibile, non una dieta. Ho trovato esattamente ciò che cercavo da anni.",
  },
];

export function Testimonianze() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_50%,color-mix(in_oklab,var(--dna-blue)_10%,transparent),transparent_55%)]" />

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-gold" /> Testimonianze <span className="h-px w-10 bg-gold" />
        </span>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.04] text-balance">
          Storie di <em className="text-gradient-emerald not-italic">benessere</em> ritrovato.
        </h2>

        <div className="relative mt-16 mx-auto max-w-3xl">
          {/* floating decorative cards */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-3xl glass shadow-soft rotate-[-8deg] animate-float-y" />
          <div className="pointer-events-none absolute -right-12 -bottom-10 h-44 w-44 rounded-3xl glass shadow-soft rotate-[6deg] animate-float-y" style={{ animationDelay: "1.2s" }} />

          <div className="relative rounded-[36px] glass p-10 shadow-lux lg:p-14">
            <Quote className="mx-auto h-8 w-8 text-gold" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 font-display text-[clamp(1.3rem,2.2vw,1.9rem)] leading-snug text-foreground text-balance"
              >
                "{r.text}"
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={r.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4"
              >
                <div className="font-display text-lg text-emerald-deep">{r.name}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{r.role}</div>
              </motion.div>
            </AnimatePresence>

            {/* controls */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                aria-label="Precedente"
                onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full glass shadow-soft transition hover:-translate-y-0.5 hover:shadow-lux"
              >
                <ChevronLeft className="h-4 w-4 text-emerald-deep" />
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, k) => (
                  <button
                    key={k}
                    aria-label={`Vai a testimonianza ${k + 1}`}
                    onClick={() => setI(k)}
                    className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-emerald-deep" : "w-1.5 bg-border"}`}
                  />
                ))}
              </div>
              <button
                aria-label="Successivo"
                onClick={() => setI((i + 1) % reviews.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full glass shadow-soft transition hover:-translate-y-0.5 hover:shadow-lux"
              >
                <ChevronRight className="h-4 w-4 text-emerald-deep" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
