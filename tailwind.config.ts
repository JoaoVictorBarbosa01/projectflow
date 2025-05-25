/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7F69DD',             // Cor base roxa do logo
        'primary-dark': '#6B53C1',      // Variação mais escura para hover/focus
        'primary-light': '#A899E8',     // Variação mais clara para secondary
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Para usar globalmente (não esquecer importar no CSS)
      }
    }
  },
  plugins: [],
}
