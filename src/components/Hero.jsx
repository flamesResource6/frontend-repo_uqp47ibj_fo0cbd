import { GraduationCap, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_0%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm mb-6">
              <GraduationCap className="h-4 w-4" />
              <span>Especialistas em Educação • Inbound & Performance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Cresça a captação de alunos com estratégias de inbound pensadas para EdTechs e Instituições de Ensino
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Atraímos, nutrimos e convertimos leads em matrículas com conteúdo relevante, automações inteligentes e mídia de performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="inline-flex items-center justify-center rounded-lg bg-white text-indigo-700 font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                Solicitar diagnóstico gratuito
              </a>
              <a href="#cases" className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur font-semibold px-6 py-3 border border-white/20 hover:bg-white/20 transition-colors">
                Ver cases
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              {[
                { label: 'Média +42% leads qualificados', icon: <Sparkles className="h-4 w-4" /> },
                { label: 'CPL 28% menor', icon: <Sparkles className="h-4 w-4" /> },
                { label: 'Taxa de matrícula em alta', icon: <Sparkles className="h-4 w-4" /> },
                { label: 'Crescimento previsível', icon: <Sparkles className="h-4 w-4" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                  <div className="h-6 w-6 rounded-full bg-white/15 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full lg:w-auto">
            <div className="relative bg-white text-gray-900 rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
              <h3 className="text-xl font-bold">Previsibilidade de matrículas</h3>
              <p className="text-sm text-gray-600 mt-1">Framework de aquisição para educação</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /> Pesquisa e reposicionamento</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /> Ecossistema de conteúdo</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /> Automação e nutrição (CRM)</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /> SEO + Mídia paga integrada</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /> Relatórios orientados a CAC/LTV</li>
              </ul>
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-fuchsia-50 border">
                <p className="text-sm">Receba um plano prático de 90 dias para triplicar a geração de leads qualificados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
