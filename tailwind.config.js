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
        navy: {
          DEFAULT: '#151B2E',
          deep: '#0E1322',
          surface: '#1E263D',
          border: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(21, 27, 46, 0.75)',
        },
        ivory: {
          DEFAULT: '#F5F0E6',
          light: '#FAF7F0',
          dark: '#E7DFC9',
          muted: '#8E8779',
          border: 'rgba(21, 27, 46, 0.08)',
          card: '#FFFFFF',
        },
        lime: {
          DEFAULT: '#C5F36B',
          glow: 'rgba(197, 243, 107, 0.35)',
          muted: '#96BA4E',
        },
        cobalt: {
          DEFAULT: '#6378FF',
          glow: 'rgba(99, 120, 255, 0.35)',
          muted: '#4D5EC7',
        },
        coral: {
          DEFAULT: '#FF8066',
          glow: 'rgba(255, 128, 102, 0.35)',
        },
        lavender: {
          DEFAULT: '#BCA9F5',
          glow: 'rgba(188, 169, 245, 0.35)',
        },
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(21, 27, 46, 0.09) 1px, transparent 1px)",
        'grid-pattern-dark': "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
