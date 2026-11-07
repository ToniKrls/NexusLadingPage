import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Funcionalidade individual',
    tagline: 'Módulo específico',
    price: '49,90',
    description: 'Para estabelecimentos que demandam apenas uma funcionalidade específica da plataforma.',
    features: [
      'Uma funcionalidade à sua escolha',
      'Acesso ao sistema web',
      'Atualizações incluídas',
    ],
    cta: 'Contratar plano',
    highlight: false,
  },
  {
    name: 'Gestão + OS',
    tagline: 'Operação e oficina',
    price: '79,90',
    description: 'Combina a gestão comercial do negócio com o controle completo de Ordens de Serviço.',
    features: [
      'Sistema de gestão comercial',
      'Módulo de Ordens de Serviço (OS)',
      'Controle de estoque por aparelho',
      'PDV e registro de vendas',
      'Controle financeiro diário',
    ],
    cta: 'Contratar plano',
    highlight: false,
  },
  {
    name: 'Completo',
    tagline: 'Operação unificada',
    price: '99,90',
    description: 'O pacote integral do Nexus Comercial com todos os módulos e recursos disponibilizados.',
    features: [
      'Todas as funcionalidades da plataforma',
      'Avaliação padronizada de aparelhos',
      'Controle de estoque por IMEI',
      'PDV e fechamento de caixa diário',
      'Sistema de Ordens de Serviço',
      'Relatórios e indicadores de desempenho',
      'Gestão de múltiplas lojas e filiais',
      'Controle de usuários e permissões',
    ],
    cta: 'Escolher plano Completo',
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="planos" className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3 block">
            Planos Comerciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] leading-tight mb-5">
            Planos transparentes para cada estágio da sua loja.
          </h2>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Escolha a modalidade adequada para a sua estrutura operacional.
          </p>
          <span className="text-xs font-mono text-[#737373] mt-3 block">
            * Valores em reais (BRL). Periodicidade de cobrança a ser confirmada.
          </span>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-8 md:p-10 flex flex-col justify-between transition-colors ${
                p.highlight
                  ? 'bg-[#111111] text-[#FFFFFF] border border-[#111111]'
                  : 'bg-[#FFFFFF] text-[#111111] border border-[#D9D9D9]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono uppercase tracking-wider ${
                    p.highlight ? 'text-[#737373]' : 'text-[#737373]'
                  }`}>
                    {p.tagline}
                  </span>
                  {p.highlight && (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFFFFF] border border-[#333333] px-2 py-0.5">
                      Mais abrangente
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-semibold tracking-tight mb-4 ${
                  p.highlight ? 'text-[#FFFFFF]' : 'text-[#111111]'
                }`}>
                  {p.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-sm font-medium ${
                    p.highlight ? 'text-[#737373]' : 'text-[#737373]'
                  }`}>
                    R$
                  </span>
                  <span className={`text-4xl sm:text-5xl font-semibold tracking-tight ${
                    p.highlight ? 'text-[#FFFFFF]' : 'text-[#111111]'
                  }`}>
                    {p.price}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-8 ${
                  p.highlight ? 'text-[#737373]' : 'text-[#737373]'
                }`}>
                  {p.description}
                </p>

                <div className={`border-t mb-8 ${
                  p.highlight ? 'border-[#262626]' : 'border-[#D9D9D9]'
                }`} />

                {/* Features List */}
                <ul className="space-y-3.5 mb-10">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          p.highlight ? 'text-[#FFFFFF]' : 'text-[#111111]'
                        }`}
                        strokeWidth={2}
                      />
                      <span className={`text-sm leading-snug ${
                        p.highlight ? 'text-[#D9D9D9]' : 'text-[#333333]'
                      }`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#"
                  className={`w-full inline-flex items-center justify-center font-medium text-sm py-3 px-4 rounded-md transition-colors ${
                    p.highlight
                      ? 'bg-[#FFFFFF] text-[#111111] hover:bg-[#E5E5E5]'
                      : 'bg-[#111111] text-[#FFFFFF] hover:bg-[#262626]'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing clarification */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[#737373]">
            Estrutura comercial preparada para futuras configurações adicionais de faturamento.
          </p>
        </div>
      </div>
    </section>
  )
}
