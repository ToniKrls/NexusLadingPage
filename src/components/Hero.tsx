import { ArrowRight, Layers, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#181817] via-[#141413] to-[#111110] text-[#FFFFFF] pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[#262624]">
      {/* Subtle depth lighting and texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(ellipse 75% 55% at 55% 10%, rgba(255, 255, 255, 0.08) 0%, transparent 70%),
              radial-gradient(ellipse 60% 45% at 15% 85%, rgba(255, 255, 255, 0.03) 0%, transparent 60%)`,
          }}
        />
        {/* Very subtle architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Copy (5 cols) */}
          <div className="lg:col-span-5 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A39E] mb-4 block">
              Plataforma de Gestão Comercial
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-[#FFFFFF] leading-[1.12] tracking-tight mb-6">
              Sua loja inteira. Sob controle. Em um só lugar.
            </h1>

            <p className="text-base sm:text-lg text-[#A3A39E] leading-relaxed mb-8">
              O Nexus Comercial centraliza avaliação de aparelhos seminovos, controle rigoroso de estoque por IMEI, vendas no PDV, financeiro diário e ordens de serviço em uma única plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 bg-[#F5F5F4] hover:bg-[#FFFFFF] text-[#151514] font-medium text-sm px-6 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Conhecer os planos
                <ArrowRight size={16} />
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center gap-2 bg-[#222220] hover:bg-[#2A2A27] text-[#FFFFFF] font-medium text-sm px-6 py-3.5 rounded-lg border border-[#3A3A37] transition-all"
              >
                Ver funcionalidades
              </a>
            </div>

            <p className="mt-7 text-xs font-mono text-[#73736E]">
              Desenvolvido para lojas de eletrônicos, usados e assistências técnicas.
            </p>
          </div>

          {/* Right Column: Rich System Composition (7 cols) */}
          <div className="lg:col-span-7 relative lg:pl-6">
            {/* Ambient glow behind window */}
            <div className="absolute -inset-4 bg-white/[0.02] rounded-3xl blur-2xl -z-10" />

            {/* Browser frame container */}
            <div className="relative bg-[#1D1D1B] rounded-xl border border-[#2F2F2C] shadow-ambient overflow-hidden">
              {/* Browser window chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181817] border-b border-[#2A2A27]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#353532]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#353532]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#353532]" />
                </div>
                <div className="bg-[#121211] rounded-md px-3 py-1 border border-[#262624] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#73736E]" />
                  <span className="text-[11px] text-[#A3A39E] font-mono">
                    app.nexuscomercial.com.br
                  </span>
                </div>
                <div className="w-8" />
              </div>

              {/* Main screenshot preview */}
              <div className="relative bg-[#151514] overflow-hidden">
                <img
                  src="/screenshot-avaliacao.jpg"
                  alt="Interface do Nexus Comercial — Módulo de Avaliação de Aparelhos"
                  className="w-full object-cover block"
                />
              </div>
            </div>

            {/* Floating Layer 1 — Top Right: Estoque por IMEI */}
            <div className="absolute -top-5 -right-3 sm:-right-4 bg-[#FFFFFF] text-[#151514] rounded-xl p-3.5 border border-[#E6E6E3] shadow-elevated hidden sm:flex items-center gap-3 transition-transform hover:-translate-y-0.5">
              <div className="w-9 h-9 rounded-lg bg-[#F5F5F4] border border-[#E6E6E3] flex items-center justify-center shrink-0 text-[#262624]">
                <Smartphone size={18} strokeWidth={1.75} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#73736E] block">
                  Controle individual
                </span>
                <span className="text-sm font-semibold text-[#151514] block">
                  Estoque por IMEI
                </span>
              </div>
            </div>

            {/* Floating Layer 2 — Bottom Left: Avaliação padronizada */}
            <div className="absolute -bottom-5 -left-3 sm:-left-4 bg-[#FFFFFF] text-[#151514] rounded-xl p-3.5 border border-[#E6E6E3] shadow-elevated hidden sm:flex items-center gap-3 transition-transform hover:-translate-y-0.5">
              <div className="w-9 h-9 rounded-lg bg-[#F5F5F4] border border-[#E6E6E3] flex items-center justify-center shrink-0 text-[#262624]">
                <Layers size={18} strokeWidth={1.75} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#73736E] block">
                  Cálculo automático
                </span>
                <span className="text-sm font-semibold text-[#151514] block">
                  Grade A, B e C
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
