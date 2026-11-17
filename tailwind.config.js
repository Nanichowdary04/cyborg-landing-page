/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#0f0f11",
        "surface-light": "#18181b",
        silver: {
          100: "#f8fafc",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
        },
        orange: {
          accent: "#FF4800",
          glow: "#FF6224",
          dark: "#CC3A00",
        },
      },
      fontFamily: {
        serif: ['"Italiana"', '"Bodoni Moda"', '"Playfair Display"', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Syne"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter': '-0.04em',
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 35%, #64748b 70%, #94a3b8 100%)',
        'chrome-text': 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 40%, #64748b 70%, #CBD5E1 100%)',
        'dark-vignette': 'radial-gradient(circle at center, transparent 40%, #080808 95%)',
      },
      keyframes: {
        pulseOrange: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '0.85' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'pulse-orange': 'pulseOrange 3s ease-in-out infinite',
        'float-subtle': 'floatSubtle 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
