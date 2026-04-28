import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF8F5',
          text: '#1a1a1a',
          pink: '#D11261', // The hot/sharp pink
          blush: '#FFD1DC', // The soft/sweet pink
          peach: '#FFDAB9',
          dark: '#2A1F2D', // Deep burgundy/charcoal for extreme contrast
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'subtle-float': 'float 6s ease-in-out infinite',
        'subtle-zoom': 'zoom 10s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      }
    }
  }
}
