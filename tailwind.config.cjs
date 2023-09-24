const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Satoshi-Variable",
          "Satoshi-Variable\\ override",
          "Satoshi-Regular",
          "Satoshi-Regular\\ override",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
