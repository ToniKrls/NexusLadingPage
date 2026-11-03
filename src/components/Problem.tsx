const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Avaliações sem padrão',
    desc: 'Cada vendedor avalia de um jeito diferente, gerando inconsistências nos valores de compra e dificultando a rentabilidade da operação.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Estoque desorganizado',
    desc: 'Aparelhos sem rastreamento, IMEI anotado em planilhas ou papéis, dificuldade para saber o que tem disponível e por quanto foi comprado.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17.5 14v7M14 17.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Informações espalhadas',
    desc: 'Planilhas, anotações, sistemas separados — vendas em um lugar, financeiro em outro, OS em outro. Nada integrado e tudo difícil de acompanhar.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Caixa e financeiro imprecisos',
    desc: 'Sem um fechamento de caixa claro e registro das formas de pagamento, fica difícil saber exatamente o resultado do dia.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7l-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 3v4h4M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'OS sem controle',
    desc: 'Ordens de serviço anotadas em caderno, sem histórico do cliente, sem acompanhamento do status e sem previsão de entrega documentada.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Gestão de equipe difícil',
    desc: 'Sem controle de acesso por funcionário, qualquer colaborador pode ver ou editar informações que deveriam ser restritas.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-red-600 text-xs font-semibold tracking-wide uppercase">O cenário atual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Gerenciar uma loja de eletrônicos é{' '}
            <span className="text-red-500">mais difícil do que parece</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Avaliações, compras, estoque, vendas, financeiro e assistência técnica ao mesmo tempo — e quase tudo feito de forma manual ou em ferramentas separadas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                {p.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Transition bridge */}
        <div className="mt-14 bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white text-center">
          <p className="text-xl font-semibold mb-2">Existe uma forma melhor de operar.</p>
          <p className="text-blue-200 text-base">
            O Nexus Comercial foi desenvolvido para centralizar todos esses processos em uma plataforma única, organizada e fácil de usar.
          </p>
        </div>
      </div>
    </section>
  )
}

