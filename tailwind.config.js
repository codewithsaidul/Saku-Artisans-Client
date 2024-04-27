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
      boxShadow: {
        'custom': '0 4px 12px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  }
}

