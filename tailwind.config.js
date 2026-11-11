/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          // Soft Luxury Blue Spectrum (Clean, Light, Elegant, Full Scale)
          blue: {
            DEFAULT: '#1E3A5F',      // Classic luxury navy slate
            50: '#F0F6FB',
            100: '#E2EEF8',
            200: '#C7DEF0',
            300: '#9BC1E3',
            400: '#7EA8CF',
            500: '#5B8FB9',
            600: '#1E3A5F',          // High-contrast primary action navy (>10:1 on white text)
            700: '#162840',
            800: '#0F2035',
            900: '#081220',
            soft: '#F0F6FB',         // Ultra-soft icy blue tint for section backgrounds
            ice: '#E6F0F8',          // Pale soft blue for card hover/borders
            light: '#C7DEF0',        // Sky powder blue for light badges
            medium: '#7EA8CF',       // Refined cornflower blue
            dark: '#1E3A5F',         // Classic navy slate for primary buttons & contrast text
            deep: '#0F2035',         // Midnight navy for high-contrast luxury headings
            navy: '#162840',         // Rich dark blue accent
          },
          // Crisp Whites & Porcelains
          light: {
            DEFAULT: '#FFFFFF',
            surface: '#F8FAFC',      // Crisp porcelain surface
            card: '#FFFFFF',         // Bright clean card
            bg: '#F8FAFC',           // Porcelain background alias
            border: 'rgba(91, 143, 185, 0.18)',
            borderStrong: 'rgba(30, 58, 95, 0.25)'
          },
          'light-bg': '#F8FAFC',
          // Prestige Champagne Gold accents from original Bin Irfan logo
          gold: {
            DEFAULT: '#C5A059',
            metallic: '#D4AF37',
            light: '#F5EEDB',
            dark: '#9A741E',
            glow: 'rgba(212, 175, 55, 0.25)'
          },
          // Complete Slate typography colors for clean readability across all screens
          slate: {
            DEFAULT: '#1E293B',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#64748B',          // Adjusted to darker slate for WCAG contrast
            500: '#475569',          // High-readability secondary text
            600: '#334155',          // High-contrast body text (>7:1 on white)
            700: '#1E293B',          // Deep slate for bold labels
            800: '#0F172A',          // Near-black for important badges
            900: '#0A0F1D',          // Pure dark slate for headings & dark buttons
            muted: '#475569',
            light: '#64748B'
          },
          // Emerald for WhatsApp & COD trust badges
          emerald: {
            DEFAULT: '#059669',
            dark: '#064E3B',
            light: '#D1FAE5'
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
        'soft-blue': '0 10px 30px -10px rgba(91, 143, 185, 0.2)',
        'luxury-card': '0 4px 20px -2px rgba(15, 32, 53, 0.06), 0 0 1px 1px rgba(91, 143, 185, 0.12)',
        'luxury-hover': '0 20px 35px -8px rgba(30, 58, 95, 0.12), 0 0 1px 1px rgba(91, 143, 185, 0.25)',
        'gold-glow': '0 0 20px rgba(197, 160, 89, 0.3)'
      }
    },
  },
  plugins: [],
}
