/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['Gambarino-Regular', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        midnight: '#171717',
        gray: '#A3a3a3',
      },
      letterSpacing:{
        1: '1px',
        2: '2px'
      }
    },
  },
  plugins: [],
};
