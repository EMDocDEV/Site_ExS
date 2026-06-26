import { NavLink } from 'react-router-dom'
import Container from '../../layout/Container'

function Header() {
  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 ${
      isActive ? 'text-orange-400' : 'text-slate-200 hover:text-orange-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1E3A]/95 text-white shadow-sm backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/50 bg-white/10 text-sm font-bold text-orange-400">
            ES
          </div>

          <div>
            <div className="text-xl font-bold tracking-tight">
              Extensys Solutions
            </div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-300">
              Software that empowers
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Acasă
          </NavLink>

          <NavLink to="/solutions" className={navLinkClass}>
            Soluții
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            Despre noi
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <NavLink
          to="/contact"
          className="hidden rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 md:inline-flex"
        >
          Solicită demo
        </NavLink>
      </Container>
    </header>
  )
}

export default Header