/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          500: '#667eea',
          600: '#5a6fd8',
          700: '#4c63d1',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      }
    },
  },
  plugins: [],
}
