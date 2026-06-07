// Faint commutative-diagram overlay — replaces the constellation behind the hero.
// A commuting square (g∘f = j∘i) plus a triangle, drawn in chalk at very low opacity.
export default function CommutativeDiagram() {
  return (
    <svg
      className="pointer-events-none select-none absolute inset-0 w-full h-full"
      viewBox="0 0 1080 480"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity: 0.06 }}
    >
      <defs>
        <marker
          id="cd-arrow"
          viewBox="0 0 10 10"
          refX="9" refY="5"
          markerWidth="7" markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="white" />
        </marker>
      </defs>

      {/* ── Commuting square: A → B → D, A → C → D ── */}
      <g
        stroke="white"
        strokeWidth="1.1"
        fontFamily="'STIX Two Text', serif"
        fontStyle="italic"
        fill="white"
      >
        {/* objects */}
        <text x="190" y="120" fontSize="30">A</text>
        <text x="470" y="120" fontSize="30">B</text>
        <text x="190" y="320" fontSize="30">C</text>
        <text x="470" y="320" fontSize="30">D</text>

        {/* arrows */}
        <line x1="225" y1="110" x2="455" y2="110" markerEnd="url(#cd-arrow)" />
        <line x1="200" y1="135" x2="200" y2="295" markerEnd="url(#cd-arrow)" />
        <line x1="480" y1="135" x2="480" y2="295" markerEnd="url(#cd-arrow)" />
        <line x1="225" y1="310" x2="455" y2="310" markerEnd="url(#cd-arrow)" />

        {/* arrow labels */}
        <text x="330" y="98"  fontSize="20">f</text>
        <text x="150" y="220" fontSize="20">i</text>
        <text x="495" y="220" fontSize="20">g</text>
        <text x="330" y="335" fontSize="20">j</text>
        <text x="300" y="225" fontSize="18" fillOpacity="0.7">∘</text>
      </g>

      {/* ── Triangle: X → Y → Z, X → Z (right side) ── */}
      <g
        stroke="white"
        strokeWidth="1.1"
        fontFamily="'STIX Two Text', serif"
        fontStyle="italic"
        fill="white"
      >
        <text x="760" y="150" fontSize="28">X</text>
        <text x="960" y="150" fontSize="28">Y</text>
        <text x="860" y="330" fontSize="28">Z</text>

        <line x1="795" y1="140" x2="950" y2="140" markerEnd="url(#cd-arrow)" />
        <line x1="975" y1="165" x2="895" y2="305" markerEnd="url(#cd-arrow)" />
        <line x1="775" y1="165" x2="855" y2="305" markerEnd="url(#cd-arrow)" />

        <text x="865" y="128" fontSize="18">φ</text>
        <text x="950" y="250" fontSize="18">ψ</text>
        <text x="785" y="250" fontSize="18">ψφ</text>
      </g>
    </svg>
  )
}
