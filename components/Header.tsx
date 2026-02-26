'use client'

import { useState } from 'react'
import Logo from './Logo'
import LanguageSelector from './LanguageSelector'
import CurrencyToggle from './CurrencyToggle'
import VatSelector from './VatSelector'
import { useAppSettings } from '@/lib/context/AppSettingsContext'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useAppSettings()

  return (
    <header className="bg-primary text-white sticky top-0 z-[9999] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + subtitle + selectors */}
          <div className="flex items-center shrink-0">
            <Logo variant="light" />
            <span className="hidden xl:block text-xs text-accent/80 border-l border-primary-light ml-5 pl-5 whitespace-nowrap">
              {t('header.serverStock')}
            </span>
            <div className="hidden md:flex items-center gap-1.5 ml-5">
              <LanguageSelector />
              <CurrencyToggle />
              <VatSelector />
            </div>
          </div>

          {/* Right: divider | Nav links + CTA + Cart + Login */}
          <nav className="hidden md:flex items-center gap-4">
            <span className="text-gray-500 select-none">|</span>
            <a href="#mapa" className="text-xs text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              {t('header.map')}
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              {t('header.docs')}
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              {t('header.contact')}
            </a>
            <a href="#catalogo" className="btn-primary text-xs !py-1.5 !px-4 whitespace-nowrap">
              {t('header.viewServers')}
            </a>
            <button className="relative p-1.5 text-gray-300 hover:text-white transition-colors" aria-label={t('header.cart')}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </button>
            <button className="flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors border border-gray-500 hover:border-white rounded-lg px-2.5 py-1.5 whitespace-nowrap" aria-label="Login">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t('header.login')}
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
            {/* Settings selectors row */}
            <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-primary-light">
              <LanguageSelector />
              <CurrencyToggle />
              <VatSelector />
            </div>

            <a href="#mapa" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-300 hover:text-white transition-colors">
              {t('header.map')}
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
              {t('header.docs')}
            </a>
            <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
              {t('header.contact')}
            </a>
            <a href="#catalogo" onClick={() => setMobileOpen(false)} className="btn-primary text-sm !py-2 !px-5 inline-block whitespace-nowrap">
              {t('header.viewServers')}
            </a>
            <div className="flex items-center gap-4 pt-2 border-t border-primary-light">
              <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors" aria-label={t('header.cart')}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {t('header.cart')}
              </button>
              <button className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors border border-gray-500 hover:border-white rounded-lg px-3 py-1.5" aria-label="Login">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t('header.login')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
