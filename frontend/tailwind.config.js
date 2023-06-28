/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#5F6CAF'
        },
        accent: {
          500: '#5BBFBA'
        }
      }
    },
  },
  plugins: [],
}

