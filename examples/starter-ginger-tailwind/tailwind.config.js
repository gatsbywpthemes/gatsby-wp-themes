const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Trebuchet MS", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.neutral,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
