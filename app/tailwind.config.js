import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Space card interiors
        space: {
          void:    '#0c0e1a',
          deep:    '#0f1121',
          surface: '#151828',
          border:  'rgba(255,255,255,0.10)',
          muted:   '#6b7280',
          dim:     '#9ca3af',
          text:    '#e6f0ff',
          bright:  '#ffffff',
        },
        // Planet palette
        solar:   { DEFAULT: '#f2c14e', dim: '#c9972c' },  // Sun
        mercury: { DEFAULT: '#94a3b8', dim: '#64748b' },  // Mercury
        earth:   { DEFAULT: '#60a5fa', dim: '#3b82f6' },  // Earth
        mars:    { DEFAULT: '#f87171', dim: '#ef4444' },  // Mars
        jupiter: { DEFAULT: '#fb923c', dim: '#f97316' },  // Jupiter
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'card':      '0 2px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.08)',
        'card-hover':'0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.18)',
        'solar-sm':  '0 0 12px rgba(242,193,78,0.3)',
        'solar-md':  '0 0 24px rgba(242,193,78,0.4)',
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
