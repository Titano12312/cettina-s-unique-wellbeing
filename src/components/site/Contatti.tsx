import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin, Building2, Clock } from "lucide-react";

export function Contatti() {
  return (
    <section id="contatti" className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_30%,color-mix(in_oklab,var(--teal-sci)_14%,transparent),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - copy + cta */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-10 bg-gold" /> Contatti
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[1] text-balance">
              Parliamo del <em className="text-gradient-emerald not-italic">tuo benessere</em>.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Il primo passo è una conversazione. Scrivimi o chiamami: insieme valuteremo
              il percorso più adatto a te.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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
                className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-medium text-emerald-deep shadow-soft transition hover:-translate-y-0.5 hover:shadow-lux"
              >
                <MessageCircle className="h-4 w-4" />
                Invia un Messaggio WhatsApp
              </a>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {[
                { i: Phone, t: "Telefono", v: "331 868 7720" },
                { i: Building2, t: "Studio", v: "Presso Bio Hotel Palermo" },
                { i: MapPin, t: "Indirizzo", v: "Via Mariano Stabile 136, 90139 Palermo" },
                { i: Clock, t: "Disponibilità", v: "Su appuntamento telefonico" },
              ].map((c) => {
                const Icon = c.i;
                return (
                  <div key={c.t} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-gradient text-ivory transition group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.t}</div>
                      <div className="mt-1 text-sm text-foreground">{c.v}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - map card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[380px] sm:min-h-[480px] overflow-hidden rounded-[28px] sm:rounded-[36px] border border-border shadow-lux">
              <iframe
                title="Mappa Studio - Via Mariano Stabile 136, Palermo"
                src="https://www.google.com/maps?q=Via+Mariano+Stabile+136,+90139+Palermo&z=16&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-deep/40 via-transparent to-transparent" />

              {/* floating card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass p-5 shadow-lux">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-ivory">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="font-display text-lg text-emerald-deep">Studio Palermo</div>
                    <div className="text-xs text-muted-foreground">Via Mariano Stabile 136 · Presso Bio Hotel</div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Via+Mariano+Stabile+136+Palermo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-emerald-gradient px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-ivory transition hover:-translate-y-0.5"
                  >
                    Indicazioni
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
