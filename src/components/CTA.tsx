import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#181817] to-[#121211] text-[#FFFFFF] border-b border-[#262624] overflow-hidden">
      {/* Subtle lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 90%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A39E] mb-4 block">
          Acesso à Plataforma
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FFFFFF] leading-tight mb-6">
          Sua loja inteira. Sob controle. Em um só lugar.
        </h2>

        <p className="text-base sm:text-lg text-[#A3A39E] leading-relaxed max-w-2xl mx-auto mb-10">
          Substitua o improviso de planilhas e controles manuais por uma plataforma desenvolvida sob medida para compra, venda e manutenção de eletrônicos.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <a
            href="#planos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5F5F4] text-[#151514] hover:bg-[#FFFFFF] font-medium text-sm px-7 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Conhecer planos
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#222220] text-[#FFFFFF] hover:bg-[#2A2A27] border border-[#3A3A37] font-medium text-sm px-7 py-3.5 rounded-lg transition-all"
          >
            Acessar sistema
          </a>
        </div>
      </div>
    </section>
  )
}
