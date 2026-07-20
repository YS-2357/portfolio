import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',           glyph: '•', label: 'Home',       end: true  },
  { to: '/about',      glyph: 'ℕ', label: 'About',      end: false },
  { to: '/education',  glyph: 'ℤ', label: 'Education',  end: false },
  { to: '/experience', glyph: 'ℚ', label: 'Experience', end: false },
  { to: '/awards',     glyph: 'ℝ', label: 'Awards',     end: false },
  { to: '/projects',   glyph: 'ℂ', label: 'Projects',   end: false },
]

export default function Nav() {
  return (
    <>
    <a href="#main" className="skip-link">본문으로 건너뛰기</a>
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 'var(--nav-height)',
        background: 'rgba(7,12,24,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <NavLink to="/" className="text-sm font-bold tracking-widest" style={{ color: 'var(--color-solar)' }}>
        YS
      </NavLink>

      <ul className="hidden sm:flex items-center gap-4 lg:gap-7 list-none m-0 p-0">
        {NAV_LINKS.map(({ to, glyph, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => `nav-link inline-flex items-center gap-1.5${isActive ? ' active' : ''}`}
            >
              <span className="font-math" style={{ fontSize: '0.95em', opacity: 0.85 }}>{glyph}</span>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <a
        href="https://github.com/YS-2357"
        target="_blank"
        rel="noreferrer"
        className="text-xs font-medium transition-colors duration-150"
        style={{ color: 'var(--card-dim)' }}
      >
        GitHub ↗
      </a>
    </nav>
    </>
  )
}
