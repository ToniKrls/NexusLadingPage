const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 12.5L11.5 15L15 10M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Avaliação padronizada',
    desc: 'Critérios claros de grau A, B e C com cálculo automático de desconto por estado de conservação e peças a substituir.',
    color: 'bg-blue-600',
    bgLight: 'bg-blue-50',
    textLight: 'text-blue-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M20 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 3H8M12 12v3M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Controle de estoque',
    desc: 'Cada aparelho rastreado pelo IMEI, com histórico completo, custo de entrada e valor de venda sugerido.',
    color: 'bg-emerald-600',
    bgLight: 'bg-emerald-50',
    textLight: 'text-emerald-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'PDV e vendas',
    desc: 'Registro de vendas integrado ao estoque, com formas de pagamento e emissão de documentos.',
    color: 'bg-violet-600',
    bgLight: 'bg-violet-50',
    textLight: 'text-violet-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Financeiro organizado',
    desc: 'Fechamento de caixa diário com registro de formas de pagamento e visibilidade do resultado da operação.',
    color: 'bg-amber-600',
    bgLight: 'bg-amber-50',
    textLight: 'text-amber-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Ordens de serviço',
    desc: 'Controle completo das OS da assistência técnica, com registro, acompanhamento e histórico por cliente.',
    color: 'bg-cyan-600',
    bgLight: 'bg-cyan-50',
    textLight: 'text-cyan-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 9l-5 5-3-3-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Relatórios e indicadores',
    desc: 'Acompanhe os principais indicadores do negócio com relatórios que facilitam a tomada de decisão.',
    color: 'bg-rose-600',
    bgLight: 'bg-rose-50',
    textLight: 'text-rose-600',
  },
]

export default function Solution() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-blue-700 text-xs font-semibold tracking-wide uppercase">A solução</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Nexus Comercial — tudo que sua loja precisa,{' '}
            <span className="text-blue-700">em um único sistema</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Uma plataforma construída para a realidade das lojas de eletrônicos, com ferramentas que cobrem desde a avaliação do aparelho até o fechamento do caixa.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl ${b.bgLight} ${b.textLight} flex items-center justify-center mb-5`}>
                {b.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 text-base">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Extra: Multi-store + Users */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Múltiplas lojas e filiais</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Gerencie unidades separadas, visualize o estoque de cada loja e realize transferências entre filiais.</p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Gestão de usuários e permissões</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Defina o nível de acesso de cada colaborador e mantenha o controle sobre as informações sensíveis da operação.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

