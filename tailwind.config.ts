import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      screens: {
        "2xl": "1440px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
      boxShadow: {
        first: "0 7px 7px -7px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: {
          1: "#ABD2FF",
          2: "#7BB9FF",
          3: "#51A2FF",
          4: "#005FCB",
          5: "#044A9A",
          6: "#002E63",
          default: "#0277FD",
        },
        secondary: {
          1: "#F08069",
          2: "#F25A39",
          3: "#DB3C1A",
          4: "#C0371A",
          default: "#F5421C",
        },
        neutral: {
          1: "#F3F3F3",
          2: "#EAEAEA",
          3: "#E2E2E2",
          4: "#C3C3C3",
          5: "#ADADAD",
          6: "#908E8E",
          default: "#D4D4D4",
        },
        gray: {
          1: "#88888B",
          2: "#606061",
          3: "#3F3F40",
          4: "#232323",
        },
        white: "#FFFFFF",
        black: "#000000",
        red: {
          "0": "#FF0000",
        },
      },
    },
  },

  plugins: [daisyui],
};
export default config;
