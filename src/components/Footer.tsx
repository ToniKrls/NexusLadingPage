export default function Footer() {
  const currentYear = new Date().getFullYear()

  const nav = [
    {
      heading: 'Produto',
      links: [
        { label: 'Funcionalidades', href: '#funcionalidades' },
        { label: 'Benefícios', href: '#beneficios' },
        { label: 'Planos', href: '#planos' },
        { label: 'Acessar sistema', href: '#' },
      ],
    },
    {
      heading: 'Suporte',
      links: [
        { label: 'Perguntas frequentes', href: '#faq' },
        // WhatsApp contact: pending — add link here when defined
      ],
    },
    {
      heading: 'Institucional',
      links: [
        // Add privacy policy, terms, and other institutional links here when available
        { label: 'Política de privacidade', href: '#' },
        { label: 'Termos de uso', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-slate-950 border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Nexus Comercial Logo"
                className="w-9 h-9 rounded-xl object-cover shadow-sm shrink-0 border border-white/10"
              />
              <span className="font-semibold text-base text-white tracking-tight">
                Nexus<span className="text-blue-400"> Comercial</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-56">
              Plataforma de gestão comercial para lojas de eletrônicos, compra e venda de aparelhos usados e assistências técnicas.
            </p>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {currentYear} Nexus Comercial. Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Desenvolvido para lojas de eletrônicos.
          </p>
        </div>
      </div>
    </footer>
  )
}

