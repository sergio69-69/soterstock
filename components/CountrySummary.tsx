'use client'

import { CountryInfo } from '@/types/server'
import CountryFlag from './CountryFlag'
import { useAppSettings } from '@/lib/context/AppSettingsContext'

interface CountrySummaryProps {
  country: CountryInfo
  serverCount: number
  totalStock: number
  priceRange: string
  expanded?: boolean
}

export default function CountrySummary({ country, serverCount, totalStock, priceRange, expanded = false }: CountrySummaryProps) {
  const { t, countryName } = useAppSettings()

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-[10px] shadow-sm border border-gray-100 p-5 border-l-4 border-l-accent hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center gap-3">
        <CountryFlag code={country.code} size={40} className="rounded" />
        <div>
          <h2 className="font-heading font-bold text-xl text-primary">{countryName(country.code)}</h2>
          <p className="text-sm text-gray-500">
            {serverCount} {serverCount === 1 ? t('country.server') : t('country.servers')} &middot; {totalStock} {t('country.unitsInStock')}
          </p>
        </div>
      </div>
      <div className="sm:ml-auto flex items-center gap-3">
        <span className="text-sm text-gray-600">
          {t('country.from')} <span className="font-semibold text-primary">{priceRange}</span>
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
