/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = { 
  darkMode: false,
  corePlugins: {
    preflight: false // set preflight to false
  }, 
  prefix: 'tw-', // set prefix to 'tw-'
  important: true, // set important to true
  content: [
    "./*.{html,js}",
    "./asset/**/*.{html,js}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'ig-blue': '#0f5c98',
        'ig-teal':  '#2fa9a3',
        'ig-olive': '#63853a',
        'ig-light-green': '#9ecda2', 
        'ig-orange': '#f18149',
        'ig-mustard': '#e7b52f', 
        'ig-dark-blue': '#13284b',
        'ig-brown': '#544543'
      },
    },
    fontFamily: {
      sans: [
        '"Inter"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
}
