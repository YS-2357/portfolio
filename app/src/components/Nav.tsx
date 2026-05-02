import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',           label: 'Home',       end: true },
  { to: '/projects',   label: 'Projects',   end: false },
  { to: '/experience', label: 'Experience', end: false },
  { to: '/education',  label: 'Education',  end: false },
  { to: '/awards',     label: 'Awards',     end: false },
  { to: '/about',      label: 'About',      end: false },
]

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 'var(--nav-height)',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <NavLink
        to="/"
        className="text-sm font-bold tracking-widest"
        style={{ color: 'var(--color-solar)' }}
      >
        YS
      </NavLink>

      <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
        {NAV_LINKS.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
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
        style={{ color: '#64748b' }}
      >
        GitHub ↗
      </a>
    </nav>
  )
}
