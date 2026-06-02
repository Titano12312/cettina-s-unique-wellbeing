import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ChiSono } from "@/components/site/ChiSono";
import { Unicita } from "@/components/site/Unicita";
import { Servizi } from "@/components/site/Servizi";
import { Metodo } from "@/components/site/Metodo";
import { Testimonianze } from "@/components/site/Testimonianze";
import { Contatti } from "@/components/site/Contatti";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dott.ssa Cettina Siracusa · Biologa Nutrizionista a Palermo" },
      {
        name: "description",
        content:
          "Percorsi nutrizionali personalizzati a Palermo. Dott.ssa Cettina Siracusa, Biologa Nutrizionista: scienza, ascolto e cura per il tuo benessere.",
      },
      { property: "og:title", content: "Dott.ssa Cettina Siracusa · Biologa Nutrizionista" },
      {
        property: "og:description",
        content:
          "Il benessere inizia dalla tua unicità. Consulenze nutrizionali su misura a Palermo, presso Bio Hotel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "biologa nutrizionista Palermo, nutrizionista Palermo, consulenza nutrizionale, Cettina Siracusa, nutrizione personalizzata",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ChiSono />
      <Unicita />
      <Servizi />
      <Metodo />
      <Testimonianze />
      <Contatti />
      <Footer />
    </main>
  );
}
