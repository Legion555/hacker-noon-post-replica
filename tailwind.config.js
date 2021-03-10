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
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
