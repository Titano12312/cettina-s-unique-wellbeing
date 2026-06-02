import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouterVite } from "@tanstack/router-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouterVite(),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
