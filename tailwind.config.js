/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        col1: "#2d3099",
        col2: "#f09aec",
        col3: "#524fe3",
      },
    },
  },
  plugins: [],
};
