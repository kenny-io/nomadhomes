/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0047AB', // Deep rich blue
          light: '#3373B8',
        },
        secondary: {
          DEFAULT: '#FFA500', // Vibrant orange
          light: '#FFB733',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};