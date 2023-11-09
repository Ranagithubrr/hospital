/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '4/5': '80%',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}