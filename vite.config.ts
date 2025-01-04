import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [solidPlugin(), UnoCSS(), viteSingleFile()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
