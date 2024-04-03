import { defineConfig } from 'vite'
import {resolve} from 'path';
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
// import { analyzer } from "vite-bundle-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    // analyzer()
  ],
  resolve: {
    alias: {
      "@entities": resolve(__dirname, "./src/entities/"),
      "@shared": resolve(__dirname, "./src/shared/")
    },
  },
})
