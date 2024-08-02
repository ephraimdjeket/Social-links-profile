/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /** Colors */
        customGrey900: "hsl(0, 0%, 8%)",
        customGrey800: "hsl(0, 0%, 12%)",
        customGrey700: "hsl(0, 0%, 20%)",
        customGreen: "hsl(75, 94%, 57%)",
        customDarkBg: "#0E0E0E",
        customGray: "#1F1F1F",
        customDark: "#141414",
        /** Font Family */
        fontFamily: {
          "Inter": ["Inter", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
