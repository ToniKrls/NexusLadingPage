import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-4 block">
          Acesso à Plataforma
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-6">
          Sua loja inteira. Sob controle. Em um só lugar.
        </h2>

        <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-2xl mx-auto mb-10">
          Substitua o improviso de planilhas e controles manuais por uma plataforma desenvolvida sob medida para compra, venda e manutenção de eletrônicos.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#planos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#111111] hover:bg-[#E5E5E5] font-medium text-sm px-7 py-3.5 rounded-md transition-colors"
          >
            Conhecer planos
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#FFFFFF] hover:bg-[#262626] border border-[#333333] font-medium text-sm px-7 py-3.5 rounded-md transition-colors"
          >
            Acessar sistema
          </a>
        </div>
      </div>
    </section>
  )
}
