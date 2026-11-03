import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Nexus Comercial Logo"
              className="w-9 h-9 rounded-xl object-cover shadow-sm shrink-0 border border-white/10"
            />
            <span className={`font-semibold text-base tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Nexus<span className="text-blue-500 font-bold"> Comercial</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className={`text-sm font-medium transition-colors px-3.5 py-2 rounded-md ${
                scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
              }`}
            >
              Acessar sistema
            </a>
            <a
              href="#planos"
              className="text-sm font-semibold bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Conhecer planos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#"
                className="px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-center"
              >
                Acessar sistema
              </a>
              <a
                href="#planos"
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors text-center"
              >
                Conhecer planos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

