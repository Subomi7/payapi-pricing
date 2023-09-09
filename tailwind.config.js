/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ba4270',
        secondary: '#fbfcfe',
        tertiary: '#36536b',
        mirage: '#1b262f',
        charm: '#da6d97',
        juan: '#6c8294',
        moro: '#edf3f8',
        subby: '#d2dbe3',
        idan: '#1f2c38',
      },
    },
    fontfamily: {
      Serif: ['dm serif display, sans-serif'],
      Sans: ['Public sans, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
};
