import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-[#001a6e] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 100%, rgba(10, 92, 245, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-700/30 border border-blue-500/40 rounded-full px-3.5 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-xs font-semibold tracking-wide uppercase">
            Pronto para começar
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
          Centralize a gestão da sua loja.{' '}
          <span className="text-blue-400">Hoje.</span>
        </h2>

        <p className="text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl mx-auto">
          Avaliação, estoque, vendas, financeiro e assistência técnica — tudo organizado em uma plataforma desenvolvida para o seu tipo de negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#planos"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-4 rounded-xl transition-all shadow-xl shadow-blue-900/50 hover:shadow-blue-700/50 text-base"
          >
            Conhecer os planos
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-7 py-4 rounded-xl border border-white/20 transition-all text-base"
          >
            Acessar o sistema
          </a>
        </div>

        {/* Decorative feature row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Avaliação padronizada' },
            { label: 'Estoque por IMEI' },
            { label: 'Gestão financeira' },
            { label: 'Ordens de serviço' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/8 border border-white/15 rounded-xl py-3 px-3 text-center"
            >
              <span className="text-blue-200 text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

