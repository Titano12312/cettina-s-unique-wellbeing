import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as tanstackPlugin from "@tanstack/router-plugin";

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
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      // Diciamo a Rollup di usare il file TypeScript principale invece di cercare index.html nella root
      input: "src/main.tsx",
    },
  },
});
