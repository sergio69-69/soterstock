'use client'

import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-[9999] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Documentación
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#catalogo" className="btn-primary text-sm !py-2 !px-5">
              Ver Servidores
            </a>
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors" aria-label="Carrito">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors border border-gray-500 hover:border-white rounded-lg px-3 py-1.5" aria-label="Login">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </button>
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
            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
              Documentación
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#catalogo" onClick={() => setMobileOpen(false)} className="btn-primary text-sm !py-2 !px-5 inline-block">
              Ver Servidores
            </a>
            <div className="flex items-center gap-4 pt-2 border-t border-primary-light">
              <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors" aria-label="Carrito">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Carrito
              </button>
              <button className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors border border-gray-500 hover:border-white rounded-lg px-3 py-1.5" aria-label="Login">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
