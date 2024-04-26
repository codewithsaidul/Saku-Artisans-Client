/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': "Rancho, cursive",
    },
    extend: {
      colors: {
        'primary': '#4ad66d',
      },
    },
  },
  plugins: [require("daisyui")], 
}

