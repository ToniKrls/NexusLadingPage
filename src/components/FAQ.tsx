import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Para quais tipos de estabelecimento o Nexus Comercial foi desenvolvido?',
    a: 'O sistema foi desenvolvido especificamente para lojas de eletrônicos, estabelecimentos que trabalham com compra e venda de aparelhos usados/seminovos e assistências técnicas de manutenção.',
  },
  {
    q: 'O sistema permite controlar o estoque de aparelhos individualmente?',
    a: 'Sim. Cada aparelho é cadastrado com seu IMEI ou número de série, com informações de custo de aquisição, classificação em grade, status operacional (disponível, em reparo, peça trocada) e valor de revenda sugerido.',
  },
  {
    q: 'É possível gerenciar ordens de serviço de assistência técnica?',
    a: 'Sim. Os planos "Gestão + OS" e "Completo" incluem o módulo de Ordens de Serviço para registrar entradas de aparelhos, acompanhamento de bancada e histórico de reparos realizados.',
  },
  {
    q: 'Posso contratar somente uma funcionalidade do sistema?',
    a: 'Sim. O plano "Funcionalidade individual" (R$ 49,90) é voltado para clientes que necessitam de apenas um recurso específico da plataforma.',
  },
  {
    q: 'O Nexus Comercial funciona para múltiplas lojas ou filiais?',
    a: 'Sim. A plataforma suporta a gestão de múltiplas unidades, permitindo o isolamento de estoques por loja e o controle de transferências internas entre filiais.',
  },
  {
    q: 'A validação de IMEI verifica procedência ou bloqueio de iCloud?',
    a: 'Não. O Nexus Comercial realiza a validação de conformidade do formato do IMEI e do número de série Apple. O sistema não efetua consultas a bases externas de bloqueio policial ou restrições de ativação iCloud.',
  },
  {
    q: 'Quais são os planos disponíveis e valores?',
    a: 'A plataforma oferece três modalidades: Funcionalidade individual por R$ 49,90, Gestão + OS por R$ 79,90 e o plano Completo por R$ 99,90. A periodicidade de cobrança será confirmada oportunamente.',
  },
  {
    q: 'O sistema exige instalação ou funciona pelo navegador?',
    a: 'O Nexus Comercial é uma aplicação web em nuvem (SaaS), acessível diretamente pelo navegador em computadores ou notebooks, sem necessidade de servidores locais.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#D9D9D9] py-6">
      <button
        type="button"
        className="w-full flex items-center justify-between text-left gap-6 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-medium text-[#111111] group-hover:text-[#737373] transition-colors">
          {q}
        </span>
        <span className="shrink-0 text-[#111111] p-1">
          {open ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>
      {open && (
        <div className="pt-4 pr-12">
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            {a}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F3F3F3] border-b border-[#D9D9D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3 block">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111] leading-tight">
            Esclarecimentos comerciais e técnicos.
          </h2>
        </div>

        {/* Clean list with bottom dividers */}
        <div className="border-t border-[#D9D9D9]">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
