const problems = [
  {
    num: '01',
    title: 'Avaliações sem padronização',
    desc: 'Cada vendedor avalia de um jeito diferente, gerando inconsistências nos valores de compra e comprometendo a margem do negócio.',
  },
  {
    num: '02',
    title: 'Estoque desorganizado e sem rastreio',
    desc: 'Aparelhos sem identificação individual, IMEI anotado em papéis ou planilhas avulsas, dificultando saber o que está realmente disponível.',
  },
  {
    num: '03',
    title: 'Informações e ferramentas fragmentadas',
    desc: 'Planilhas, anotações e mensagens dispersas. Vendas em um lugar, financeiro em outro e ordens de serviço sem histórico centralizado.',
  },
  {
    num: '04',
    title: 'Fechamento de caixa impreciso',
    desc: 'Sem separação rigorosa por formas de pagamento e sem conferência diária rápida, o resultado real do dia torna-se incerto.',
  },
  {
    num: '05',
    title: 'Ordens de serviço sem controle',
    desc: 'Ordens técnicas anotadas em blocos, sem registro formal de peças aplicadas, status de bancada ou previsão de entrega ao cliente.',
  },
  {
    num: '06',
    title: 'Acessos e filiais sem controle',
    desc: 'Dificuldade para delegar tarefas a colaboradores sem expor dados financeiros e para gerenciar estoque entre múltiplas lojas.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-24 md:py-32 bg-[#F9F9F8] border-b border-[#E6E6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#73736E] mb-3 block">
            Cenário Operacional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#1D1D1B] leading-tight mb-5">
            Gerenciar compra, venda e assistência em ferramentas separadas custa tempo e margem.
          </h2>
          <p className="text-base sm:text-lg text-[#52524E] leading-relaxed">
            A rotina de uma loja de eletrônicos exige decisões rápidas de avaliação, conferência detalhada e controle técnico constante. Quando esses processos dependem de controles manuais, as falhas se acumulam.
          </p>
        </div>

        {/* Structured Grid with subtle depth cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.num}
              className="bg-[#FFFFFF] rounded-xl border border-[#E6E6E3] p-7 shadow-subtle hover:shadow-card hover:border-[#D5D5D0] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#A3A39E] tracking-wider mb-3 block">
                  {p.num}
                </span>
                <h3 className="text-base font-semibold text-[#1D1D1B] tracking-tight mb-2.5">
                  {p.title}
                </h3>
                <p className="text-sm text-[#73736E] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="mt-16 bg-[#FFFFFF] rounded-xl border border-[#E6E6E3] p-8 sm:p-10 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#73736E] mb-1 block">
              Próximo passo
            </span>
            <p className="text-lg md:text-xl font-medium text-[#1D1D1B]">
              O Nexus Comercial foi projetado para substituir o improviso por um método único e estruturado.
            </p>
          </div>
          <a
            href="#beneficios"
            className="inline-flex items-center text-sm font-semibold text-[#151514] hover:text-[#52524E] transition-colors gap-2 shrink-0 bg-[#F5F5F4] hover:bg-[#EFEFEA] px-5 py-3 rounded-lg border border-[#E6E6E3]"
          >
            Conhecer a solução
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
