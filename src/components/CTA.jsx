export default function CTA() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Vamos desenhar seu plano de captação</h2>
            <p className="mt-4 text-white/90">Agende um diagnóstico gratuito para entender seu funil atual e receber um plano de 90 dias com quick wins e metas claras.</p>
            <ul className="mt-6 space-y-2 text-white/90 text-sm list-disc list-inside">
              <li>Mapa de oportunidades por curso</li>
              <li>Recomendações de conteúdo e SEO</li>
              <li>Setup de automações e CRM</li>
              <li>Previsão de leads e matrículas</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Nome</label>
                <input className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Seu nome" />
              </div>
              <div>
                <label className="text-sm font-semibold">E-mail</label>
                <input type="email" className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="seu@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">Instituição</label>
                <input className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Nome da instituição" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">Mensagem</label>
                <textarea className="mt-1 w-full border rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Conte sobre seus objetivos e desafios" />
              </div>
            </div>
            <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg">Quero meu diagnóstico</button>
            <p className="text-xs text-gray-500 mt-2">Responderemos em até 1 dia útil.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
