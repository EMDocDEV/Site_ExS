import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import Container from '../../layout/Container'
import logoExtensysIcon from '../../assets/images/logo-extensys-icon.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    ['/', 'Acasă'],
    ['/solutions', 'Soluții'],
    ['/about', 'Despre noi'],
    ['/contact', 'Contact'],
  ]

  const navLinkClass = ({ isActive }) =>
    `group relative pb-2 text-sm font-semibold transition-all duration-300 ${
      isActive ? 'text-orange-400' : 'text-slate-200 hover:text-orange-400'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `rounded-xl px-4 py-3 text-base font-semibold transition ${
      isActive
        ? 'bg-orange-500 text-white'
        : 'text-slate-100 hover:bg-white/10 hover:text-orange-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1E3A]/95 text-white shadow-sm backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src={logoExtensysIcon}
            alt="Extensys Solutions"
            className="h-14 w-14 rounded-xl object-contain transition duration-300 group-hover:scale-105"
            draggable={false}
          />

          <div>
            <div className="text-xl font-bold tracking-tight">Extensys Solutions</div>
            <div className="text-xs uppercase tracking-[0.20em] text-slate-300">
              Software that empowers
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([to, label]) => (
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

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white md:hidden"
          aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0F1E3A] md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center text-base font-bold text-white"
            >
              Solicită demo
            </NavLink>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Header