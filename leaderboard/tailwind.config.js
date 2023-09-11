/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Qanelas Soft"', 'sans-serif'],
      },
      fontSize: {
        50: '50px',
      },
      colors: {
        'primary-100': '#E6FBF7',
        tertiary: '#FBB402',
        grey: '#50596E',
        dark: '#333',
        light: '#f4f4f4',
        primary: '#00B39F',
        white: '#ffffff',
        'light-grey': {
          main: '#E6E6E6',
          100: '[#F3F4F6]',
        },
        neutral: '#404040',
        'neutral-copy-black': '#404040',
        'neutral-accorion': '#F9F9FB',
        brown: '#7C5904',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#227645',
          secondary: '#82C600',
          accent: '#F5F9FA',
          dark: '#3c494f',
          info: '#D0F4DD',
          success: '#12B76A',
          warning: '#FBB402',
          error: '#FF0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
