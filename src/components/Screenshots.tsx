export default function Screenshots() {
  return (
    <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E6E6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#73736E] mb-3 block">
            Interface Real
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#1D1D1B] leading-tight mb-5">
            Interface limpa, pensada para agilidade no atendimento diário.
          </h2>
          <p className="text-base sm:text-lg text-[#52524E] leading-relaxed">
            Sem telas poluídas ou fluxos confusos. O Nexus Comercial foi construído para que o operador encontre qualquer aparelho e processe qualquer venda em poucos cliques.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Item 1 */}
          <div className="rounded-xl border border-[#E6E6E3] bg-[#F9F9F8] p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E6E6E3]">
                <h3 className="font-semibold text-base text-[#1D1D1B]">
                  Painel de Avaliação e Resumo
                </h3>
                <span className="text-xs font-mono bg-[#FFFFFF] text-[#73736E] px-2.5 py-1 rounded border border-[#E6E6E3]">
                  Grade &amp; Deduções
                </span>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#D5D5D0] bg-[#151514] mb-6 shadow-sm">
                <img
                  src="/screenshot-avaliacao.jpg"
                  alt="Tela de avaliação de aparelhos com cálculo de grade e peças"
                  className="w-full h-auto block"
                />
              </div>
            </div>
            <p className="text-sm text-[#52524E] leading-relaxed">
              O operador seleciona as características físicas do dispositivo e visualiza imediatamente o subtotal de referência, os descontos aplicados por peças a trocar e a sugestão de preço de compra e teto de revenda.
            </p>
          </div>

          {/* Item 2 */}
          <div className="rounded-xl border border-[#E6E6E3] bg-[#F9F9F8] p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E6E6E3]">
                <h3 className="font-semibold text-base text-[#1D1D1B]">
                  Gestão Centralizada de Estoque
                </h3>
                <span className="text-xs font-mono bg-[#FFFFFF] text-[#73736E] px-2.5 py-1 rounded border border-[#E6E6E3]">
                  Controle por IMEI
                </span>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#D5D5D0] bg-[#151514] mb-6 shadow-sm">
                <img
                  src="/screenshot-estoque.jpg"
                  alt="Visão do estoque de aparelhos com IMEI, custo e preço de venda"
                  className="w-full h-auto block"
                />
              </div>
            </div>
            <p className="text-sm text-[#52524E] leading-relaxed">
              A listagem de aparelhos apresenta o status de cada item (disponível, em reparo ou peça trocada), dados de custo e preço de venda, botões de ação rápida para histórico, etiquetas, edição, transferência e venda.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <span className="text-xs font-mono text-[#73736E]">
            Capturas autênticas da interface em produção do Nexus Comercial.
          </span>
        </div>
      </div>
    </section>
  )
}
