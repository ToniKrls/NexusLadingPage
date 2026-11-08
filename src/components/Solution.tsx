const complementaryFeatures = [
  {
    category: 'Balcão Comercial',
    title: 'PDV e registro de vendas',
    description: 'Conclusão ágil de vendas com suporte a múltiplos meios de pagamento, baixa automática do aparelho no estoque e emissão de comprovante ao cliente.',
  },
  {
    category: 'Financeiro',
    title: 'Fechamento diário e caixa',
    description: 'Controle de entradas e saídas por dinheiro, PIX e cartões. Facilita a conferência diária e assegura clareza sobre o faturamento do negócio.',
  },
  {
    category: 'Inteligência de Gestão',
    title: 'Relatórios e indicadores',
    description: 'Acompanhamento consolidado de vendas diárias, margens apuradas, giro de inventário e métricas essenciais para tomada de decisões.',
  },
  {
    category: 'Acesso e Segurança',
    title: 'Gestão de usuários e permissões',
    description: 'Perfis de acesso personalizados por colaborador (gerência, vendedores e técnicos), resguardando informações financeiras e dados sensíveis.',
  },
  {
    category: 'Conformidade',
    title: 'Comprovantes e termos formais',
    description: 'Geração padronizada de recibos de compra e venda, termos de garantia e comprovantes de entrega para resguardo jurídico da operação.',
  },
  {
    category: 'Organização Central',
    title: 'Cadastros e tabelas de preço',
    description: 'Registro centralizado de clientes, fornecedores parceiros, catálogo de peças e acessórios, com tabela de preços e descontos vigentes.',
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
            Recursos complementares para o dia a dia da sua loja.
          </h2>
          <p className="text-base sm:text-lg text-[#52524E] leading-relaxed">
            Além dos módulos centrais de avaliação, estoque, assistência técnica e filiais, o Nexus Comercial integra ferramentas administrativas essenciais para manter sua rotina organizada.
          </p>
        </div>

        {/* Modular Grid with refined surfaces */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complementaryFeatures.map((item) => (
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
      </div>
    </section>
  )
}
