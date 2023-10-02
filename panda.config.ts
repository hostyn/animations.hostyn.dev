import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          bg: {
            value: "#0D0D0D",
          },
          menu: {
            value: "#1C1C1C",
          },
          input: {
            value: "#141414",
          },
          hover: {
            value: "#282a36",
          },
          text: {
            value: "#8C8C8C",
          },
          white: {
            value: "#ddd",
          },
          error: {
            value: "#d93036",
          },

          errorHover: {
            value: "#ff6166",
          },
        },
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
