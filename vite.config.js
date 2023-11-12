// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        data: "./data.html",
        uma: "./uma.html",
        // scenario: "./bousai_scenario.html",
        // typhoonrain: "./typhoon_heavyrain.html",
        // volcanic: "./volcanic_eruption.html",
        // evacuation: "./bousai_evacuation.html",
      },
      output: {
        dir: "dist",
      },
    },
  },
  publicDir: "public",
  base: "",
});
