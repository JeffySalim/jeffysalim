/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily:{
        poly : ['Poly'],
        poppins : ['Poppins'],
        rajdhani: ['Rajdhani']
      }
    },
  },
  plugins: [],
}
