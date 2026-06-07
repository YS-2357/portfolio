import type { ReactNode } from 'react'
import { SYSTEMS, type SystemName } from '../data/numbers'
import CommutativeDiagram from './CommutativeDiagram'
import ChainBar from './ChainBar'

type Props = {
  children: ReactNode
  system?: SystemName
  className?: string
}

export default function PageShell({ children, system = 'overview', className = '' }: Props) {
  const s = SYSTEMS[system]

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${className}`}
      style={{
        paddingTop: 'var(--nav-height)',
        '--accent': s.color,
        '--accent-glow': s.glow,
      } as React.CSSProperties}
    >
      {/* Commutative-diagram overlay behind hero */}
      <div className="absolute top-0 left-0 right-0 h-[480px] overflow-hidden pointer-events-none">
        <CommutativeDiagram />
      </div>

      {/* Accent ambient glow — top-right */}
      <div
        className="pointer-events-none absolute -top-40 -right-32 rounded-full"
        style={{
          width: 520, height: 520,
          background: `radial-gradient(circle, ${s.glow.replace(/[\d.]+\)$/, '0.18)')} 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />
      {/* Complementary glow — bottom-left (cool chalk-violet) */}
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 rounded-full"
        style={{
          width: 560, height: 560,
          background: 'radial-gradient(circle, rgba(185,160,240,0.06) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {children}

      {/* Inclusion-chain footer */}
      <ChainBar active={system} />
    </div>
  )
}
