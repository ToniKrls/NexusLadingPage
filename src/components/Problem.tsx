const problems = [
  {
    num: '01',
    title: 'Avaliações sem padronização',
    desc: 'Cada vendedor avalia de um jeito diferente, gerando inconsistências nos valores de compra e comprometendo a margem do negócio.',
  },
  {
    num: '02',
    title: 'Estoque desorganizado e sem rastreio',
    desc: 'Aparelhos sem identificação individual, IMEI registrado em planilhas ou cadernos, e perda de tempo ao localizar itens.',
  },
  {
    num: '03',
    title: 'Informações e ferramentas fragmentadas',
    desc: 'Planilhas, mensagens e controles manuais espalhados. Vendas em um lugar, ordens de serviço em outro e visão financeira nula.',
  },
  {
    num: '04',
    title: 'Fechamento de caixa impreciso',
    desc: 'Sem separação clara por forma de pagamento e sem conferência diária rápida, o resultado real do dia torna-se incerto.',
  },
  {
    num: '05',
    title: 'Ordens de serviço sem histórico',
    desc: 'Atendimentos técnicos registrados sem controle formal de peças aplicadas, status da bancada ou rastreabilidade por cliente.',
  },
  {
    num: '06',
    title: 'Acessos e filiais sem controle',
    desc: 'Dificuldade para delegar tarefas a colaboradores sem expor dados financeiros e para gerenciar estoque entre múltiplas lojas.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3 block">
            Desafios Operacionais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-tight mb-5">
            Gerenciar compra, venda e assistência em ferramentas separadas custa tempo e margem.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            A rotina de uma loja de eletrônicos exige decisões rápidas de compra, conferência detalhada e controle técnico constante. Quando esses processos dependem de controles manuais, as falhas operacionais se acumulam.
          </p>
        </div>

        {/* Structured Grid with subtle dividers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 pt-8 border-t border-[#D9D9D9]">
          {problems.map((p) => (
            <div key={p.num} className="flex flex-col">
              <span className="font-mono text-xs text-[#737373] tracking-wider mb-3">
                {p.num}
              </span>
              <h3 className="text-base font-semibold text-[#111111] tracking-tight mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="mt-20 pt-10 border-t border-[#D9D9D9] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-lg md:text-xl font-medium text-[#111111] max-w-2xl">
            O Nexus Comercial foi projetado para substituir o improviso por um método único e estruturado.
          </p>
          <a
            href="#beneficios"
            className="inline-flex items-center text-sm font-medium text-[#111111] hover:text-[#737373] transition-colors gap-1.5 shrink-0"
          >
            Conhecer a solução
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
