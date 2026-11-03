import { ArrowRight, Check } from 'lucide-react'

const plans = [
  {
    name: 'Funcionalidade',
    tagline: 'Acesso individual',
    price: '49,90',
    cents: '90',
    whole: '49',
    description: 'Para quem precisa utilizar somente uma funcionalidade específica do Nexus Comercial.',
    features: [
      'Uma funcionalidade à sua escolha',
      'Acesso ao sistema',
      'Atualizações incluídas',
    ],
    cta: 'Conhecer plano',
    highlight: false,
    badge: null,
    accentBg: 'bg-slate-50',
    accentBorder: 'border-slate-200',
    ctaClass: 'bg-slate-900 hover:bg-slate-800 text-white',
    checkColor: 'text-blue-600',
    headerBg: 'bg-white',
  },
  {
    name: 'Gestão + OS',
    tagline: 'Gestão e assistência técnica',
    price: '79,90',
    cents: '90',
    whole: '79',
    description: 'O sistema de gestão comercial completo, com o módulo de Ordens de Serviço integrado.',
    features: [
      'Sistema de gestão comercial',
      'Módulo de Ordens de Serviço',
      'Controle de estoque',
      'PDV e registro de vendas',
      'Controle financeiro',
    ],
    cta: 'Conhecer plano',
    highlight: false,
    badge: null,
    accentBg: 'bg-slate-50',
    accentBorder: 'border-slate-200',
    ctaClass: 'bg-slate-900 hover:bg-slate-800 text-white',
    checkColor: 'text-blue-600',
    headerBg: 'bg-white',
  },
  {
    name: 'Completo',
    tagline: 'Tudo incluído',
    price: '99,90',
    cents: '90',
    whole: '99',
    description: 'Acesso a todas as funcionalidades da plataforma Nexus Comercial, sem limites.',
    features: [
      'Todas as funcionalidades',
      'Avaliação de aparelhos (Grau A/B/C)',
      'Gestão de estoque por IMEI',
      'PDV e controle de vendas',
      'Controle financeiro e caixa',
      'Ordens de serviço',
      'Relatórios e indicadores',
      'Múltiplas lojas e filiais',
      'Gestão de usuários e permissões',
    ],
    cta: 'Escolher plano Completo',
    highlight: true,
    badge: 'Mais completo',
    accentBg: 'bg-[#001a6e]',
    accentBorder: 'border-blue-700',
    ctaClass: 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg',
    checkColor: 'text-blue-400',
    headerBg: 'bg-[#001a6e]',
  },
]

export default function Pricing() {
  return (
    <section id="planos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="text-blue-700 text-xs font-semibold tracking-wide uppercase">Planos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Escolha o plano certo para sua operação
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Desde quem precisa de um recurso específico até quem quer centralizar toda a gestão da loja.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Valores em reais (BRL). Periodicidade de cobrança a ser confirmada.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 ${
                plan.highlight
                  ? 'border-blue-700 shadow-2xl shadow-blue-900/20 md:-mt-4 md:mb-4'
                  : 'border-slate-200 bg-white hover:shadow-lg hover:border-slate-300'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-500 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`p-7 pb-5 ${plan.highlight ? 'bg-[#001a6e]' : 'bg-white'}`}>
                <div className={`text-xs font-semibold tracking-wide uppercase mb-1 ${plan.highlight ? 'text-blue-400' : 'text-slate-500'}`}>
                  {plan.tagline}
                </div>
                <h3 className={`text-xl font-bold mb-5 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-1 mb-4">
                  <span className={`text-sm font-semibold ${plan.highlight ? 'text-blue-300' : 'text-slate-500'}`}>R$</span>
                  <span className={`text-5xl font-extrabold leading-none tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.whole}
                  </span>
                  <span className={`text-xl font-bold mb-0.5 ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                    ,{plan.cents}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-px ${plan.highlight ? 'bg-blue-700' : 'bg-slate-100'}`} />

              {/* Features */}
              <div className={`flex-1 p-7 ${plan.highlight ? 'bg-[#001a6e]' : 'bg-white'}`}>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${plan.checkColor}`}
                        strokeWidth={2.5}
                      />
                      <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-600'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className={`px-7 pb-7 ${plan.highlight ? 'bg-[#001a6e]' : 'bg-white'}`}>
                <a
                  href="#"
                  className={`flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-xl transition-all ${plan.ctaClass}`}
                >
                  {plan.cta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          Dúvidas sobre qual plano escolher?{' '}
          <span className="text-slate-500 font-medium">O canal de atendimento estará disponível em breve.</span>
        </p>
      </div>
    </section>
  )
}
