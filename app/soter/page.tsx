'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useServers } from '@/lib/hooks/useServers'
import { countries } from '@/data/countries'
import { groupServersByCountry, getCountryStats } from '@/lib/groupServers'
import { useAppSettings } from '@/lib/context/AppSettingsContext'
import Hero from '@/components/Hero'
import FilterBar, { Filters } from '@/components/FilterBar'
import CountrySection from '@/components/CountrySection'

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-lg bg-surface animate-pulse flex items-center justify-center">
      <p className="text-sm text-gray-400">...</p>
    </div>
  ),
})

const defaultFilters: Filters = {
  search: '',
  cpuBrand: '',
  coresMin: '',
  ramMin: '',
  storageType: '',
  storageMin: '',
  location: '',
  sortBy: 'price-asc',
}

export default function Home() {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const { t, price, countryName } = useAppSettings()

  const { servers: allServers } = useServers()

  const inStockServers = useMemo(() => {
    return allServers.filter((s) => s.stock > 0)
  }, [allServers])

  const filteredServers = useMemo(() => {
    let result = [...inStockServers]

    if (filters.search) {
      const q = filters.search.toLowerCase()
      result = result.filter(
        (s) =>
          s.cpu.toLowerCase().includes(q) ||
          s.storage.toLowerCase().includes(q) ||
          s.ramType.toLowerCase().includes(q) ||
          s.bandwidth.toLowerCase().includes(q)
      )
    }

    if (filters.cpuBrand) {
      result = result.filter((s) => s.cpuBrand === filters.cpuBrand)
    }

    if (filters.coresMin) {
      const min = parseInt(filters.coresMin)
      result = result.filter((s) => s.cores >= min)
    }

    if (filters.ramMin) {
      const min = parseInt(filters.ramMin)
      result = result.filter((s) => s.ram >= min)
    }

    if (filters.storageType) {
      result = result.filter((s) => s.storageType.includes(filters.storageType))
    }

    if (filters.storageMin) {
      const min = parseInt(filters.storageMin)
      result = result.filter((s) => s.storageCapacity >= min)
    }

    if (filters.location) {
      result = result.filter((s) => s.location === filters.location)
    }

    switch (filters.sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.priceMonthly - b.priceMonthly)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.priceMonthly - a.priceMonthly)
        break
      case 'ram-desc':
        result = [...result].sort((a, b) => b.ram - a.ram)
        break
      case 'cores-desc':
        result = [...result].sort((a, b) => b.cores - a.cores)
        break
      case 'stock-desc':
        result = [...result].sort((a, b) => b.stock - a.stock)
        break
    }

    return result
  }, [inStockServers, filters])

  const groupedServers = useMemo(() => {
    return groupServersByCountry(filteredServers)
  }, [filteredServers])

  const visibleCountries = useMemo(() => {
    if (filters.location) {
      return countries.filter(c => c.code === filters.location)
    }
    return countries
  }, [filters.location])

  const priceRange = useMemo(() => {
    if (inStockServers.length === 0) return price(0)
    const min = Math.min(...inStockServers.map((s) => s.priceMonthly))
    const max = Math.max(...inStockServers.map((s) => s.priceMonthly))
    return `${price(min)} - ${price(max)}${t('table.perMonth')}`
  }, [inStockServers, price, t])

  const mapData = useMemo(() => {
    return countries.map(c => {
      const countryServers = groupServersByCountry(inStockServers).get(c.code) ?? []
      const stats = getCountryStats(countryServers)
      return {
        code: c.code,
        name: countryName(c.code),
        count: stats.count,
        totalStock: stats.totalStock,
        priceRange: stats.count > 0 ? `${price(stats.minPrice)}${t('table.perMonth')}` : '-',
        coordinates: c.coordinates,
      }
    })
  }, [inStockServers, countryName, price, t])

  const hasResults = filteredServers.length > 0

  return (
    <>
      <Hero serverCount={inStockServers.length} priceRange={priceRange} />

      {/* Interactive Map */}
      <section id="mapa" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h2 className="font-heading font-bold text-2xl text-primary mb-2">{t('map.title')}</h2>
          <p className="text-sm text-gray-500">{t('map.subtitle')}</p>
        </div>
        <InteractiveMap countryData={mapData} />
      </section>

      {/* Catalog */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <FilterBar
          filters={filters}
          onChange={setFilters}
          resultCount={filteredServers.length}
        />

        {hasResults ? (
          visibleCountries.map(country => {
            const countryServers = groupedServers.get(country.code) ?? []
            if (countryServers.length === 0) return null
            return (
              <CountrySection
                key={country.code}
                country={country}
                servers={countryServers}
              />
            )
          })
        ) : (
          <div className="bg-white rounded-[10px] shadow-sm border border-gray-100 p-12 text-center">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
            <h3 className="font-heading font-semibold text-lg text-primary mb-2">
              {t('noResults.title')}
            </h3>
            <p className="text-sm text-gray-500">
              {t('noResults.subtitle')}
            </p>
          </div>
        )}
      </section>
    </>
  )
}
