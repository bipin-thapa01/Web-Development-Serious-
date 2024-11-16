/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dict/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '85' : '360px'
      },
      spacing: {
        '100' : '700px'
      }
    },
  },
  plugins: [],
}

