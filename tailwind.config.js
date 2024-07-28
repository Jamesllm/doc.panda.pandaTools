/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    extend: {
      colors: {
        'panda-primary': '#25c2a0',
        'panda-oneDark': '#282c34',
        'panda-oneLight': '#fafafa'
      }
    },
  },
  plugins: [],
};

