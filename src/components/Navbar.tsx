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
          ? 'bg-[#151514]/85 backdrop-blur-md border-b border-[#2A2A27] shadow-sm'
          : 'bg-[#151514]/50 backdrop-blur-sm border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Nexus Comercial Logo"
              className="w-8 h-8 rounded-lg object-cover border border-[#3A3A37] shadow-sm shrink-0"
            />
            <span className="font-semibold text-base tracking-tight text-[#FFFFFF]">
              Nexus Comercial
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-normal text-[#A3A39E] hover:text-[#FFFFFF] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-[#A3A39E] hover:text-[#FFFFFF] transition-colors px-2 py-1.5"
            >
              Acessar sistema
            </a>
            <a
              href="#planos"
              className="text-sm font-medium bg-[#F5F5F4] text-[#151514] hover:bg-[#FFFFFF] px-4 py-2 rounded-lg transition-all shadow-sm"
            >
              Conhecer planos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            className="md:hidden p-2 rounded-lg text-[#A3A39E] hover:text-[#FFFFFF] hover:bg-[#262624] transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#181817] border-b border-[#2A2A27] shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-normal text-[#A3A39E] hover:text-[#FFFFFF] hover:bg-[#262624] rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[#2A2A27] flex flex-col gap-2">
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-[#A3A39E] hover:text-[#FFFFFF] rounded-lg transition-colors text-center"
              >
                Acessar sistema
              </a>
              <a
                href="#planos"
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm font-medium bg-[#F5F5F4] text-[#151514] hover:bg-[#FFFFFF] rounded-lg transition-colors text-center"
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
