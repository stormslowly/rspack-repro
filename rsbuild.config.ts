import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      main: "./src/index",
//      react: "./src/react/index",
    },
  },
  output: {
    distPath: { root: "./rsbuild-dist" },
  },
});
