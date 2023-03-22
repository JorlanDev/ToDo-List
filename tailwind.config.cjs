/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      scale: {
        '200': '2.00',
      },
      colors: {
        'h1-blue': '#437EB1',
        'btn-blue': '#1b1d37',
        'input-gray': '#D9D9D9'
      },
    },
  },
  plugins: [],
}