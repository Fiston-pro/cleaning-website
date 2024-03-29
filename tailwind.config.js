/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cde9ef',
        secondary: '#2B788B',
        text: '#1F3552',
      },
    },
  },
  plugins: [],
}

