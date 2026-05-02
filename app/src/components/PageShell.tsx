import type { ReactNode } from 'react'
import { PLANETS, type PlanetName } from '../data/planets'
import PlanetBar from './PlanetBar'

type Props = {
  children: ReactNode
  planet?: PlanetName
  className?: string
}

// Simple constellation SVG — abstract star pattern with connecting lines
function ConstellationOverlay() {
  return (
    <svg
      className="pointer-events-none select-none absolute inset-0 w-full h-full"
      viewBox="0 0 1080 480"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity: 0.055 }}
    >
      {/* Stars */}
      <circle cx="120" cy="80"  r="2.5" fill="white" />
      <circle cx="280" cy="140" r="1.8" fill="white" />
      <circle cx="460" cy="60"  r="3.0" fill="white" />
      <circle cx="620" cy="190" r="2.0" fill="white" />
      <circle cx="800" cy="100" r="2.8" fill="white" />
      <circle cx="960" cy="160" r="1.6" fill="white" />
      <circle cx="200" cy="260" r="2.2" fill="white" />
      <circle cx="380" cy="320" r="1.4" fill="white" />
      <circle cx="560" cy="260" r="2.6" fill="white" />
      <circle cx="720" cy="340" r="1.8" fill="white" />
      <circle cx="900" cy="280" r="2.0" fill="white" />
      <circle cx="70"  cy="400" r="1.5" fill="white" />
      <circle cx="1020" cy="380" r="2.2" fill="white" />
      {/* Constellation lines */}
      <line x1="120" y1="80"  x2="280" y2="140" stroke="white" strokeWidth="0.6" />
      <line x1="280" y1="140" x2="460" y2="60"  stroke="white" strokeWidth="0.6" />
      <line x1="460" y1="60"  x2="620" y2="190" stroke="white" strokeWidth="0.6" />
      <line x1="620" y1="190" x2="800" y2="100" stroke="white" strokeWidth="0.6" />
      <line x1="800" y1="100" x2="960" y2="160" stroke="white" strokeWidth="0.6" />
      <line x1="200" y1="260" x2="380" y2="320" stroke="white" strokeWidth="0.6" />
      <line x1="380" y1="320" x2="560" y2="260" stroke="white" strokeWidth="0.6" />
      <line x1="560" y1="260" x2="720" y2="340" stroke="white" strokeWidth="0.6" />
      <line x1="720" y1="340" x2="900" y2="280" stroke="white" strokeWidth="0.6" />
      {/* Cross-links for depth */}
      <line x1="280" y1="140" x2="200" y2="260" stroke="white" strokeWidth="0.4" strokeDasharray="4 6" />
      <line x1="620" y1="190" x2="560" y2="260" stroke="white" strokeWidth="0.4" strokeDasharray="4 6" />
      <line x1="960" y1="160" x2="900" y2="280" stroke="white" strokeWidth="0.4" strokeDasharray="4 6" />
    </svg>
  )
}

export default function PageShell({ children, planet = 'sun', className = '' }: Props) {
  const p = PLANETS[planet]

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${className}`}
      style={{
        paddingTop: 'var(--nav-height)',
        '--planet-color': p.color,
        '--planet-glow': p.glow,
      } as React.CSSProperties}
    >
      {/* Constellation overlay behind hero */}
      <div className="absolute top-0 left-0 right-0 h-[480px] overflow-hidden pointer-events-none">
        <ConstellationOverlay />
      </div>

      {/* Planet ambient glow — top-right */}
      <div
        className="pointer-events-none absolute -top-40 -right-32 rounded-full"
        style={{
          width: 520, height: 520,
          background: `radial-gradient(circle, ${p.glow.replace(/[\d.]+\)$/, '0.18)')} 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />
      {/* Complementary glow — bottom-left (always cool blue-purple) */}
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 rounded-full"
        style={{
          width: 560, height: 560,
          background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {children}

      {/* Planet bar footer */}
      <PlanetBar active={planet} />
    </div>
  )
}
