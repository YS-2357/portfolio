import { Link } from 'react-router-dom'
import { PLANETS, PLANET_ORDER, type PlanetName } from '../data/planets'

type Props = { active: PlanetName }

const PLANET_LABELS: Record<PlanetName, string> = {
  sun:     '☀ Sun',
  mercury: 'Mercury',
  venus:   'Venus',
  earth:   'Earth',
  mars:    'Mars',
  jupiter: 'Jupiter',
  saturn:  'Saturn',
  uranus:  'Uranus',
  neptune: 'Neptune',
  pluto:   'Pluto',
}

const INTERNAL_LINKS: Partial<Record<PlanetName, string>> = {
  sun:     '/',
  mercury: '/projects',
  venus:   '/experience',
  earth:   '/education',
  mars:    '/awards',
  jupiter: '/about',
}

const EXTERNAL_LINKS: Partial<Record<PlanetName, string>> = {
  uranus:  'https://github.com/YS-2357',
  neptune: 'https://www.linkedin.com/in/youngsun-joung-5b0584345',
}

export default function PlanetBar({ active }: Props) {
  return (
    <div className="flex items-end justify-center gap-4 py-10 px-4">
      {PLANET_ORDER.map((name) => {
        const p = PLANETS[name]
        const isActive = name === active
        const internalHref = INTERNAL_LINKS[name]
        const externalHref = EXTERNAL_LINKS[name]
        const isLinked = !!(internalHref || externalHref)

        const dot = (
          <div
            style={{
              width:  p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
              opacity: isActive ? 1 : 0.25,
              boxShadow: isActive ? `0 0 ${p.size}px ${p.color}88, 0 0 ${p.size * 2}px ${p.color}44` : 'none',
              transition: 'opacity 0.3s ease, box-shadow 0.3s ease',
              flexShrink: 0,
            }}
          />
        )

        const label = (
          <span
            style={{
              fontSize: '0.55rem',
              letterSpacing: '0.08em',
              color: isActive ? p.color : 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
              fontWeight: 600,
              transition: 'color 0.3s ease',
            }}
          >
            {PLANET_LABELS[name]}
          </span>
        )

        const sharedStyle: React.CSSProperties = {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: isLinked ? 'pointer' : 'default',
          textDecoration: 'none',
        }

        if (internalHref) {
          return (
            <Link key={name} to={internalHref} style={sharedStyle} title={PLANET_LABELS[name]}>
              {dot}{label}
            </Link>
          )
        }

        if (externalHref) {
          return (
            <a key={name} href={externalHref} target="_blank" rel="noopener noreferrer" style={sharedStyle} title={PLANET_LABELS[name]}>
              {dot}{label}
            </a>
          )
        }

        return (
          <div key={name} style={sharedStyle} title="Pluto ♥">
            {dot}{label}
          </div>
        )
      })}
    </div>
  )
}
