/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0A0A',
          surface: '#141414',
          card: '#1c1c1c',
          border: 'rgba(216, 195, 165, 0.15)',
          borderHover: 'rgba(183, 110, 76, 0.4)',
        },
        earth: {
          black: '#0A0A0A',
          dark: '#141414',
          cream: '#F1E7D3',
          beige: '#D8C3A5',
          terracotta: '#B76E4C',
          terracottaDark: '#9C5B3D',
        },
        brand: {
          50: '#fdfbf7',
          100: '#f7f0e6',
          200: '#eddcc7',
          300: '#D8C3A5', // Beige
          400: '#C97D5B',
          500: '#B76E4C', // Terracotta Accent
          600: '#B76E4C',
          700: '#9C5B3D',
          800: '#7E482F',
          900: '#613622',
          950: '#331A0F',
          glow: '#B76E4C'
        },
        editorial: {
          bg: '#F1E7D3', // Cream primary light section
          card: '#ffffff',
          text: '#0A0A0A',
          muted: '#4a4237',
          border: '#e4d7c3'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(183, 110, 76, 0.25)',
        'glow-md': '0 0 30px -5px rgba(183, 110, 76, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(183, 110, 76, 0.45)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(183, 110, 76, 0.15) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(183, 110, 76, 0.2), transparent 70%)',
      }
    },
  },
  plugins: [],
}
