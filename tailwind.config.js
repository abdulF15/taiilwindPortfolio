/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./script/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
