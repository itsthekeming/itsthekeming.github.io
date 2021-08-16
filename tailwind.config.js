const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        chevron: 'url(/chevron-right.svg)',
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
}
