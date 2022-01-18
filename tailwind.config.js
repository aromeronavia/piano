const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      gray: colors.gray,
      primary: "#003049",
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
      blue: colors.blue,
    },
    fontFamily: {
      sans: ['Poppins', 'serif'],
    }
  },
}
