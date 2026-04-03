/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        backyard: {
          bg: '#070810',
          surface: '#0d0f1a',
          'surface-2': '#12152a',
          border: '#1a1e35',
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-bright': '#60a5fa',
          'blue-deep': '#1d4ed8',
          'blue-glow': '#2563eb',
          amethyst: '#8b5cf6',
          'amethyst-bright': '#a78bfa',
          'amethyst-muted': '#6d28d9',
          amber: '#fbbf24',
          muted: '#6b7280',
          subtle: '#1e2340',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-up-delay': 'slideUp 0.7s ease-out 0.15s forwards',
        'slide-up-delay-2': 'slideUp 0.7s ease-out 0.3s forwards',
        'slide-up-delay-3': 'slideUp 0.7s ease-out 0.45s forwards',
        'slide-up-delay-4': 'slideUp 0.7s ease-out 0.6s forwards',
        'slide-up-delay-5': 'slideUp 0.7s ease-out 0.75s forwards',
        'slide-up-delay-6': 'slideUp 0.7s ease-out 0.9s forwards',
        'marquee': 'marquee 30s linear infinite',
        'card-in': 'cardIn 0.35s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
