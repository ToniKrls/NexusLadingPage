export default function FeatureAvaliacao() {
  return (
    <section id="funcionalidades" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Block 1: Avaliação === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/40 rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Avaliação inteligente</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Avalie aparelhos com{' '}
              <span className="text-blue-400">critérios claros e resultado imediato</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-7">
              O sistema estrutura a avaliação em etapas: classificação do aparelho, grade de conservação (A, B ou C) e seleção de peças a substituir. Cada critério é aplicado com desconto específico, e o valor de compra é calculado automaticamente.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Grade A', desc: 'Sem marcas relevantes, bateria ≥ 85% — preço cheio, sem desconto.' },
                { label: 'Grade B', desc: 'Marcas de uso leve, bateria ≤ 85% — desconto aplicado automaticamente.' },
                { label: 'Grade C', desc: 'Muitas marcas, desgaste acentuado ou peça substituída — desconto maior.' },
              ].map((g) => (
                <div key={g.label} className="flex gap-3 items-start">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-blue-700/30 border border-blue-600/40 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0">
                    {g.label.split(' ')[1]}
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm">{g.label}: </span>
                    <span className="text-slate-400 text-sm">{g.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-slate-500 text-sm border-l-2 border-slate-700 pl-4">
              O sistema também exibe os valores sugeridos de compra e de revenda, auxiliando na tomada de decisão.
            </p>
          </div>

          {/* Screenshot */}
          <div className="relative">
            <div className="bg-[#12172d] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0c1020] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-[#1a2035] rounded px-2.5 py-0.5 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400/60" />
                    <span className="text-[10px] text-slate-500 font-mono">Avaliação — Nexus Comercial</span>
                  </div>
                </div>
              </div>
              <img
                src="/screenshot-avaliacao.jpg"
                alt="Tela de avaliação de aparelhos com cálculo de grade A, B e C e resumo de compra"
                className="w-full block"
              />
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>

        {/* === Block 2: Estoque === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Screenshot first on desktop */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#12172d] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0c1020] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-[#1a2035] rounded px-2.5 py-0.5 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400/60" />
                    <span className="text-[10px] text-slate-500 font-mono">Estoque — Nexus Comercial</span>
                  </div>
                </div>
              </div>
              <img
                src="/screenshot-estoque.jpg"
                alt="Tela de estoque de aparelhos com IMEI, grade e valores de custo e venda"
                className="w-full block"
              />
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-emerald-600/10 rounded-3xl blur-2xl -z-10" />
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-emerald-900/40 border border-emerald-700/40 rounded-full px-3.5 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Identificação e estoque</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Cada aparelho identificado.{' '}
              <span className="text-emerald-400">Todo o histórico acessível.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-7">
              O Nexus Comercial organiza o estoque com base no IMEI de cada aparelho. O formato do IMEI e do número de série Apple é validado pelo sistema. Consulte o histórico de avaliações e movimentações de qualquer aparelho a qualquer momento.
            </p>

            <div className="space-y-3">
              {[
                'Busca por IMEI, serial ou modelo',
                'Filtros por status: disponível, em reparo, peça trocada',
                'Custo de entrada e valor de venda exibidos por aparelho',
                'Transferência de aparelhos entre lojas/filiais',
                'Etiquetagem e ações rápidas por aparelho',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3">
                      <path d="M2 5l2 2 4-4" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-4">
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-slate-300 font-medium">Importante:</span> a validação de IMEI verifica o formato do número — não representa consulta a bases de aparelhos roubados, bloqueados ou com restrição de iCloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

