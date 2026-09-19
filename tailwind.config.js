/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ruby: {
            DEFAULT: '#7A142A',
            dark: '#460914',
            deep: '#2D050C',
            light: '#9C1D36',
            glow: 'rgba(122, 20, 42, 0.4)'
          },
          gold: {
            DEFAULT: '#C5A059',
            metallic: '#D4AF37',
            light: '#F3E5AB',
            dark: '#9A741E',
            glow: 'rgba(212, 175, 55, 0.3)'
          },
          dark: {
            DEFAULT: '#0E0C0D',
            surface: '#151214',
            card: '#1B1719',
            cardHover: '#231E20',
            border: 'rgba(212, 175, 55, 0.18)'
          },
          cream: {
            DEFAULT: '#FAF8F5',
            soft: '#F3EFE9',
            muted: '#E6DFD5'
          }
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        arabic: ['Amiri', 'serif']
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em'
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'ruby-glow': '0 0 30px rgba(122, 20, 42, 0.35)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.1)'
      }
    },
  },
  plugins: [],
}
