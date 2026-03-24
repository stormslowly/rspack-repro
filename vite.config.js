import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "vite-dist",
    rollupOptions: {
      input: {
        main: "./src/index.js",
        react: "./src/react/index.jsx",
      },
    },
  },
});
