/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'seconday': '#353535',
      },
      height: {
        '80': '20rem',
        '100': '25rem'
      }
    },
  },
  plugins: [],
}
