/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: '#31C3DB',
      blueHover: '#65E9E4',
      yellow: '#F2B137',
      yellowHover: '#FFC860',
      dark: '#1A2A33',
      semiDark: '#1F3641',
      silver: '#A8BFC9',
      silverHover: '#DBE8ED'
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif']
    },
    boxShadow: {
      shadowBT: 'inset 0px -8px 0px #10212A',
      shadowTurn: 'inset 0px -4px 0px #10212A',
      shadowReset: 'inset 0px -4px 0px #6B8997'

    },
    borderRadius: {
      bt: '10px',
      btSmall: '5px'
    },
    extend: {}
  },
  plugins: []
}
