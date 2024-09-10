/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        'max-800': {'max': '800px'},
      },
  
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}

