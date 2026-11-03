import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#001a6e]">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 60% 0%, rgba(10, 92, 245, 0.25) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 10% 80%, rgba(0, 62, 207, 0.2) 0%, transparent 60%)`,
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-700/30 border border-blue-500/40 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-semibold tracking-wide uppercase">
                Gestão Comercial para Lojas de Eletrônicos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight mb-5">
              Sua loja inteira.{' '}
              <span className="text-blue-400">Organizada.</span>{' '}
              Em um só lugar.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              O Nexus Comercial é uma plataforma de gestão desenvolvida para lojas de eletrônicos, compra e venda de aparelhos usados e assistências técnicas. Centralize avaliação, estoque, vendas, financeiro e ordens de serviço em um único sistema.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40"
              >
                Conhecer os planos
                <ArrowRight size={18} />
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all"
              >
                Ver funcionalidades
              </a>
            </div>

            {/* Subtle trust line */}
            <p className="mt-6 text-slate-400 text-sm">
              Desenvolvido para donos e gestores de lojas de eletrônicos.
            </p>
          </div>

          {/* Right: System screenshot */}
          <div className="relative lg:pl-4">
            {/* Browser chrome frame */}
            <div className="relative bg-[#1a1f36] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-white/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#12172d] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-[#1e2540] rounded-md px-3 py-1 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400/60 shrink-0" />
                    <span className="text-[11px] text-slate-400 font-mono truncate">app.nexuscomercial.com.br</span>
                  </div>
                </div>
              </div>
              {/* Screenshot */}
              <img
                src="/screenshot-avaliacao.jpg"
                alt="Interface de avaliação de aparelhos do Nexus Comercial"
                className="w-full object-cover block"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3.5 border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                    <path d="M10 2L12.5 7.5L18 8.27L14 12.14L14.91 17.63L10 15L5.09 17.63L6 12.14L2 8.27L7.5 7.5L10 2Z" fill="#2563eb" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Avaliação padronizada</div>
                  <div className="text-sm font-bold text-slate-900">Grade A, B e C</div>
                </div>
              </div>
            </div>

            {/* Floating stat card 2 */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3.5 border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                    <rect x="3" y="3" width="14" height="14" rx="2" stroke="#059669" strokeWidth="1.5"/>
                    <path d="M7 10l2.5 2.5L13 7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Controle completo</div>
                  <div className="text-sm font-bold text-slate-900">Estoque por IMEI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative flex justify-center pb-8 animate-bounce">
        <a href="#problema" className="text-white/40 hover:text-white/70 transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  )
}

