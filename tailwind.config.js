/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '57.5': "14.375rem",
      },
      height: {
        '61.75': "15.4375rem"
      },
      borderRadius: {
        'card': "30px",
        'button': "18px"
      }
    },
  },
  plugins: [],
}
