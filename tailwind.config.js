/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:    "#0d1b3e",
        navy2:   "#1a3260",
        orange:  "#e8420a",
        orange2: "#ff6b35",
        saffron: "#FF9933",
        green2:  "#10b981",
        purple2: "#7c3aed",
        off:     "#f5f7fa",
        border:  "#e8edf4",
        muted:   "#64748b",
      },
      fontFamily: {
        head:  ["'Playfair Display'", "Georgia", "serif"],
        body:  ["'Poppins'", "system-ui", "sans-serif"],
        sans:  ["'Poppins'", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}