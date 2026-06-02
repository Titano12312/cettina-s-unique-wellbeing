import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as tanstackPlugin from "@tanstack/router-plugin";
import lovablePkg from "@lovable.dev/vite-tanstack-config";

// Risolve dinamicamente il problema dell'esportazione di TanStack
const tanstackRouterVite = 
  tanstackPlugin.tanstackRouterVite || 
  tanstackPlugin.TanStackRouterVite || 
  (tanstackPlugin.default && (tanstackPlugin.default.tanstackRouterVite || tanstackPlugin.default.TanStackRouterVite)) ||
  tanstackPlugin.default;

// Estrae la configurazione di Lovable (gestendo esportazioni di default o nominate)
const lovableViteConfig = typeof lovablePkg === 'function' ? lovablePkg : (lovablePkg.lovableViteConfig || lovablePkg.default);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    typeof tanstackRouterVite === "function" ? tanstackRouterVite() : [],
    react(),
    tsconfigPaths(),
    // Invochiamo il plugin di Lovable solo se è una funzione valida
    typeof lovableViteConfig === "function" ? lovableViteConfig() : []
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
