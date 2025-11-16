export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="text-lg font-extrabold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">EDUInbound</a>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} EDUInbound. Todos os direitos reservados.</p>
          <div className="text-sm text-gray-600">
            <a href="#solucoes" className="hover:text-indigo-600">Soluções</a>
            <span className="mx-3">•</span>
            <a href="#cases" className="hover:text-indigo-600">Cases</a>
            <span className="mx-3">•</span>
            <a href="#contato" className="hover:text-indigo-600">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
