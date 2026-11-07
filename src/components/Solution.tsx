const coreCapabilities = [
  {
    category: 'Aquisição & Entrada',
    title: 'Avaliação técnica padronizada',
    description: 'Parâmetros objetivos de Grade A, B e C, abatimento automático por peças a trocar e cálculo preciso do preço de compra e teto de revenda.',
  },
  {
    category: 'Rastreabilidade',
    title: 'Controle de estoque por IMEI',
    description: 'Identificação individual de cada aparelho com validação de formato de IMEI e número de série, custo de entrada e histórico de movimentações.',
  },
  {
    category: 'Operação Comercial',
    title: 'PDV e registro de vendas',
    description: 'Conclusão de vendas integrada ao estoque da loja, com suporte a múltiplas formas de pagamento e emissão de comprovantes.',
  },
  {
    category: 'Gestão Financeira',
    title: 'Fechamento diário e caixa',
    description: 'Registro de entradas e saídas por meio de pagamento, facilitando a conferência diária e a clareza sobre os resultados da loja.',
  },
  {
    category: 'Assistência Técnica',
    title: 'Ordens de serviço estruturadas',
    description: 'Acompanhamento do fluxo de reparos desde a entrada do aparelho até a entrega ao cliente, com histórico dos serviços realizados.',
  },
  {
    category: 'Decisão Estratégica',
    title: 'Relatórios e indicadores',
    description: 'Acompanhamento consolidado de vendas, margens, aparelhos em estoque e produtividade do estabelecimento.',
  },
]

export default function Solution() {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-[#EFEFEA] border-b border-[#E0E0DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#73736E] mb-3 block">
            A Plataforma
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#1D1D1B] leading-tight mb-5">
            Nexus Comercial — tudo que sua loja precisa, em um único sistema.
          </h2>
          <p className="text-base sm:text-lg text-[#52524E] leading-relaxed">
            Desenvolvido exclusivamente para a dinâmica de compra, venda e assistência de eletrônicos, integrando todas as etapas em uma experiência unificada.
          </p>
        </div>

        {/* Modular Grid with refined surfaces */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((item) => (
            <div
              key={item.title}
              className="bg-[#FFFFFF] rounded-xl border border-[#E0E0DC] p-8 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#73736E] mb-3 block">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-[#1D1D1B] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#52524E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-store & User Permissions Row */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E0E0DC] p-8 shadow-subtle">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#73736E] mb-2 block">
              Multiunidades
            </span>
            <h4 className="text-base font-semibold text-[#1D1D1B] mb-2">
              Múltiplas lojas e filiais
            </h4>
            <p className="text-sm text-[#52524E] leading-relaxed">
              Monitore os estoques de matriz e filiais separadamente, com controle de transferências internas entre estoques.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl border border-[#E0E0DC] p-8 shadow-subtle">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#73736E] mb-2 block">
              Governança
            </span>
            <h4 className="text-base font-semibold text-[#1D1D1B] mb-2">
              Gestão de usuários e permissões
            </h4>
            <p className="text-sm text-[#52524E] leading-relaxed">
              Defina com precisão quais colaboradores podem avaliar aparelhos, registrar vendas, movimentar estoque ou visualizar o caixa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
