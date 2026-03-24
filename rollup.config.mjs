import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: {
    main: "./src/index.js",
    react: "./src/react/index.jsx",
  },
  output: {
    dir: "rollup-dist",
    format: "esm",
  },
  plugins: [
    nodeResolve({ extensions: [".js", ".jsx"] }),
    commonjs(),
    postcss(),
    babel({
      babelHelpers: "bundled",
      presets: [["@babel/preset-react", { runtime: "automatic" }]],
      extensions: [".js", ".jsx"],
    }),
  ],
};
