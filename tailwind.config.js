/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flame: {
          orange: '#FF6B35',
          red: '#E63946',
          yellow: '#FFB627',
        },
        dark: {
          bg: '#1A1A1A',
          card: '#1E1E1E',
        },
      },
      backgroundImage: {
        'gradient-flame': 'linear-gradient(135deg, #FF6B35 0%, #E63946 50%, #FFB627 100%)',
      },
    },
  },
  plugins: [],
}
