import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { DnaHelix } from "./DnaHelix";

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const helixRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    // Skip parallax on touch / coarse pointers + reduced-motion
    if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      raf = 0;
      if (helixRef.current) {
        helixRef.current.style.transform = `translate3d(${x * -30}px, ${y * -20}px, 0)`;
      }
      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${x * 40}px, ${y * 30}px, 0)`;
      }
    };
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x = (e.clientX - rect.left) / rect.width - 0.5;
      y = (e.clientY - rect.top) / rect.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);


  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative min-h-screen overflow-hidden bg-hero grain"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient orbs */}
      <div ref={orbRef} className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out">
        <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-teal-sci/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[520px] w-[520px] rounded-full bg-dna-blue/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-gold/15 blur-3xl" />
      </div>

      {/* Helix - desktop only (heavy decorative) */}
      <div
        ref={helixRef}
        className="pointer-events-none absolute right-[-6%] top-1/2 hidden h-[90vh] w-[55vw] -translate-y-1/2 transition-transform duration-300 ease-out md:block"
      >
        <DnaHelix className="h-full w-full" density={28} />
        <div className="absolute inset-0 -z-10 rounded-full bg-teal-sci/20 blur-[120px]" />
      </div>

      {/* Mobile: lightweight static blur orb only — no SVG helix */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center md:hidden">
        <div className="h-[60vh] w-[60vh] rounded-full bg-teal-sci/25 blur-3xl" />
      </div>

        <DnaHelix className="h-full w-full" density={42} speed={0.6} />
        <div className="absolute inset-0 -z-10 rounded-full bg-teal-sci/20 blur-[120px]" />
      </div>

      {/* Mobile helix - centered behind */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 md:hidden">
        <DnaHelix className="h-[80vh] w-[80vw]" density={28} speed={0.6} />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-emerald-deep">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-sci opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-sci" />
            </span>
            Palermo · Bio Hotel
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,6.4vw,5.5rem)] leading-[0.98] text-foreground text-balance">
            Il Benessere<br />
            Inizia dalla{" "}
            <span className="relative inline-block">
              <span className="text-gradient-emerald italic">Tua Unicità</span>
              <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                <path d="M2 8 Q 50 0 100 6 T 198 5" stroke="var(--gold)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Un percorso nutrizionale personalizzato, costruito sulle tue esigenze,
            sul tuo stile di vita e sui tuoi obiettivi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:+393318687720"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-emerald-gradient px-7 py-4 text-sm font-medium text-ivory shadow-lux transition hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Phone className="h-4 w-4" />
              Chiama Ora
            </a>
            <a
              href="https://wa.me/393318687720"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-medium text-emerald-deep shadow-soft transition hover:-translate-y-0.5 hover:shadow-lux"
            >
              <MessageCircle className="h-4 w-4" />
              Richiedi Informazioni
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-16 flex items-center gap-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
          >
            <div>
              <div className="font-display text-2xl text-emerald-deep normal-case tracking-normal">Bio.</div>
              <div>Scientificità</div>
            </div>
            <span className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-emerald-deep normal-case tracking-normal">1:1</div>
              <div>Personalizzato</div>
            </div>
            <span className="hidden h-8 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-2xl text-emerald-deep normal-case tracking-normal">∞</div>
              <div>Su misura</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <a
          href="#chi-sono"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition hover:text-emerald-deep"
        >
          Scorri
          <ArrowDown className="h-4 w-4 animate-float-y" />
        </a>
      </div>
    </section>
  );
}
