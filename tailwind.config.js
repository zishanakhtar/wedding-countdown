/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 100s linear infinite', // 20 seconds for one full turn
      },
      fontFamily: {
        cook: ['Cookie', 'cursive'],
        amiri: ['Amiri', 'serif']
      },
    },
  },
  plugins: [],
}

