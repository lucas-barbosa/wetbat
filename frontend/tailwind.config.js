/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        '3xl': '4rem',
        '4xl': '8rem'
      },
    },
    extend: {
      colors: {
        yellow: {
          500: '#F0CF85'
        },
        primary: {
          200: '#ccd0dc',
          300: '#BEC3DE',
          400: '#7F88BE',
          500: '#5F6CAF'
        },
        accent: {
          300: '#ACDEDC',
          400: '#5BBEB9',
          500: '#5BBFBA'
        }
      }
    },
  },
  plugins: [],
};

