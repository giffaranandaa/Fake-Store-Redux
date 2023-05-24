/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white: '#FFFBF5',
        beige: '#F7EFE5',
        purple: '#C3ACD0',
        vintage: '#674188'
      }
    },
  },
  plugins: [],
}

