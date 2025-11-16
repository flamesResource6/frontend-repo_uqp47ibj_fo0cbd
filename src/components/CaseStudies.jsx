export default function CaseStudies() {
  const cases = [
    {
      name: 'Universidade Alpha',
      result: '+68% em matrículas EAD em 6 meses',
      details: 'Implementação de funil inbound, SEO por curso e automações no CRM. CPL -32% e ROAS 4.1x.',
    },
    {
      name: 'Escola Tech Beta',
      result: '+54% leads qualificados',
      details: 'Conteúdo focado em carreira, anúncios multi-canais e nutrição com webinars. Tempo de decisão -21%.',
    },
    {
      name: 'EdTech Gamma',
      result: 'CPL -37% e taxa de matrícula +22%',
      details: 'Testes A/B em landing pages, lead scoring e remarketing de conteúdo.',
    },
  ]

  return (
    <section id="cases" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Resultados recentes</h2>
          <p className="mt-4 text-gray-600">Alguns casos que mostram como combinamos conteúdo, automação e mídia para gerar crescimento real.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 border hover:shadow-lg transition-shadow">
              <div className="text-sm font-semibold text-indigo-600">{c.name}</div>
              <div className="mt-2 text-xl font-bold text-gray-900">{c.result}</div>
              <p className="mt-2 text-gray-600">{c.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
