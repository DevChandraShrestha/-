/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    fontFamily: {
      'main' : 'Rajdhani, sans-serif',
      
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}