// Faint famous-equations overlay — tiled down the full page behind the content.
// A scatter of celebrated identities plus two algebraic object-and-arrow diagrams
// (change of basis, first isomorphism theorem), drawn in chalk at very low opacity
// and repeated via an SVG pattern so they keep appearing as you scroll.

type Part = { base: string; sup?: string; sub?: string; tail?: string }

// Render text with an optional super/subscript run, then a trailing run, on one baseline.
// dy is cumulative in SVG, so the shift / counter-shift cancel to return to the baseline.
function Eq({ x, y, size, parts }: { x: number; y: number; size: number; parts: Part[] }) {
  return (
    <text x={x} y={y} fontSize={size}>
      {parts.map((p, i) => {
        const script = p.sup ?? p.sub
        const dy = p.sup ? -size * 0.42 : size * 0.28
        return (
          <tspan key={i}>
            {p.base}
            {script && <tspan dy={dy} fontSize={size * 0.62}>{script}</tspan>}
            {script && <tspan dy={-dy}>{p.tail ?? ''}</tspan>}
            {!script && (p.tail ?? '')}
          </tspan>
        )
      })}
    </text>
  )
}

export default function EquationBackdrop() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ opacity: 0.06 }}
    >
      <defs>
        <marker
          id="eq-arrow"
          viewBox="0 0 10 10"
          refX="9" refY="5"
          markerWidth="7" markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="white" />
        </marker>

        <pattern
          id="equation-field"
          width="1120" height="880"
          patternUnits="userSpaceOnUse"
        >
          {/* ── Scattered identities ── */}
          <g fill="white" fontFamily="'STIX Two Text', serif" fontStyle="italic">
            {/* Euler's identity — the most beautiful equation */}
            <Eq x={60} y={80} size={40} parts={[{ base: 'e', sup: 'iπ', tail: ' + 1 = 0' }]} />

            {/* Pythagorean trigonometric identity */}
            <Eq x={560} y={75} size={30} parts={[
              { base: 'sin', sup: '2', tail: 'θ + cos' },
              { base: '', sup: '2', tail: 'θ = 1' },
            ]} />

            {/* Change of basis — similarity transform (matches the diagram below) */}
            <Eq x={90} y={165} size={26} parts={[
              { base: '[T]', sub: 'ℬ′', tail: ' = P' },
              { base: '', sup: '−1', tail: ' [T]' },
              { base: '', sub: 'ℬ', tail: ' P' },
            ]} />

            {/* de Moivre's theorem */}
            <Eq x={470} y={200} size={24} parts={[
              { base: '(cos θ + i sin θ)', sup: 'n', tail: ' = cos nθ + i sin nθ' },
            ]} />

            {/* Basel problem */}
            <Eq x={80} y={265} size={28} parts={[
              { base: '∑ 1/n', sup: '2', tail: ' = π' },
              { base: '', sup: '2', tail: '/6' },
            ]} />

            {/* Fermat's little theorem */}
            <Eq x={660} y={290} size={26} parts={[
              { base: 'a', sup: 'p', tail: ' ≡ a (mod p)' },
            ]} />

            {/* Gaussian integral */}
            <Eq x={90} y={350} size={26} parts={[
              { base: '∫ e', sup: '−x²', tail: ' dx = √π' },
            ]} />

            {/* Euler's formula */}
            <Eq x={430} y={360} size={24} parts={[
              { base: 'e', sup: 'iθ', tail: ' = cos θ + i sin θ' },
            ]} />

            {/* Fibonacci recurrence */}
            <Eq x={820} y={360} size={26} parts={[
              { base: 'F', sub: 'n', tail: ' = F' },
              { base: '', sub: 'n−1', tail: ' + F' },
              { base: '', sub: 'n−2' },
            ]} />

            {/* Binomial theorem */}
            <Eq x={80} y={440} size={24} parts={[
              { base: '(x + y)', sup: 'n', tail: ' = ∑ C(n,k) x' },
              { base: '', sup: 'k' },
            ]} />

            {/* Law of cosines — Pythagoras with a trig term */}
            <Eq x={470} y={460} size={24} parts={[
              { base: 'c', sup: '2', tail: ' = a' },
              { base: '', sup: '2', tail: ' + b' },
              { base: '', sup: '2', tail: ' − 2ab cos C' },
            ]} />

            {/* Lagrange's theorem */}
            <Eq x={830} y={460} size={24} parts={[{ base: '|G| = |H| · [G : H]' }]} />

            {/* Cauchy–Schwarz inequality */}
            <Eq x={90} y={540} size={24} parts={[{ base: '|⟨u, v⟩| ≤ ‖u‖ ‖v‖' }]} />

            {/* Series for e */}
            <Eq x={470} y={545} size={24} parts={[{ base: 'e = ∑ 1/n!' }]} />
          </g>

          {/* ── Change-of-basis commuting square: T on V, conjugated by P ── */}
          <g
            transform="translate(660, 575)"
            stroke="white" strokeWidth="1.1"
            fill="white" fontFamily="'STIX Two Text', serif" fontStyle="italic"
          >
            <text x="14" y="22" fontSize="26" stroke="none">V</text>
            <text x="206" y="22" fontSize="26" stroke="none">V</text>
            <text x="14" y="168" fontSize="26" stroke="none">V</text>
            <text x="206" y="168" fontSize="26" stroke="none">V</text>

            <line x1="44" y1="14" x2="200" y2="14" markerEnd="url(#eq-arrow)" />
            <line x1="24" y1="32" x2="24" y2="148" markerEnd="url(#eq-arrow)" />
            <line x1="216" y1="32" x2="216" y2="148" markerEnd="url(#eq-arrow)" />
            <line x1="44" y1="160" x2="200" y2="160" markerEnd="url(#eq-arrow)" />

            <text x="116" y="6"   fontSize="18" stroke="none">T</text>
            <text x="116" y="182" fontSize="18" stroke="none">T</text>
            <text x="2"   y="96"  fontSize="18" stroke="none">P</text>
            <text x="222" y="96"  fontSize="18" stroke="none">P</text>
          </g>

          {/* ── First isomorphism theorem: G ⟶ H factors through G/ker f ── */}
          <g
            transform="translate(140, 640)"
            stroke="white" strokeWidth="1.1"
            fill="white" fontFamily="'STIX Two Text', serif" fontStyle="italic"
          >
            <text x="6"   y="22"  fontSize="26" stroke="none">G</text>
            <text x="250" y="22"  fontSize="26" stroke="none">H</text>
            <text x="70"  y="178" fontSize="22" stroke="none">G/ker f</text>

            <line x1="32" y1="14"  x2="244" y2="14"  markerEnd="url(#eq-arrow)" />
            <line x1="18" y1="32"  x2="78"  y2="150" markerEnd="url(#eq-arrow)" />
            <line x1="150" y1="150" x2="256" y2="32" markerEnd="url(#eq-arrow)" />

            <text x="134" y="6"   fontSize="18" stroke="none">f</text>
            <text x="22"  y="100" fontSize="18" stroke="none">π</text>
            <text x="214" y="100" fontSize="18" stroke="none">≅</text>
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#equation-field)" />
    </svg>
  )
}
