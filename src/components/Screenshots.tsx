export default function Screenshots() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="text-blue-700 text-xs font-semibold tracking-wide uppercase">Interface do sistema</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Conheça o sistema por dentro
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Uma interface organizada, desenvolvida para o fluxo de trabalho real de lojas de eletrônicos.
          </p>
        </div>

        {/* Two-column screenshot showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              {/* Label bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-semibold text-slate-700">Avaliação de aparelhos</span>
                </div>
                <span className="text-xs text-slate-400 font-mono bg-slate-50 px-2 py-0.5 rounded">Grade A · B · C</span>
              </div>
              <div className="p-4 bg-slate-50">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src="/screenshot-avaliacao.jpg"
                    alt="Interface de avaliação de aparelhos — grade de conservação, peças e resumo de compra"
                    className="w-full block"
                  />
                </div>
              </div>
              <div className="px-5 pb-5">
                <p className="text-slate-500 text-sm leading-relaxed">
                  Avalie o aparelho em etapas estruturadas: armazenamento, peça substituída, grade de conservação e peças a trocar. O resumo com valor de compra, sugestão de revenda e descontos aplicados aparece em tempo real.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              {/* Label bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-slate-700">Estoque de aparelhos</span>
                </div>
                <span className="text-xs text-slate-400 font-mono bg-slate-50 px-2 py-0.5 rounded">Por IMEI · Serial</span>
              </div>
              <div className="p-4 bg-slate-50">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src="/screenshot-estoque.jpg"
                    alt="Interface de estoque de aparelhos com IMEI, grade, custo e valor de venda"
                    className="w-full block"
                  />
                </div>
              </div>
              <div className="px-5 pb-5">
                <p className="text-slate-500 text-sm leading-relaxed">
                  Visualize cada aparelho no estoque com IMEI, modelo, grade, status e valores de custo e venda. Acesse o histórico, edite, transfira entre lojas ou registre a venda diretamente da tela de estoque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-8">
          Capturas reais da interface do Nexus Comercial.
        </p>
      </div>
    </section>
  )
}

