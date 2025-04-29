/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /*la positiva*/
        'la-positiva-principal': '#0734a9', 
        'la-positiva-principal-hov': '#0734a9', 
        'la-positiva-secondary': '#0734a9',  
        'la-positiva-secondary-hov': '#0734a9',


      },
    },
  },
  plugins: [],
}

