'use client'

import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo variant="light" />
            <span className="hidden sm:block text-xs text-accent/80 border-l border-primary-light pl-3">
              Stock de Servidores
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#mapa" className="text-sm text-gray-300 hover:text-white transition-colors">
              Mapa
            </a>
            <a href="#catalogo" className="text-sm text-gray-300 hover:text-white transition-colors">
              Catálogo
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Soporte
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#catalogo" className="btn-primary text-sm !py-2 !px-5">
              Ver Servidores
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-light transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-primary-light pt-4 space-y-3">
            <a href="#mapa" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-300 hover:text-white transition-colors">
              Mapa
            </a>
            <a href="#catalogo" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-300 hover:text-white transition-colors">
              Catálogo
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
              Soporte
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#catalogo" onClick={() => setMobileOpen(false)} className="btn-primary text-sm !py-2 !px-5 inline-block">
              Ver Servidores
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
