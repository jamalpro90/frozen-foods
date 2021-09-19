const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        teal: colors.teal,
        lime: colors.lime,
      },
      fontFamily: {
        robo: 'Roboto, sans-serif',
        'robo-slab': 'Roboto Slab, serif',
      },
      backgroundImage: {
        'footer-img': "url('/img/footer.svg')",
        'wave-img': "url('/img/wave.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
