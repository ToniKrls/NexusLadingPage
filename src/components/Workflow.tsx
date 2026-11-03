const steps = [
  {
    id: '01',
    label: 'Avaliação',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 12.5L11.5 15L15 10M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: 'Avalie o aparelho com critérios padronizados de grade, conservação e peças. Gere comprovante.',
    color: 'bg-blue-600',
    arrow: true,
  },
  {
    id: '02',
    label: 'Compra',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Registre a compra do aparelho com o valor calculado. O IMEI é vinculado automaticamente.',
    color: 'bg-indigo-600',
    arrow: true,
  },
  {
    id: '03',
    label: 'Estoque',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'O aparelho entra no estoque com custo, grade e histórico visíveis para toda a equipe autorizada.',
    color: 'bg-violet-600',
    arrow: true,
  },
  {
    id: '04',
    label: 'Venda',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: 'Registre a venda no PDV, escolha a forma de pagamento e baixe o aparelho do estoque.',
    color: 'bg-emerald-600',
    arrow: true,
  },
  {
    id: '05',
    label: 'Financeiro',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Acompanhe o caixa, registre movimentos e feche o dia com clareza sobre o resultado financeiro.',
    color: 'bg-amber-600',
    arrow: false,
  },
]

export default function Workflow() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="text-slate-600 text-xs font-semibold tracking-wide uppercase">Fluxo de operação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Do aparelho na mão ao{' '}
            <span className="text-blue-700">caixa fechado</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            O Nexus Comercial acompanha toda a jornada da operação — do primeiro contato com o aparelho até o registro financeiro da venda.
          </p>
        </div>

        {/* Flow steps */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {steps.map((step) => (
            <div key={step.id} className="flex lg:flex-col items-start lg:items-stretch gap-4 lg:gap-0 flex-1">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex-1 hover:shadow-md transition-shadow relative group">
                <div className="flex lg:flex-col items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${step.color} text-white flex items-center justify-center shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono mb-0.5">{step.id}</div>
                    <h3 className="font-semibold text-slate-900 mb-2">{step.label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed hidden sm:block">{step.desc}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed sm:hidden mt-3">{step.desc}</p>
              </div>
              {/* Arrow connector (desktop only) */}
              {step.arrow && (
                <div className="hidden lg:flex items-center justify-center px-1 shrink-0 self-center">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-slate-300">
                    <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* OS callout */}
        <div className="mt-10 bg-slate-900 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-14 h-14 bg-blue-700/20 border border-blue-600/30 rounded-2xl flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-blue-400">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="9" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg mb-1">Assistência Técnica — Ordens de Serviço integradas</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Para estabelecimentos com assistência técnica, o Nexus Comercial inclui gerenciamento completo de ordens de serviço: abertura, acompanhamento e histórico, integrado ao restante da operação.
            </p>
          </div>
          <a
            href="#planos"
            className="shrink-0 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Ver planos
          </a>
        </div>
      </div>
    </section>
  )
}

