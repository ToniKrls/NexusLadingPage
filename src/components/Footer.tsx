export default function Footer() {
  const currentYear = new Date().getFullYear()

  const nav = [
    {
      heading: 'Navegação',
      links: [
        { label: 'Funcionalidades', href: '#funcionalidades' },
        { label: 'Benefícios', href: '#beneficios' },
        { label: 'Planos comerciais', href: '#planos' },
        { label: 'Acessar sistema', href: '#' },
      ],
    },
    {
      heading: 'Suporte',
      links: [
        { label: 'Perguntas frequentes', href: '#faq' },
        // Contato via WhatsApp pendente de definição formal
      ],
    },
    {
      heading: 'Institucional',
      links: [
        { label: 'Termos de uso', href: '#' },
        { label: 'Privacidade de dados', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-[#111110] text-[#FFFFFF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#262624]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Nexus Comercial Logo"
                className="w-8 h-8 rounded-lg object-cover border border-[#3A3A37] shadow-sm shrink-0"
              />
              <span className="font-semibold text-base tracking-tight text-[#FFFFFF]">
                Nexus Comercial
              </span>
            </a>
            <p className="text-sm text-[#A3A39E] leading-relaxed max-w-sm mb-4">
              Plataforma de gestão comercial integrada para lojas de eletrônicos, compra e venda de usados e assistências técnicas.
            </p>
            <span className="text-xs font-mono text-[#73736E] block">
              Sua loja inteira. Sob controle. Em um só lugar.
            </span>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#D5D5D0] mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[#A3A39E] hover:text-[#FFFFFF] transition-colors"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#73736E]">
            &copy; {currentYear} Nexus Comercial. Todos os direitos reservados.
          </p>
          <p className="text-xs font-mono text-[#73736E]">
            Desenvolvido para operações de compra, venda e manutenção de eletrônicos.
          </p>
        </div>
      </div>
    </footer>
  )
}
