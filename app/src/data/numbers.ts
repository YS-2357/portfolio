// ── Number systems: the spine of the portfolio ──
// The inclusion chain ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ is the navigation backbone.
// Each extension answers a limitation the previous system couldn't:
//   ℕ can't subtract → ℤ ; ℤ can't divide → ℚ ; ℚ has gaps → ℝ ; ℝ can't solve x²+1=0 → ℂ.
// Beyond ℂ the chain branches into the non-standard extensions ℍ (quaternions), 𝕆 (octonions).

export type SystemName =
  | 'overview'    // Home — the whole journey ℕ→ℂ
  | 'natural'     // ℕ
  | 'integer'     // ℤ
  | 'rational'    // ℚ
  | 'real'        // ℝ
  | 'complex'     // ℂ
  | 'algebraic'   // 𝒪_K — project detail (ring of integers / number-theory motif)
  | 'quaternion'  // ℍ
  | 'octonion'    // 𝕆

export type NumberSystem = {
  glyph: string   // unicode double-struck / script glyph for display
  latex: string   // LaTeX form (for KaTeX content, captions)
  color: string   // chalk accent
  glow: string    // ambient glow (rgba)
  size: number    // glyph weight in ChainBar (px)
  label: string   // English name
  tagline: string // short Korean perspective line
}

export const SYSTEMS: Record<SystemName, NumberSystem> = {
  overview: {
    glyph: 'ℕ→ℂ', latex: '\\mathbb{N}\\to\\mathbb{C}',
    color: '#f5f5ef', glow: 'rgba(245,245,239,0.12)', size: 18,
    label: 'From ℕ to ℂ',
    tagline: '한계를 만날 때마다 나를 확장해왔다.',
  },
  natural: {
    glyph: 'ℕ', latex: '\\mathbb{N}',
    color: '#f5f5ef', glow: 'rgba(245,245,239,0.14)', size: 20,
    label: 'Natural numbers',
    tagline: '출발점 — 셈의 시작, 가장 근본의 정체성.',
  },
  integer: {
    glyph: 'ℤ', latex: '\\mathbb{Z}',
    color: '#7ec8d3', glow: 'rgba(126,200,211,0.14)', size: 20,
    label: 'Integers',
    tagline: '토대 — 성취와 시행착오(양·음)를 모두 품은 배움.',
  },
  rational: {
    glyph: 'ℚ', latex: '\\mathbb{Q}',
    color: '#e8c87a', glow: 'rgba(232,200,122,0.14)', size: 20,
    label: 'Rationals',
    tagline: '비율 — 관계 속에서 측정 가능한 실무 기여.',
  },
  real: {
    glyph: 'ℝ', latex: '\\mathbb{R}',
    color: '#93d39a', glow: 'rgba(147,211,154,0.14)', size: 20,
    label: 'Reals',
    tagline: '완비 — 연속적으로 누적된 성취.',
  },
  complex: {
    glyph: 'ℂ', latex: '\\mathbb{C}',
    color: '#e0a3c7', glow: 'rgba(224,163,199,0.14)', size: 22,
    label: 'Complex numbers',
    tagline: '대수적으로 닫힘 — 모든 문제가 해를 갖는 결과물.',
  },
  algebraic: {
    glyph: '𝒪', latex: '\\mathcal{O}_K',
    color: '#b9a0f0', glow: 'rgba(185,160,240,0.14)', size: 20,
    label: 'Ring of integers',
    tagline: '정수론적 디테일 — 구조를 들여다보는 곳.',
  },
  quaternion: {
    glyph: 'ℍ', latex: '\\mathbb{H}',
    color: '#9ca3af', glow: 'rgba(156,163,175,0.12)', size: 16,
    label: 'Quaternions',
    tagline: '표준 사슬 너머의 확장.',
  },
  octonion: {
    glyph: '𝕆', latex: '\\mathbb{O}',
    color: '#9ca3af', glow: 'rgba(156,163,175,0.12)', size: 16,
    label: 'Octonions',
    tagline: '더 먼 확장.',
  },
}

// The clean inclusion chain shown in ChainBar (ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ).
export const CHAIN_ORDER: SystemName[] = [
  'natural', 'integer', 'rational', 'real', 'complex',
]

// Non-standard extensions that branch off after ℂ.
export const EXTENSION_ORDER: SystemName[] = ['quaternion', 'octonion']
