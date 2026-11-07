/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        mono: {
          black: '#111111',
          surface: '#1A1A1A',
          dark: '#333333',
          gray: '#737373',
          light: '#D9D9D9',
          lighter: '#F3F3F3',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
