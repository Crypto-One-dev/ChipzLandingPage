module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#171717',
        'green': '#79f6d7',
        'gray-dark' : '#212a31',
        'gray-mid': '#2c353a',
        'gray-light': '#353e43',
        'white': '#ffffff',
      },
      boxShadow: {
        'cardShadow': '0px 1px 6px -1px rgba(255, 0, 0, 0.4), 0px 2px 8px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
