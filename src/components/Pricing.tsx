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
    <section id="planos" className="py-24 md:py-32 bg-[#F9F9F8] border-b border-[#E6E6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#73736E] mb-3 block">
            Planos Comerciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#1D1D1B] leading-tight mb-5">
            Planos transparentes para cada estágio da sua loja.
          </h2>
          <p className="text-base sm:text-lg text-[#52524E] leading-relaxed">
            Escolha a modalidade adequada para a sua estrutura operacional.
          </p>
          <span className="text-xs font-mono text-[#73736E] mt-3 block">
            * Valores em reais (BRL). Periodicidade de cobrança a ser confirmada.
          </span>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 ${
                p.highlight
                  ? 'bg-[#181817] text-[#FFFFFF] border border-[#2F2F2C] shadow-ambient'
                  : 'bg-[#FFFFFF] text-[#1D1D1B] border border-[#E6E6E3] shadow-card hover:shadow-elevated hover:border-[#D5D5D0]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono uppercase tracking-wider ${
                    p.highlight ? 'text-[#A3A39E]' : 'text-[#73736E]'
                  }`}>
                    {p.tagline}
                  </span>
                  {p.highlight && (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFFFFF] border border-[#3A3A37] bg-[#222220] px-2.5 py-1 rounded">
                      Mais abrangente
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-semibold tracking-tight mb-4 ${
                  p.highlight ? 'text-[#FFFFFF]' : 'text-[#1D1D1B]'
                }`}>
                  {p.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-sm font-medium ${
                    p.highlight ? 'text-[#A3A39E]' : 'text-[#73736E]'
                  }`}>
                    R$
                  </span>
                  <span className={`text-4xl sm:text-5xl font-semibold tracking-tight ${
                    p.highlight ? 'text-[#FFFFFF]' : 'text-[#1D1D1B]'
                  }`}>
                    {p.price}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-8 ${
                  p.highlight ? 'text-[#A3A39E]' : 'text-[#52524E]'
                }`}>
                  {p.description}
                </p>

                <div className={`border-t mb-8 ${
                  p.highlight ? 'border-[#2A2A27]' : 'border-[#EAEAEA]'
                }`} />

                {/* Features List */}
                <ul className="space-y-3.5 mb-10">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          p.highlight ? 'text-[#FFFFFF]' : 'text-[#1D1D1B]'
                        }`}
                        strokeWidth={2}
                      />
                      <span className={`text-sm leading-snug ${
                        p.highlight ? 'text-[#D5D5D0]' : 'text-[#52524E]'
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
                  className={`w-full inline-flex items-center justify-center font-medium text-sm py-3.5 px-4 rounded-lg transition-all ${
                    p.highlight
                      ? 'bg-[#F5F5F4] text-[#151514] hover:bg-[#FFFFFF] shadow-md'
                      : 'bg-[#1D1D1B] text-[#FFFFFF] hover:bg-[#2A2A27]'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[#73736E]">
            Estrutura comercial preparada para futuras configurações adicionais de faturamento.
          </p>
        </div>
      </div>
    </section>
  )
}
