import { defineConfig } from "rolldown";

export default defineConfig({
  input: {
    main: "./src/index.js",
    react: "./src/react/index.jsx",
  },
  output: {
    dir: "rolldown-dist",
    // format: "esm",
    format: "cjs",
  },
});
