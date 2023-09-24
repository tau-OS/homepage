import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import { FontaineTransform } from "fontaine";

// https://astro.build/config
export default defineConfig({
  site: "https://tauos.co",
  integrations: [tailwind(), react(), sitemap(), compress(), robotsTxt()],
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: [
          // "ui-sans-serif",
          // "system-ui",
          // "-apple-system",
          // "BlinkMacSystemFont",
          // "Segoe UI",
          // "Roboto",
          // "Helvetica Neue",
          "Arial",
          // "Noto Sans",
          // "sans-serif",
          // "Apple Color Emoji",
          // "Segoe UI Emoji",
          // "Segoe UI Symbol",
          // "Noto Color Emoji",
        ],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
});
