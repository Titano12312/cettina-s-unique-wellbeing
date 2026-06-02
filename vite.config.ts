import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin"; // Lettere MAIUSCOLE qui
import lovablePkg from "@lovable.dev/vite-tanstack-config";
import tsconfigPaths from "vite-tsconfig-paths";

// Estraiamo la configurazione corretta dal pacchetto CommonJS di Lovable
const lovableViteConfig = lovablePkg.lovableViteConfig || lovablePkg;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    TanStackRouterVite(), // Aggiornato anche qui con le maiuscole
    react(),
    tsconfigPaths(),
    mode === "development" 
      ? lovableViteConfig() 
      : lovableViteConfig({ nitro: true }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
