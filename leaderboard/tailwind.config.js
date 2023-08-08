/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#E6FBF7',
        tertiary: '#FBB402',
        grey: '#50596E',
        dark: '#333',
        light: '#f4f4f4',
        primary: '#00B39F',
        white: '#ffffff',
        info: '#E3FEFF',
        success: '#006644',
        error: '#b92500',
        warn: '#ff8b00',
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
          dark: '#000000',
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
