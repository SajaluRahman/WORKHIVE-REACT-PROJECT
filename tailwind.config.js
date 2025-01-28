/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bubble: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
      },
      animation: {
        bubble: "bubble 6s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
