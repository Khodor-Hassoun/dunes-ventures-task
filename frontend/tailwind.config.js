/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ming: "#0a253b",
        "background-color": "#1C658C",
        accent: "#6096B4",
        danger: "#FE5F55",
        success: "#59CE8F",
      },
      backgroundImage: {
        sands:
          "url('./resources/images/fabian-kozdon-5ZeooCGNw3s-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
