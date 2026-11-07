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
        stone: {
          50: '#F9F9F8',
          100: '#F5F5F4',
          150: '#EFEFEA',
          200: '#E6E6E3',
          300: '#D5D5D0',
          400: '#A3A39E',
          500: '#73736E',
          600: '#52524E',
          700: '#3A3A37',
          800: '#262624',
          850: '#1D1D1B',
          900: '#151514',
          950: '#0E0E0D',
        },
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
        'card': '0 2px 6px rgba(0, 0, 0, 0.04), 0 10px 24px -4px rgba(0, 0, 0, 0.06)',
        'elevated': '0 12px 36px -6px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'ambient': '0 25px 60px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
