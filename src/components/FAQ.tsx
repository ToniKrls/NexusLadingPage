import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Para quais tipos de estabelecimento o Nexus Comercial foi desenvolvido?',
    a: 'O Nexus Comercial foi desenvolvido para lojas de eletrônicos, estabelecimentos que trabalham com compra e venda de aparelhos usados e assistências técnicas. Qualquer negócio que precise gerenciar avaliação de aparelhos, estoque, vendas, financeiro e serviços técnicos pode se beneficiar da plataforma.',
  },
  {
    q: 'O sistema permite controlar o estoque de aparelhos?',
    a: 'Sim. O Nexus Comercial possui um módulo de gestão de estoque onde cada aparelho é cadastrado individualmente com IMEI, modelo, grade de conservação, custo de entrada e valor de venda. É possível buscar por IMEI, serial ou modelo, filtrar por status e acessar o histórico de movimentações.',
  },
  {
    q: 'É possível gerenciar Ordens de Serviço de assistência técnica?',
    a: 'Sim. Os planos Gestão + OS e Completo incluem o módulo de Ordens de Serviço, que permite registrar, acompanhar e manter histórico dos serviços realizados pela assistência técnica.',
  },
  {
    q: 'Posso contratar somente uma funcionalidade?',
    a: 'Sim. O plano Funcionalidade (R$ 49,90) é voltado para quem deseja acessar apenas um recurso específico do Nexus Comercial. Entre em contato quando o atendimento estiver disponível para saber quais funcionalidades podem ser contratadas individualmente.',
  },
  {
    q: 'O Nexus Comercial funciona para múltiplas lojas ou filiais?',
    a: 'Sim. A plataforma suporta a gestão de múltiplas lojas e filiais, permitindo visualizar o estoque de cada unidade separadamente e realizar transferências de aparelhos entre estoques.',
  },
  {
    q: 'A validação de IMEI verifica se o aparelho é roubado ou bloqueado?',
    a: 'Não. O Nexus Comercial valida o formato do IMEI e do número de série Apple — verificando se o número está no padrão correto. O sistema não realiza consultas a bases externas de aparelhos roubados, bloqueados ou com restrição de iCloud.',
  },
  {
    q: 'Quais são os planos disponíveis e seus valores?',
    a: 'O Nexus Comercial oferece três planos: Funcionalidade individual por R$ 49,90, Gestão + OS por R$ 79,90 (inclui gestão comercial e módulo de ordens de serviço) e Completo por R$ 99,90 (todas as funcionalidades da plataforma). A periodicidade de cobrança será informada em breve.',
  },
  {
    q: 'O sistema é acessado pelo navegador ou precisa ser instalado?',
    a: 'O Nexus Comercial é uma plataforma web, acessada pelo navegador. Não é necessário instalar nenhum software.',
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border rounded-xl transition-all ${open ? 'border-blue-200 bg-blue-50/50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
      <button
        className="w-full flex items-start gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex-1 text-slate-900 font-medium text-sm leading-relaxed">{q}</span>
        <ChevronDown
          size={18}
          className={`mt-0.5 shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180 text-blue-600' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="text-slate-600 text-xs font-semibold tracking-wide uppercase">Perguntas frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Dúvidas comuns
          </h2>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Item key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

