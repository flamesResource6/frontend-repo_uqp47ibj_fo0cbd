import { Search, Mail, BarChart3, Workflow, GraduationCap, LineChart } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'SEO para Cursos & Graduações',
    desc: 'Mapeamento de intenção por curso, otimização on-page, arquitetura de conteúdos e páginas de destino que convertem.',
  },
  {
    icon: Mail,
    title: 'Inbound & Automação',
    desc: 'Fluxos de nutrição, lead scoring e CRM integrados para aumentar taxa de matrícula e reduzir tempo de decisão.',
  },
  {
    icon: BarChart3,
    title: 'Mídia de Performance',
    desc: 'Google, Meta e TikTok com criativos orientados a prova social e mensuração de ponta-a-ponta (GA4/UTM).',
  },
  {
    icon: Workflow,
    title: 'Estratégia de Conteúdo',
    desc: 'Calendários editoriais, landing pages, materiais ricos e webinars focados no funil de educação.',
  },
  {
    icon: GraduationCap,
    title: 'Playbook para Educação',
    desc: 'Benchmarks por modalidade (EAD, presencial, pós) e frameworks para captação e rematrícula.',
  },
  {
    icon: LineChart,
    title: 'Analytics & BI',
    desc: 'Acompanhamento diário de KPIs como CPL, CPS, taxa de matrícula e ROAS por canal e curso.',
  },
]

export default function Features() {
  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Soluções para acelerar sua captação</h2>
          <p className="mt-4 text-gray-600">Do planejamento à execução, conectamos conteúdo, automação e mídia paga para gerar demanda qualificada.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group p-6 rounded-2xl border hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50">
              <div className="h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
