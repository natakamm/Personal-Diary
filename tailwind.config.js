/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color names and values
        customPink: "#32CD32",
        customPastelPink: "#1E90FF",
        customPurple: "#800080",
      },
    },
  },
  plugins: [daisyui],
};
