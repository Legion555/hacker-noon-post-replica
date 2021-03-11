module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'hackerGreenLight': '#00FF00',
        'hackerGreenDark': '#00BB00'
      },
      color: {
        'hackerGreenLight': '#00FF00',
        'hackerGreenDark': '#00BB00'
      },
      transition: {
        'cubic': '1s cubic-bezier(0.075, 0.80, 0.165, 1)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
