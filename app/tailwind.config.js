import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          void:    '#070c18',
          deep:    '#0c1020',
          surface: '#0f1629',
          border:  'rgba(255,255,255,0.10)',
          muted:   '#6b7280',
          dim:     '#9ca3af',
          text:    '#e6f0ff',
          bright:  '#ffffff',
        },
        // Full planet palette
        solar:   { DEFAULT: '#f2c14e', dim: '#c9972c' },   // Sun    → Home
        mercury: { DEFAULT: '#94a3b8', dim: '#64748b' },   // Mercury → Project detail
        venus:   { DEFAULT: '#e8c87a', dim: '#d4a843' },   // Venus  → Awards
        earth:   { DEFAULT: '#60a5fa', dim: '#3b82f6' },   // Earth  → About
        mars:    { DEFAULT: '#f87171', dim: '#ef4444' },   // Mars   → Experience
        jupiter: { DEFAULT: '#fb923c', dim: '#f97316' },   // Jupiter → Projects
        saturn:  { DEFAULT: '#fbbf24', dim: '#d97706' },   // Saturn → Education
        uranus:  { DEFAULT: '#67e8f9', dim: '#22d3ee' },   // Uranus
        neptune: { DEFAULT: '#818cf8', dim: '#6366f1' },   // Neptune
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'card':       '0 2px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.18)',
        'solar-sm':   '0 0 12px rgba(242,193,78,0.3)',
        'solar-md':   '0 0 24px rgba(242,193,78,0.4)',
      },
      keyframes: {
        'pulse-glow': { '0%,100%': { opacity:'0.6' }, '50%': { opacity:'1' } },
        float:        { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-8px)' } },
        'twinkle':    { '0%,100%': { opacity:'0.3' }, '50%': { opacity:'1' } },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        float:        'float 6s ease-in-out infinite',
        twinkle:      'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
}
