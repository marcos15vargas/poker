/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rojo" : "#d70022",
        "fondo" : "#152126"
      }
    },
  },
  plugins: [],
}

