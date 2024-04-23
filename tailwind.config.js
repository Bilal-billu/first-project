/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary:{
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily:{
        sedan:['Sedan'],
        jersey:['Jersey']
      }
    },
  },
  plugins: [],
}

