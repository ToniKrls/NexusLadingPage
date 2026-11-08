export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 md:py-32 bg-[#151514] text-[#FFFFFF] border-b border-[#262624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* === DESTAQUE 1: Avaliação Padronizada de Aparelhos    === */}
        {/* === Layout: Texto à esquerda | Imagem à direita       === */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-28 md:mb-36">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A39E] mb-3 block">
              Módulo de Avaliação
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-5">
              Critérios claros de compra com cálculo automático de desvalorização e reparos.
            </h2>
            <p className="text-base text-[#A3A39E] leading-relaxed mb-8">
              A avaliação no Nexus Comercial elimina a subjetividade do balcão. O sistema estrutura o cálculo com base no modelo, armazenamento, classificação em Grade (A, B ou C) e lista de peças a substituir com valores de dedução pré-configurados.
            </p>

            {/* Technical Breakdown List */}
            <div className="space-y-3 mb-8">
              <div className="bg-[#1D1D1B] rounded-lg border border-[#2F2F2B] p-4 flex items-start justify-between gap-4 shadow-sm">
                <div>
                  <span className="font-semibold text-sm text-[#FFFFFF] block mb-0.5">Grade A</span>
                  <span className="text-xs text-[#A3A39E]">Sem marcas relevantes, saúde de bateria preservada (&gt; 85%). Valor base integral.</span>
                </div>
                <span className="text-xs font-mono bg-[#262624] text-[#D5D5D0] px-2.5 py-1 rounded border border-[#3A3A37] shrink-0">
                  Preço cheio
                </span>
              </div>

              <div className="bg-[#1D1D1B] rounded-lg border border-[#2F2F2B] p-4 flex items-start justify-between gap-4 shadow-sm">
                <div>
                  <span className="font-semibold text-sm text-[#FFFFFF] block mb-0.5">Grade B</span>
                  <span className="text-xs text-[#A3A39E]">Sinais leves de uso, desgaste moderado ou bateria &le; 85%. Aplicação do desconto da grade.</span>
                </div>
                <span className="text-xs font-mono bg-[#262624] text-[#D5D5D0] px-2.5 py-1 rounded border border-[#3A3A37] shrink-0">
                  Desconto moderado
                </span>
              </div>

              <div className="bg-[#1D1D1B] rounded-lg border border-[#2F2F2B] p-4 flex items-start justify-between gap-4 shadow-sm">
                <div>
                  <span className="font-semibold text-sm text-[#FFFFFF] block mb-0.5">Grade C</span>
                  <span className="text-xs text-[#A3A39E]">Marcas acentuadas, avarias externas ou componentes já substituídos.</span>
                </div>
                <span className="text-xs font-mono bg-[#262624] text-[#D5D5D0] px-2.5 py-1 rounded border border-[#3A3A37] shrink-0">
                  Desconto maior
                </span>
              </div>
            </div>

            <p className="text-xs text-[#73736E] border-l border-[#3A3A37] pl-3">
              O sistema calcula simultaneamente o valor sugerido de compra e a projeção de margem para revenda.
            </p>
          </div>

          {/* Screenshot container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#1D1D1B] rounded-xl border border-[#2F2F2B] p-2 sm:p-2.5 shadow-ambient">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#2A2A27] mb-2 bg-[#181817] rounded-t-lg">
                <span className="text-xs font-mono text-[#A3A39E]">avaliacao / resumo_calculo</span>
                <span className="text-[11px] font-mono text-[#73736E]">Grade A · B · C</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#262624] bg-[#121211]">
                <img
                  src="/screenshot-avaliacao.jpg"
                  alt="Detalhamento do cálculo de avaliação no Nexus Comercial"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* === DESTAQUE 2: Rastreamento por IMEI e Estoque       === */}
        {/* === Layout: Imagem à esquerda | Texto à direita       === */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-28 md:mb-36">
          {/* Screenshot container (left on desktop - 7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="bg-[#1D1D1B] rounded-xl border border-[#2F2F2B] p-2 sm:p-2.5 shadow-ambient">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#2A2A27] mb-2 bg-[#181817] rounded-t-lg">
                <span className="text-xs font-mono text-[#A3A39E]">estoque / rastreamento_imei</span>
                <span className="text-[11px] font-mono text-[#73736E]">Validação serial &amp; status</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#262624] bg-[#121211]">
                <img
                  src="/screenshot-estoque.jpg"
                  alt="Tela de controle de estoque de aparelhos com IMEI"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Copy (right on desktop - 5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A39E] mb-3 block">
              Módulo de Estoque
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-5">
              Rastreamento individual por IMEI, custo de aquisição e histórico de movimentações.
            </h2>
            <p className="text-base text-[#A3A39E] leading-relaxed mb-8">
              Cada aparelho no estoque possui ficha própria vinculada ao seu identificador. O Nexus valida o formato do IMEI e do número de série Apple na entrada, assegurando registros confiáveis e padronizados para busca instantânea.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-[#D5D5D0]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Busca ágil por IMEI, número de série, modelo ou capacidade.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Filtro operacional por estado: disponível, em reparo ou peça trocada.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Exibição direta de custo de entrada versus preço de venda sugerido.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Ações rápidas de transferência entre unidades, etiquetagem e venda direta.</span>
              </li>
            </ul>

            {/* Responsible disclaimer */}
            <div className="border border-[#2F2F2B] bg-[#1D1D1B] rounded-lg p-4 text-xs text-[#A3A39E] leading-relaxed shadow-sm">
              <span className="font-semibold text-[#FFFFFF] block mb-1">Nota técnica sobre validação:</span>
              A validação de IMEI realizada pelo sistema verifica a conformidade estrutural do formato numérico. Ela não representa consulta automática a bases de aparelhos roubados, bloqueados ou com restrição de ativação iCloud.
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* === DESTAQUE 3: Ordens de Serviço & Assistência       === */}
        {/* === Layout: Texto à esquerda | Imagem à direita       === */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-28 md:mb-36">
          {/* Copy (left on desktop - 5 cols) */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A39E] mb-3 block">
              Módulo de Assistência Técnica
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-5">
              Ordens de serviço e assistência técnica organizadas.
            </h2>
            <p className="text-base text-[#A3A39E] leading-relaxed mb-8">
              Acompanhe cada atendimento desde a entrada do aparelho até a entrega ao cliente, mantendo o histórico dos serviços e o controle das etapas em um só lugar.
            </p>

            <ul className="space-y-3.5 mb-8 text-sm text-[#D5D5D0]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Abertura de bancada com checklist de entrada e prazo estimado de entrega.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Identificação completa do cliente, com telefone/WhatsApp e CPF/CNPJ.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Registro minucioso de credenciais: tipo de senha de tela e status de conta iCloud.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Vinculação direta do vendedor responsável e do técnico encarregado pela bancada.</span>
              </li>
            </ul>

            <p className="text-xs text-[#73736E] border-l border-[#3A3A37] pl-3">
              Suporta múltiplos aparelhos por ordem de serviço com histórico técnico preservado.
            </p>
          </div>

          {/* Screenshot container (right on desktop - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#1D1D1B] rounded-xl border border-[#2F2F2B] p-2 sm:p-2.5 shadow-ambient">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#2A2A27] mb-2 bg-[#181817] rounded-t-lg">
                <span className="text-xs font-mono text-[#A3A39E]">ordens_de_servico / nova_os</span>
                <span className="text-[11px] font-mono text-[#73736E]">Checklist &amp; Bancada</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#262624] bg-[#121211]">
                <img
                  src="/screenshot-os.jpg"
                  alt="Tela de abertura de Ordem de Serviço no Nexus Comercial"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* === DESTAQUE 4: Gestão de Múltiplas Lojas             === */}
        {/* === Layout: Imagens sobrepostas à esq. | Texto à dir. === */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Overlaid Screenshots Composition (left on desktop - 7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="relative pt-6 pr-4 sm:pr-8 pb-4 sm:pb-6">
              {/* Background Overlaid Image (82-85% size, shifted up and right) */}
              <div className="hidden sm:block absolute top-0 right-0 w-[84%] z-0">
                <div className="bg-[#1D1D1B] rounded-xl border border-[#2F2F2B] p-2 shadow-card opacity-90 hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#2A2A27] mb-1.5 bg-[#181817] rounded-t-lg">
                    <span className="text-[11px] font-mono text-[#A3A39E]">minhas_lojas / filiais</span>
                    <span className="text-[10px] font-mono text-[#73736E]">Rede Comercial</span>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-[#262624] bg-[#121211]">
                    <img
                      src="/screenshot-lojas.jpg"
                      alt="Gestão de unidades e filiais no Nexus Comercial"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>

              {/* Foreground Primary Image (100% size, modal de transferência) */}
              <div className="relative z-10 w-full sm:w-[90%] bg-[#1D1D1B] rounded-xl border border-[#2F2F2B] p-2 sm:p-2.5 shadow-ambient">
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#2A2A27] mb-2 bg-[#181817] rounded-t-lg">
                  <span className="text-xs font-mono text-[#A3A39E]">transferencia / entre_lojas</span>
                  <span className="text-[11px] font-mono text-[#73736E]">Movimentação de Estoque</span>
                </div>
                <div className="overflow-hidden rounded-lg border border-[#262624] bg-[#121211]">
                  <img
                    src="/screenshot-transferencia.jpg"
                    alt="Modal de transferência de aparelho entre lojas no Nexus Comercial"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Mobile second image fallback (stacked nicely without awkward cut) */}
              <div className="sm:hidden mt-4 bg-[#1D1D1B] rounded-xl border border-[#2F2F2B] p-2 shadow-card">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#2A2A27] mb-1.5 bg-[#181817] rounded-t-lg">
                  <span className="text-[11px] font-mono text-[#A3A39E]">minhas_lojas / filiais</span>
                  <span className="text-[10px] font-mono text-[#73736E]">Rede Comercial</span>
                </div>
                <div className="overflow-hidden rounded-lg border border-[#262624] bg-[#121211]">
                  <img
                    src="/screenshot-lojas.jpg"
                    alt="Gestão de unidades e filiais no Nexus Comercial"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copy (right on desktop - 5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A39E] mb-3 block">
              Módulo Multiunidades
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-5">
              Gerencie todas as suas lojas em um único lugar.
            </h2>
            <p className="text-base text-[#A3A39E] leading-relaxed mb-8">
              Tenha controle centralizado das suas unidades, acompanhe os estoques e gerencie a movimentação de aparelhos entre diferentes lojas com mais organização e visibilidade.
            </p>

            <ul className="space-y-3.5 mb-8 text-sm text-[#D5D5D0]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Estoques, vendas, caixa e faturamento individualizados por ponto de atendimento.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Transferência descomplicada de aparelhos entre matriz e filiais em poucos cliques.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Rastreabilidade de quem autorizou a transferência e confirmação da loja recebedora.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73736E] mt-2 shrink-0" />
                <span>Catálogo e tabela de preços unificados para coerência em toda a rede.</span>
              </li>
            </ul>

            <p className="text-xs text-[#73736E] border-l border-[#3A3A37] pl-3">
              Permite criar novas lojas no mesmo CNPJ mantendo o isolamento operacional de cada equipe.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
