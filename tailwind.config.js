/** @type {import('tailwindcss').Types.Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#0f1419',
          800: '#1a202c',
          700: '#2d3748',
        },
        orange: {
          500: '#ff7b00',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'Montserrat', 'system-ui'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-in',
      }
    },
  },
  plugins: [],
}