/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dce9ff',
          200: '#b4d0ff',
          300: '#76abff',
          400: '#3381ff',
          500: '#0a5cf5',
          600: '#003ecf',
          700: '#002fa3',
          800: '#002686',
          900: '#001a6e',
          950: '#000d3d',
        },
      },
    },
  },
  plugins: [],
}

