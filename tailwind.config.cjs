/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'just-blue': '393e46',
        'little-white': 'F7F7F7',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // '2xl': '1536px',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
