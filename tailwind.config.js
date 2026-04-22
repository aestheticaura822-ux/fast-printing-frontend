/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maroon': {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f28b8b',
          500: '#e54848',
          600: '#dc2626',
          700: '#b91c1c',  // dark red/maroon
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'gold': {
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        },
        'silver': {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}