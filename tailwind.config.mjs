/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#00a9a2',
        tealDark: '#00807b',
        charcoal: '#232323',
        charcoalSoft: '#3a3a3a',
        offwhite: '#f7f6f4',
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
