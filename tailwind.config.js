/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'light': {
          100: '#F9F8F6',
          200: '#EFE9E3',

        },
        'dark': {
          100: '#0C0C0C',
          200: '#2B2A2A',
          300: '#021526'
        },

        
      },

      fontFamily: {
        Roboto: ["Roboto Mono", "serif"],
        Rubik: ["Rubik", "serif"]
      }
    },
  },
  plugins: [],
}

