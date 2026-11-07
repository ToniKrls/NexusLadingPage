export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 md:py-32 bg-[#111111] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === Bloco 1: Avaliação de Aparelhos === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28 md:mb-36">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3 block">
              Módulo de Avaliação
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-5">
              Critérios claros de compra com cálculo automático de desvalorização e reparos.
            </h2>
            <p className="text-base text-[#737373] leading-relaxed mb-8">
              A avaliação no Nexus Comercial elimina a subjetividade do balcão. O sistema estrutura o cálculo com base no modelo, armazenamento, classificação em Grade (A, B ou C) e lista de peças a substituir com valores de dedução pré-configurados.
            </p>

            {/* Technical Breakdown List */}
            <div className="border-t border-[#262626] divide-y divide-[#262626]">
              <div className="py-3.5 flex items-start justify-between gap-4">
                <div>
                  <span className="font-semibold text-sm text-[#FFFFFF] block">Grade A</span>
                  <span className="text-xs text-[#737373]">Sem marcas relevantes, saúde de bateria preservada (&gt; 85%). Valor base integral.</span>
                </div>
                <span className="text-xs font-mono text-[#D9D9D9] shrink-0">Preço cheio</span>
              </div>

              <div className="py-3.5 flex items-start justify-between gap-4">
                <div>
                  <span className="font-semibold text-sm text-[#FFFFFF] block">Grade B</span>
                  <span className="text-xs text-[#737373]">Sinais leves de uso, desgaste moderado ou bateria &le; 85%. Aplicação de desconto da grade.</span>
                </div>
                <span className="text-xs font-mono text-[#D9D9D9] shrink-0">Desconto moderado</span>
              </div>

              <div className="py-3.5 flex items-start justify-between gap-4">
                <div>
                  <span className="font-semibold text-sm text-[#FFFFFF] block">Grade C</span>
                  <span className="text-xs text-[#737373]">Marcas acentuadas, avarias externas ou componentes já substituídos.</span>
                </div>
                <span className="text-xs font-mono text-[#D9D9D9] shrink-0">Desconto maior</span>
              </div>
            </div>

            <p className="mt-6 text-xs text-[#737373] border-l border-[#333333] pl-3">
              O sistema calcula simultaneamente o valor sugerido de compra e a projeção de margem para revenda.
            </p>
          </div>

          {/* Screenshot container */}
          <div className="rounded-lg border border-[#262626] bg-[#161616] p-2 shadow-xl">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#262626] mb-2">
              <span className="text-xs font-mono text-[#737373]">avaliacao / resumo_calculo</span>
              <span className="text-[11px] font-mono text-[#737373]">Grade A · B · C</span>
            </div>
            <div className="overflow-hidden rounded border border-[#262626]">
              <img
                src="/screenshot-avaliacao.jpg"
                alt="Detalhamento do cálculo de avaliação no Nexus Comercial"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* === Bloco 2: Estoque por IMEI === */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Screenshot container (left on desktop) */}
          <div className="order-2 lg:order-1 rounded-lg border border-[#262626] bg-[#161616] p-2 shadow-xl">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#262626] mb-2">
              <span className="text-xs font-mono text-[#737373]">estoque / rastreamento_imei</span>
              <span className="text-[11px] font-mono text-[#737373]">Validação serial &amp; status</span>
            </div>
            <div className="overflow-hidden rounded border border-[#262626]">
              <img
                src="/screenshot-estoque.jpg"
                alt="Tela de controle de estoque de aparelhos com IMEI"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Copy (right on desktop) */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3 block">
              Módulo de Estoque
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-5">
              Rastreamento individual por IMEI, custo de aquisição e histórico de movimentações.
            </h2>
            <p className="text-base text-[#737373] leading-relaxed mb-8">
              Cada aparelho no estoque possui ficha própria vinculada ao seu identificador. O Nexus valida o formato do IMEI e do número de série Apple na entrada, assegurando que os registros estejam padronizados e organizados para busca instantânea.
            </p>

            <ul className="space-y-3.5 mb-8 text-sm text-[#D9D9D9]">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#737373]" />
                <span>Busca rápida por IMEI, número de série, modelo ou capacidade.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#737373]" />
                <span>Filtro operacional por estado: disponível, em reparo ou peça trocada.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#737373]" />
                <span>Exibição direta de custo de entrada versus preço de venda sugerido.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#737373]" />
                <span>Ações rápidas de transferência entre unidades, etiquetagem e venda direta.</span>
              </li>
            </ul>

            {/* Responsible disclaimer */}
            <div className="border border-[#262626] bg-[#161616] p-4 text-xs text-[#737373] leading-relaxed">
              <span className="font-semibold text-[#D9D9D9] block mb-1">Nota técnica sobre validação:</span>
              A validação de IMEI realizada pelo sistema verifica a conformidade estrutural do formato numérico. Ela não representa consulta automática a bases de aparelhos roubados, bloqueados ou com restrição de ativação iCloud.
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
