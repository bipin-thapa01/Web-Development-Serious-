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
      },
      screens: {
        'custom1' : '860px',
        'custom2' : '640px',
        'custom3' : '550px',
      }
    },
  },
  plugins: [],
  darkMode : 'class',
}

