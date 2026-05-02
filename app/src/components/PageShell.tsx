import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function PageShell({ children, className = '' }: Props) {
  return (
    <div
      className={`min-h-screen relative overflow-hidden ${className}`}
      style={{ paddingTop: 'var(--nav-height)', background: 'var(--page-bg)' }}
    >
      {/* Subtle warm glow top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-24 rounded-full"
        style={{
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(242,193,78,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle earth glow bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 rounded-full"
        style={{
          width: 560, height: 560,
          background: 'radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
