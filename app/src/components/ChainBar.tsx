import { Link } from 'react-router-dom'
import { SYSTEMS, CHAIN_ORDER, EXTENSION_ORDER, type SystemName } from '../data/numbers'

type Props = { active: SystemName }

// Where each number system points.
const INTERNAL_LINKS: Partial<Record<SystemName, string>> = {
  natural:  '/about',
  integer:  '/education',
  rational: '/experience',
  real:     '/awards',
  complex:  '/projects',
}

const EXTERNAL_LINKS: Partial<Record<SystemName, string>> = {
  quaternion: 'https://github.com/YS-2357',
  octonion:   'https://www.linkedin.com/in/youngsun-joung-5b0584345',
}

const EXTERNAL_LABELS: Partial<Record<SystemName, string>> = {
  quaternion: 'GitHub',
  octonion:   'LinkedIn',
}

function Node({ name, active }: { name: SystemName; active: boolean }) {
  const s = SYSTEMS[name]
  const internalHref = INTERNAL_LINKS[name]
  const externalHref = EXTERNAL_LINKS[name]

  const inner = (
    <span
      className="flex flex-col items-center gap-1"
      style={{ textDecoration: 'none' }}
    >
      <span
        className="font-math leading-none"
        style={{
          fontSize: s.size,
          color: active ? s.color : 'rgba(245,245,239,0.28)',
          textShadow: active ? `0 0 14px ${s.glow}, 0 0 28px ${s.glow}` : 'none',
          transition: 'color 0.3s ease, text-shadow 0.3s ease',
        }}
      >
        {s.glyph}
      </span>
      <span
        style={{
          fontSize: '0.5rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 600,
          color: active ? s.color : 'rgba(245,245,239,0.2)',
          transition: 'color 0.3s ease',
        }}
      >
        {s.label}
      </span>
    </span>
  )

  if (internalHref) {
    return <Link to={internalHref} title={s.label}>{inner}</Link>
  }
  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer" title={s.label} aria-label={EXTERNAL_LABELS[name] ?? s.label}>
        {inner}
      </a>
    )
  }
  return <span title={s.label}>{inner}</span>
}

function Sep({ symbol }: { symbol: string }) {
  return (
    <span
      className="font-math self-start"
      style={{ fontSize: 18, color: 'rgba(245,245,239,0.22)', marginTop: 2 }}
      aria-hidden="true"
    >
      {symbol}
    </span>
  )
}

export default function ChainBar({ active }: Props) {
  return (
    <div className="pb-8">
    <div className="flex flex-wrap items-end justify-center gap-3 sm:gap-4 pt-10 pb-4 px-4">
      {/* Origin — Home */}
      <Link to="/" title="Home" className="flex flex-col items-center gap-1">
        <span
          className="font-math leading-none"
          style={{
            fontSize: 18,
            color: active === 'overview' ? '#f5f5ef' : 'rgba(245,245,239,0.28)',
            textShadow: active === 'overview' ? '0 0 14px rgba(245,245,239,0.4)' : 'none',
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
          }}
        >
          •
        </span>
        <span
          style={{
            fontSize: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
            color: active === 'overview' ? '#f5f5ef' : 'rgba(245,245,239,0.2)',
            transition: 'color 0.3s ease',
          }}
        >
          Home
        </span>
      </Link>

      <Sep symbol="⊢" />

      {/* Inclusion chain ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ */}
      {CHAIN_ORDER.map((name, i) => (
        <span key={name} className="flex items-end gap-3 sm:gap-4">
          {i > 0 && <Sep symbol="⊂" />}
          <Node name={name} active={name === active} />
        </span>
      ))}

      <Sep symbol="⟶" />

      {/* Extensions beyond ℂ */}
      {EXTENSION_ORDER.map((name) => (
        <Node key={name} name={name} active={name === active} />
      ))}
    </div>

    {/* Plain-text contact links — the ℍ/𝕆 symbols above point to the same places */}
    <div className="flex justify-center gap-4 text-xs" style={{ color: 'rgba(245,245,239,0.45)' }}>
      <a href={EXTERNAL_LINKS.quaternion} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>GitHub ↗</a>
      <a href={EXTERNAL_LINKS.octonion} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>LinkedIn ↗</a>
    </div>
    </div>
  )
}
