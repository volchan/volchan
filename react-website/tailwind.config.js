module.exports = {
  purge: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
};
