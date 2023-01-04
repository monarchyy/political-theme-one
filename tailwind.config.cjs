/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./index.html"
  ],
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#0B7DC5',
        'primaryLight' : '#2b8ecc',
        'secondary' : '#EC3F8C'
      },
      fontFamily: {
        'saira': 'Saira Semi Condensed'
      }
    },
  },
  plugins: [],
}