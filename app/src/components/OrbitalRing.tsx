type Props = {
  size: number
  opacity?: number
  color?: string
  rotate?: number
  className?: string
  style?: React.CSSProperties
}

export default function OrbitalRing({
  size,
  opacity = 0.06,
  color = 'var(--accent, #f5f5ef)',
  rotate = 0,
  className = '',
  style = {},
}: Props) {
  const c = size / 2
  const r = size / 2 - 1
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      {/* Unit circle in ℂ — dashed orbit */}
      <circle
        cx={c}
        cy={c}
        r={r}
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      {/* Real / imaginary axes */}
      <line x1={c - r} y1={c} x2={c + r} y2={c} stroke={color} strokeOpacity={opacity * 0.7} strokeWidth="0.6" />
      <line x1={c} y1={c - r} x2={c} y2={c + r} stroke={color} strokeOpacity={opacity * 0.7} strokeWidth="0.6" />
      {/* 1 and i markers on the unit circle */}
      <circle cx={c + r} cy={c} r="2" fill={color} fillOpacity={opacity * 2.5} />
      <circle cx={c} cy={c - r} r="2" fill={color} fillOpacity={opacity * 2.5} />
    </svg>
  )
}
