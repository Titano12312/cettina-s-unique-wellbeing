import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouterVite } from "@tanstack/router-plugin";
import { lovableViteConfig } from "@lovable.dev/vite-tanstack-config";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
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
