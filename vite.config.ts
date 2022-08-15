import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@pages": resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    eslintPlugin(),
  ],
});