import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { href: '#solucoes', label: 'Soluções' },
    { href: '#cases', label: 'Cases' },
    { href: '#contato', label: 'Contato' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border bg-white/80 backdrop-blur shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">EDUInbound</a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-indigo-600 transition-colors">{n.label}</a>
              ))}
              <a href="#contato" className="rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">Diagnóstico</a>
            </nav>
            <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t px-4 py-3 space-y-3">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="block text-sm font-semibold text-gray-700">{n.label}</a>
              ))}
              <a href="#contato" className="block rounded-lg bg-indigo-600 text-white px-4 py-2 text-center">Diagnóstico</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
