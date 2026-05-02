import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          void:    '#08090d',
          deep:    '#0d0f18',
          surface: '#12151f',
          border:  '#1e2235',
          muted:   '#4a5278',
          dim:     '#8892b0',
          text:    '#ccd6f6',
          bright:  '#e6f0ff',
        },
        solar: {
          DEFAULT: '#f2c14e',
          dim:     '#c9972c',
        },
        nebula: {
          DEFAULT: '#60a5fa',
          dim:     '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'solar-sm': '0 0 12px rgba(242,193,78,0.25)',
        'solar-md': '0 0 24px rgba(242,193,78,0.35)',
        'card':     '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'pulse-glow': {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        float:        'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
}
