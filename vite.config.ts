import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as tanstackPlugin from "@tanstack/router-plugin";

// Troviamo la funzione di TanStack ovunque sia nascosta nell'export
const tanstackRouterVite = 
  tanstackPlugin.tanstackRouterVite || 
  tanstackPlugin.TanStackRouterVite || 
  (tanstackPlugin.default && (tanstackPlugin.default.tanstackRouterVite || tanstackPlugin.default.TanStackRouterVite)) ||
  tanstackPlugin.default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typeof tanstackRouterVite === "function" ? tanstackRouterVite() : [],
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // Forziamo il comportamento corretto per le Single Page Application (SPA) su Cloudflare
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  }
});
