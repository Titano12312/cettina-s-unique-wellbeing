import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as tanstackPlugin from "@tanstack/router-plugin";
import lovablePkg from "@lovable.dev/vite-tanstack-config";

// Troviamo la funzione di TanStack ovunque sia nascosta nell'export
const tanstackRouterVite = 
  tanstackPlugin.tanstackRouterVite || 
  tanstackPlugin.TanStackRouterVite || 
  (tanstackPlugin.default && (tanstackPlugin.default.tanstackRouterVite || tanstackPlugin.default.TanStackRouterVite)) ||
  tanstackPlugin.default;

// Estraiamo la configurazione corretta dal pacchetto di Lovable
const lovableViteConfig = lovablePkg.lovableViteConfig || lovablePkg;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    typeof tanstackRouterVite === "function" ? tanstackRouterVite() : [],
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
