const steps = [
  {
    step: '01',
    title: 'Avaliação',
    desc: 'O cliente traz o aparelho. O sistema aplica os critérios de grade, desvalorização e peças a trocar para calcular o valor de compra.',
  },
  {
    step: '02',
    title: 'Compra',
    desc: 'Fechada a negociação, o sistema gera o termo de compra e cadastra o aparelho associado ao seu IMEI.',
  },
  {
    step: '03',
    title: 'Estoque',
    desc: 'O dispositivo entra no estoque com custo de aquisição registrado e preço de venda sugerido para a equipe comercial.',
  },
  {
    step: '04',
    title: 'Venda',
    desc: 'No momento da saída, o PDV registra a baixa imediata no estoque, vincula o comprovante e processa o pagamento.',
  },
  {
    step: '05',
    title: 'Financeiro',
    desc: 'O valor da operação é computado no fluxo de caixa do dia, com separação por meio de pagamento para conferência.',
  },
]

export default function Workflow() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F9F8] border-b border-[#E6E6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#73736E] mb-3 block">
            Fluxo Operacional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#1D1D1B] leading-tight mb-5">
            Do balcão de avaliação ao fechamento de caixa.
          </h2>
          <p className="text-base sm:text-lg text-[#52524E] leading-relaxed">
            Uma esteira contínua que conecta a entrada do produto usado até a conciliação financeira da venda.
          </p>
        </div>

        {/* Step Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, index) => (
            <div
              key={s.step}
              className="bg-[#FFFFFF] rounded-xl border border-[#E6E6E3] p-6 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F0F0EE]">
                  <span className="font-mono text-xs text-[#73736E]">
                    ETAPA {s.step}
                  </span>
                  {index < steps.length - 1 && (
                    <span className="hidden lg:inline font-mono text-xs text-[#A3A39E]">
                      &rarr;
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-[#1D1D1B] tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#73736E] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Service Extension */}
        <div className="mt-14 rounded-xl border border-[#2F2F2C] bg-[#181817] text-[#FFFFFF] p-8 md:p-10 shadow-elevated flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A39E] mb-2 block">
              Módulo Complementar
            </span>
            <h3 className="text-xl font-semibold text-[#FFFFFF] tracking-tight mb-2">
              Gestão de Ordens de Serviço (Assistência Técnica)
            </h3>
            <p className="text-sm text-[#A3A39E] leading-relaxed">
              Para estabelecimentos com assistência técnica, o sistema gerencia a entrada de equipamentos de terceiros, registro de defeitos informados, controle de peças aplicadas, status da bancada e comunicação de entrega ao cliente.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#planos"
              className="inline-flex items-center justify-center bg-[#F5F5F4] text-[#151514] hover:bg-[#FFFFFF] font-medium text-sm px-6 py-3 rounded-lg transition-all shadow-md"
            >
              Ver opções de planos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
