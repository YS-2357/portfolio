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
  color = '#f2c14e',
  rotate = 0,
  className = '',
  style = {},
}: Props) {
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
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 1}
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1"
        strokeDasharray="4 8"
      />
    </svg>
  )
}
