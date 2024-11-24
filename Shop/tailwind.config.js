/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dict/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '85' : '360px',
        '450': '450',
        '1000' : '95vw'
      },
      spacing: {
        '100' : '700px'
      },
      screens: {
        'custom1' : '860px',
        'custom2' : '640px',
        'custom3' : '550px',
        'custom4' : '420px',
      }
    },
  },
  plugins: [],
  darkMode : 'class',
}

