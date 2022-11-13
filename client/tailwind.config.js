/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts,css,svg}"
  ],
  theme: {
    extend: {
      colors:{
        bluegray: {
          '50': '#F3F4F7',
          '100': '#C2C9D6',
          '200': '#929FB5',
          '300': '#7989A4',
          '400': '#637492',
          '500': '#4F5D75',
          '600': '#475569',
          '700': '#3A4555',
          '800': '#212731',
          '900': '#191B24',
        },
        primary: {
          '50': '#FDF5D8',
          '100': '#FCEFC5',
          '200': '#FAE59E',
          '300': '#F9DA77',
          '400': '#F7D050',
          '500': '#F5C529',
          '600': '#D7A70A',
          '700': '#9C7907',
          '800': '#624C05',
          '900': '#271F02'
        }
      }
    },
    fontFamily:{
      'sans': ['Poppins','ui-sans-serif', 'system-ui'],
      'serif': ['Sanchez','ui-serif', 'Georgia'],
      'mono': ['Roboto Mono','ui-monospace', 'SFMono-Regular'],
    },
  },
  safelist:[
    {
      pattern: /bg-(primary)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /bg-(bluegray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
