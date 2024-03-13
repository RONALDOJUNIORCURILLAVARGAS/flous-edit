/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-flous":"#03045E",
        "gray-flous":"#fcfcfcbd",
        "gray-mision-vision":"#eeeeee",
        "blue-mision-vision":"#0C378E"
      }
      
    },
  },
  plugins: [],
}

