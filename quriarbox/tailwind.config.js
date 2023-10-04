/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'Oxanium': ['Oxanium', 'cursive']
      },
      colors: {
        'commonClr': '#F95C19',
        'rgbClr': 'rgb(245, 245, 245, 70%)',
        'bodyColor': '#fff7e6',
        'yellowClr': 'rgba(255, 175, 15, 0.4)',
        'rgbBlack': 'rgba(0, 0, 0, 0.75)',
      },
      backgroundImage: {
        'videoBG': "url('assets/videobg.png')"
      }
    },
  },
  plugins: [],
}