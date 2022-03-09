const customTheme = require('./styles/customTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Noto Serif', 'serif'],
      mono: ['Noto Mono', 'serif'],
    },
    extend: customTheme,
  },
  plugins: [
    require('tailwind-dracula')('dracula'),
  ],
};
