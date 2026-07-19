/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      // color themes
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

      // fonts
      fontFamily: {
        Roboto: ["Roboto Mono", "serif"],
        Rubik: ["Rubik", "serif"]
      },

      // animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}

