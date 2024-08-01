/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#0e0e0e",
        customGray: "#1F1F1F",
        customDark: "#141414",
      },
    },
  },
  plugins: [],
};
