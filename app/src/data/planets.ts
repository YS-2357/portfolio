export const PLANETS = {
  sun:     { color: '#f2c14e', glow: 'rgba(242,193,78,0.14)',    size: 16 },
  mercury: { color: '#94a3b8', glow: 'rgba(148,163,184,0.12)',   size: 10 },
  venus:   { color: '#e8c87a', glow: 'rgba(232,200,122,0.12)',   size: 9  },
  earth:   { color: '#60a5fa', glow: 'rgba(96,165,250,0.14)',    size: 10 },
  mars:    { color: '#f87171', glow: 'rgba(248,113,113,0.14)',   size: 7  },
  jupiter: { color: '#fb923c', glow: 'rgba(251,146,60,0.14)',    size: 22 },
  saturn:  { color: '#fbbf24', glow: 'rgba(251,191,36,0.12)',    size: 18 },
  uranus:  { color: '#67e8f9', glow: 'rgba(103,232,249,0.12)',   size: 13 },
  neptune: { color: '#818cf8', glow: 'rgba(129,140,248,0.12)',   size: 12 },
  pluto:   { color: '#c4a97d', glow: 'rgba(196,169,125,0.10)',   size: 7  },
} as const

export type PlanetName = keyof typeof PLANETS

// Ordered for display in PlanetBar (distance from sun)
export const PLANET_ORDER: PlanetName[] = [
  'sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto',
]
