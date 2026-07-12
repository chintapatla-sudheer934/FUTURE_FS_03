/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        coffee: {
          50: '#faf6f1',
          100: '#f3e9dd',
          200: '#e6d3bc',
          300: '#d4b594',
          400: '#c09a72',
          500: '#a87f56',
          600: '#8a6745',
          700: '#6e5238',
          800: '#523f2c',
          900: '#3a2e22',
          950: '#241b13',
        },
        cream: {
          50: '#fefcfb',
          100: '#fdf8f3',
          200: '#faf0e3',
          300: '#f5e2cd',
        },
        accent: {
          400: '#d97757',
          500: '#c4623f',
          600: '#a84e30',
        },
      },
      backgroundImage: {
        'hero-cafe': "url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'scale-in': 'scale-in 0.3s ease-out both',
        'slide-in-right': 'slide-in-right 0.4s ease-out both',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
