import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-[#111111] text-[#FFFFFF] pt-32 pb-24 md:pt-40 md:pb-32 border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-4 block">
            Plataforma de Gestão Comercial
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FFFFFF] leading-[1.1] mb-6">
            Sua loja inteira. Sob controle. Em um só lugar.
          </h1>

          <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-2xl mx-auto mb-10">
            O Nexus Comercial centraliza avaliação de aparelhos, estoque por IMEI, vendas no PDV, financeiro e ordens de serviço para lojas de eletrônicos e assistências técnicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#planos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#111111] hover:bg-[#E5E5E5] font-medium text-sm px-6 py-3 rounded-md transition-colors"
            >
              Conhecer planos
              <ArrowRight size={16} />
            </a>
            <a
              href="#funcionalidades"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#FFFFFF] hover:bg-[#262626] border border-[#333333] font-medium text-sm px-6 py-3 rounded-md transition-colors"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>

        {/* System Showcase Frame */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg border border-[#262626] bg-[#161616] p-2 sm:p-3 shadow-2xl">
            {/* Minimal window bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#262626] mb-2 sm:mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
              </div>
              <span className="text-[11px] font-mono text-[#737373]">
                app.nexuscomercial.com.br
              </span>
              <div className="w-10" />
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded border border-[#262626] bg-[#111111]">
              <img
                src="/screenshot-avaliacao.jpg"
                alt="Interface do Nexus Comercial — Módulo de Avaliação de Aparelhos"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
