import { NavLink } from 'react-router-dom'
import Container from '../../layout/Container'
import logoExtensysIcon from '../../assets/images/logo-extensys-icon.png'

function Header() {
  const navLinkClass = ({ isActive }) =>
    `group relative pb-2 text-sm font-semibold transition-all duration-300 ${
      isActive ? 'text-orange-400' : 'text-slate-200 hover:text-orange-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1E3A]/95 text-white shadow-sm backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="group flex items-center gap-3">
          <img
            src={logoExtensysIcon}
            alt="Extensys Solutions"
            className="h-14 w-14 rounded-xl object-contain transition duration-300 group-hover:scale-105"
            draggable={false}
          />

          <div>
            <div className="text-xl font-bold tracking-tight">
              Extensys Solutions
            </div>

            <div className="text-xs uppercase tracking-[0.20em] text-slate-300">
              Software that empowers
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          {[
            ['/', 'Acasă'],
            ['/solutions', 'Soluții'],
            ['/about', 'Despre noi'],
            ['/contact', 'Contact'],
          ].map(([to, label]) => (
            <NavLink key={to} to={to} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute left-1/2 -bottom-[8px] h-[3px] rounded-full bg-orange-500 transition-all duration-300 ${
                      isActive
                        ? 'w-[115%] -translate-x-1/2'
                        : 'w-0 -translate-x-1/2 group-hover:w-[115%]'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40 md:inline-flex"
        >
          Solicită demo
        </NavLink>
      </Container>
    </header>
  )
}

export default Header