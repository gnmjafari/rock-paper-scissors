/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [daisyui],
};
