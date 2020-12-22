module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Kanit', 'sans-serif'],
      body: ['Kanit', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      scale: ['hover', 'focus', 'group-hover', 'group-focus'],
      rotate: ['hover', 'focus', 'group-hover', 'group-focus'],
      letterSpacing: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [],
};
