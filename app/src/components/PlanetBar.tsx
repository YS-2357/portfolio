import { PLANETS, PLANET_ORDER, type PlanetName } from '../data/planets'

type Props = { active: PlanetName }

const PLANET_LABELS: Record<PlanetName, string> = {
  sun:     'Sun',
  mercury: 'Mercury',
  venus:   'Venus',
  earth:   'Earth',
  mars:    'Mars',
  jupiter: 'Jupiter',
  saturn:  'Saturn',
  uranus:  'Uranus',
  neptune: 'Neptune',
}

export default function PlanetBar({ active }: Props) {
  return (
    <div className="flex items-end justify-center gap-4 py-10 px-4" aria-hidden="true">
      {PLANET_ORDER.map((name) => {
        const p = PLANETS[name]
        const isActive = name === active
        return (
          <div key={name} className="flex flex-col items-center gap-1.5">
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
          </div>
        )
      })}
    </div>
  )
}
