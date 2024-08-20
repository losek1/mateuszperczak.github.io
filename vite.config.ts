import eslintPlugin from "@nabla/vite-plugin-eslint";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@icons": resolve(__dirname, "./src/icons"),
      "@pages": resolve(__dirname, "./src/pages"),
    },
  },
  build: {
    target: "esnext",
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion"],
        targets:
          "last 2 Chrome versions, last 2 Firefox versions, not Firefox < 60, not Chrome < 60",
      },
    }),
    eslintPlugin(),
    svgr({
      svgrOptions: {
        icon: true,
        svgProps: {
          fill: "currentColor",
        },
      },
    }),
    legacy(),
  ],
});
