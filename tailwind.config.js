/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
      },
      colors: {
        'precipitation-rgba': 'rgba(101, 142, 217, 0.1)',
        'humidity-rgba': 'rgba(216, 97, 145, 0.1)',
        'windSpeed-rgba': 'rgba(94, 79, 193, 0.1)',
        'precipitation': '#658ED9',
        'humidity': '#D86191',
        'windSpeed': '#5E4FC1',
      },
    },
  },
  plugins: [],
}
