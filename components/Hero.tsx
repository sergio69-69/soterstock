'use client'

import { useAppSettings } from '@/lib/context/AppSettingsContext'

export default function Hero({ serverCount, priceRange }: { serverCount: number; priceRange: string }) {
  const { t } = useAppSettings()

  return (
    <section className="gradient-dark text-white py-10 sm:py-14 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-300">
                {t('hero.serversAvailable', { count: serverCount })}
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3">
              {t('hero.title1')}
              <span className="block text-accent">{t('hero.title2')}</span>
            </h1>

            <p className="text-sm text-gray-400">
              {t('hero.pricesFrom')} <span className="text-white font-semibold">{priceRange}</span> &middot; {t('hero.noVat')} &middot; {t('hero.noContracts')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#mapa" className="btn-primary text-center text-sm !px-6 !py-3">
              {t('hero.viewLocations')}
            </a>
            <a
              href="#catalogo"
              className="text-center border border-white/20 text-white font-heading font-medium px-6 py-3 rounded-pill transition-all duration-300 hover:bg-white/10 hover:border-white/40 text-sm"
            >
              {t('hero.exploreCatalog')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
