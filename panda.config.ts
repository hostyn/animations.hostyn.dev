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
          text: {
            value: "#8C8C8C",
          },
          white: {
            value: "#ddd",
          },
        },
      },

      keyframes: {
        "text-popup": {
          "0%": {
            transform: "translateY(0)",
            transformOrigin: "50% 50%",
            textShadow: "none",
          },
          "100%": {
            transform: "translateY(-50px)",
            transformOrigin: "50% 50%",
            textShadow:
              "0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
