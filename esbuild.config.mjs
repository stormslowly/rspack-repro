import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/index.js", "./src/react/index"],
  bundle: true,
  outdir: "esbuild-dist",
  format: "iife",
  // splitting: true, format: "esm",
  jsx: "automatic",
  platform: "browser",
});
