module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "height": {
        '4,5': '4.5rem',
      },
      "colors": {
        // Ici vos couleurs exportées de Figma
        'indigo': {
          '25': '#F6F8FF',
        },
      },
      "fontFamily": {
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  },
  plugins: [],
}
