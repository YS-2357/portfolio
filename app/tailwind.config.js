import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral chalkboard surface tokens (name kept for compatibility)
        space: {
          void:    '#0a0d12',
          deep:    '#0c1018',
          surface: '#11151d',
          border:  'rgba(245,245,239,0.10)',
          muted:   '#6b7280',
          dim:     '#9aa0a8',
          text:    '#e8e8df',
          bright:  '#f5f5ef',
        },
        // Chalk palette
        chalk:   { DEFAULT: '#f5f5ef', amber: '#e8c87a', dim: '#9aa0a8' },
        // Number-system accents (the inclusion chain ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ)
        natural:  { DEFAULT: '#f5f5ef', dim: '#c9c9c0' },  // ℕ → About
        integer:  { DEFAULT: '#7ec8d3', dim: '#4ba6b3' },  // ℤ → Education
        rational: { DEFAULT: '#e8c87a', dim: '#d4a843' },  // ℚ → Experience
        real:     { DEFAULT: '#93d39a', dim: '#5fb069' },  // ℝ → Awards
        complex:  { DEFAULT: '#e0a3c7', dim: '#c873a0' },  // ℂ → Projects
        algebraic:{ DEFAULT: '#b9a0f0', dim: '#9070e0' },  // 𝒪_K → project detail
        // Legacy alias so existing `text-solar` utilities keep working → chalk-amber
        solar:   { DEFAULT: '#e8c87a', dim: '#c9972c' },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        math: ['STIX Two Math', 'STIX Two Text', 'Latin Modern Math', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'card':       '0 2px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,245,239,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,245,239,0.18)',
        'accent-sm':  '0 0 12px rgba(245,245,239,0.3)',
        'accent-md':  '0 0 24px rgba(245,245,239,0.4)',
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
