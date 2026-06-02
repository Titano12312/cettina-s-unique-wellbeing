import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouterVite } from "@tanstack/router-plugin";
import lovablePkg from "@lovable.dev/vite-tanstack-config";
import tsconfigPaths from "vite-tsconfig-paths";

// Risolve il problema del Named Export estratto dal pacchetto Lovable
const lovableViteConfig = lovablePkg.lovableViteConfig || lovablePkg;

export default defineConfig(({ mode }) => ({
  plugins: [
    tanstackRouterVite(),
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
