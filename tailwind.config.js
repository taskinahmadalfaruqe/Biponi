/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '10px',
          sm: '10px',
          lg: '10px',
          xl: '1rem',
          '2xl': '1rem',
        },
      },
      colors: {
        'borderColor': '#D2D0CC',
        'cardColor': '#fff',
        'bgColor': '#E7E6E4',
        'GreenColor': '#5ac31a',
      },
    },

  },
  plugins: [],
}

